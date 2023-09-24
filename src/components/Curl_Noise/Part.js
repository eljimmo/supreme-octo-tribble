import * as THREE from 'three';
import { useMemo, useState, useEffect, useRef } from 'react';
import { createPortal, useFrame } from '@react-three/fiber';
import { useFBO } from '@react-three/drei';
import './shaders/simulationMaterial';
import './shaders/dofPointsMaterial';

export function Parti({ speed, fov, aperture, focus, curl, size = 512, ...props }) {
    const simRef = useRef();
    const renderRef = useRef();
    const [scene] = useState(() => new THREE.Scene())
    const [camera] = useState(() => new THREE.OrthographicCamera(-1, 1, 1, -1, 1 / Math.pow(2, 53), 1))
    const [positions] = useState(() => new Float32Array([-1, -1, 0, 1, -1, 0, 1, 1, 0, -1, -1, 0, 1, 1, 0, -1, 1, 0]))
    const [uvs] = useState(() => new Float32Array([0, 1, 1, 1, 1, 0, 0, 1, 1, 0, 0, 0]))
    const target = useFBO(size, size, {
      minFilter: THREE.NearestFilter,
      magFilter: THREE.NearestFilter,
      format: THREE.RGBAFormat,
      type: THREE.FloatType
    })


    const particles = useMemo(() => {
        const length = size * size
        const particles = new Float32Array(length * 3)
        for (let i = 0; i < length; i++) {
          let i3 = i * 3
          particles[i3 + 0] = (i % size) / size
          particles[i3 + 1] = i / size / size
        }
        return particles
      }, [size])
      // Update FBO and pointcloud every frame


    // ... other existing initialization code ...

    const [stockData, setStockData] = useState(null);

    useEffect(() => {
        // Fetch data from the IEX Cloud API.
        fetch('https://cloud.iexapis.com/stable/stock/MSFT/batch?types=quote,company,news,intraday-prices&last=1&token=pk_0e682b29c77d48f9804e3dd05453bf0e')
            .then(response => response.json())
            .then(data => {
                setStockData(data);
            })
            .catch(error => {
                console.error("Error fetching stock data:", error);
            });
    }, []);

    useFrame((state) => {
        state.gl.setRenderTarget(target)
        state.gl.clear()
        state.gl.render(scene, camera)
        state.gl.setRenderTarget(null)
        renderRef.current.uniforms.positions.value = target.texture
        renderRef.current.uniforms.uTime.value = state.clock.elapsedTime
        renderRef.current.uniforms.uFocus.value = THREE.MathUtils.lerp(renderRef.current.uniforms.uFocus.value, focus, 0.1)
        renderRef.current.uniforms.uFov.value = THREE.MathUtils.lerp(renderRef.current.uniforms.uFov.value, fov, 0.1)
        renderRef.current.uniforms.uBlur.value = THREE.MathUtils.lerp(renderRef.current.uniforms.uBlur.value, (5.6 - aperture) * 9, 0.1)
        simRef.current.uniforms.uTime.value = state.clock.elapsedTime * speed
        simRef.current.uniforms.uCurlFreq.value = THREE.MathUtils.lerp(simRef.current.uniforms.uCurlFreq.value, curl, 0.1)
        // ... other existing frame update code ...

        // Adjusting particle properties based on stock data.
        if (stockData) {
            const { change } = stockData;

            // Here, as an example, the 'curl' value is adjusted based on stock change.
            // Actual logic can be more sophisticated based on your needs.
            if (change > 0) {
                curl += 0.01;
            } else {
                curl -= 0.01;
            }

            // Assuming you have uniforms in the shader to accept stock change and 
            // adjust particle properties. This is just a placeholder, you might 
            // need to modify your shader to handle these uniforms.
            simRef.current.uniforms.stockChange.value = change;
        }
    });

    return (
        <>
            {createPortal(
                <mesh>
                    <simulationMaterial ref={simRef} />
                    <bufferGeometry>
                        <bufferAttribute attach="attributes-position" count={positions.length / 3} array={positions} itemSize={3} />
                        <bufferAttribute attach="attributes-uv" count={uvs.length / 2} array={uvs} itemSize={2} />
                    </bufferGeometry>
                </mesh>,
                scene
            )}
            <points {...props}>
                <dofPointsMaterial ref={renderRef} />
                <bufferGeometry>
                    <bufferAttribute attach="attributes-position" count={particles.length / 3} array={particles} itemSize={3} />
                </bufferGeometry>
            </points>
        </>
    )
}
