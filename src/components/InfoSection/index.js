import { React, Suspense } from 'react';
// import { Button, HrefButton, Button1 } from '../ButtonElements';
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
  // BtnWrap,
  ImgWrap,
  Img
} from './InfoElements';
// import { Canvas } from '@react-three/fiber'
// import { useAspect, useVideoTexture, useTexture } from '@react-three/drei'
// import Model from '../GEO/Geo'
// import SombreroSuperficieMath from '../3d_models/Sombrero_superficie_math';
// import Scenemodel from '../3d_models/Scene_draco'
// import { Button } from '@mantine/core';




// function Scene() {
//   const size = useAspect(1800, 1000)
//   return (
//     <mesh scale={size}>
//       <planeGeometry />
//       <Suspense fallback={<FallbackMaterial url="c4cA8UN.jpg" />}>
//         <VideoMaterial url="drei.mp4" />
//       </Suspense>
//     </mesh>
//   )
// }

// function VideoMaterial({ url }) {
//   const texture = useVideoTexture(url)
//   return <meshBasicMaterial map={texture} toneMapped={false} />
// }

// function FallbackMaterial({ url }) {
//   const texture = useTexture(url)
//   return <meshBasicMaterial map={texture} toneMapped={false} />
// }




const InfoSection = ({
  lightBg,
  imgStart,
  topLine,
  lightText,
  headline,
  description,
  // buttonLabel,
  img,
  alt,
  id,
  primary,
  darkText,
  // dark,
  // dark2
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
            <ImgWrap>
                <Img src={img} alt={alt} />
              </ImgWrap>

            </Column2>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  );
};

export default InfoSection;

