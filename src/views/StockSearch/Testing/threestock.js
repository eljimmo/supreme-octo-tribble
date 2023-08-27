import React, { useEffect, useRef } from 'react';
import axios from 'axios';
import * as THREE from 'three';

const ThreeStockCard = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const responseMovers = await axios.get(
          'https://cloud.iexapis.com/stable/stock/market/list/mostactive',
          {
            params: {
              token: 'pk_0e682b29c77d48f9804e3dd05453bf0e', // Replace with your actual API token
            },
          }
        );

        const moversData = responseMovers.data;

        // Setup Three.js scene
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(
          75,
          containerRef.current.offsetWidth / containerRef.current.offsetHeight,
          0.1,
          1000
        );
        const renderer = new THREE.WebGLRenderer();
        renderer.setSize(containerRef.current.offsetWidth, containerRef.current.offsetHeight);
        containerRef.current.appendChild(renderer.domElement);

        // Create bars using Three.js
        moversData.forEach((stock, index) => {
          const geometry = new THREE.BoxGeometry(1, stock.changePercent * 50, 1);
          const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
          const cube = new THREE.Mesh(geometry, material);
          cube.position.set(index * 2 - moversData.length, stock.changePercent * 25, 0);
          scene.add(cube);
        });

        // Position the camera
        camera.position.z = 5;

        // Animation function
        const animate = () => {
          requestAnimationFrame(animate);

          // Rotate the cubes (optional)
          scene.children.forEach((cube) => {
            cube.rotation.x += 0.01;
            cube.rotation.y += 0.01;
          });

          renderer.render(scene, camera);
        };

        animate();

        return () => {
          // Clean up when component unmounts
          scene.clear();
          renderer.dispose();
        };
      } catch (error) {
        console.error('Error fetching stock data:', error);
      }
    };

    fetchData();
  }, []);

  return <div className="card" ref={containerRef}></div>;
};

export default ThreeStockCard;
