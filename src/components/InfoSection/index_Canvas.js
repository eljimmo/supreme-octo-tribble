import { React, Suspense } from 'react';
import {
  InfoContainer,
  InfoWrapper,
  InfoRow,
  Column1,
  Column2,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
} from './InfoElements';
import { Canvas } from '@react-three/fiber'
import Model from '../GEO/Geo'



const InfoSectionCanva = ({
  lightBg,
  imgStart,
  topLine,
  lightText,
  headline,
  description,
  id,
  primary,
  darkText,

}) => {
  console.log(primary);
  return (
    <>
      <InfoContainer lightBg={lightBg} id={id}>
        <InfoWrapper>
          <InfoRow imgStart={imgStart}>
            <Column1>
              <TextWrapper>
                <TopLine>{topLine}</TopLine>
                <Heading lightText={lightText}>{headline}</Heading>
                <Subtitle darkText={darkText}>{description}</Subtitle>
              </TextWrapper>
            </Column1>
            <Column2>
            <Canvas
        shadows
    gl={{ alpha: true, stencil: false, depth: false, antialias: false }}
    camera={{ position: [3, 0, 2], fov: 6.5, near: 1, far: 10 }}
    onCreated={(state) => (state.gl.toneMappingExposure = 1.5)}>
<ambientLight intensity={1} />
<directionalLight position={[-2, 5, 2]} intensity={1} />
<Suspense fallback={null}>
  <Model />

</Suspense>
</Canvas>

            </Column2>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  );
};

export default InfoSectionCanva;

