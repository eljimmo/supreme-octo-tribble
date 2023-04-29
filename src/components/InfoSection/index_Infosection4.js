import { React, Suspense } from 'react';
import { Button, HrefButton, Button1 } from '../ButtonElements';
import {
  InfoContainer,
  InfoWrapper,
  InfoRow,
  Column1,
  Column2,
  TextWrapper,
  TopLine,
  Heading,
  InfoContainer3,
  Subtitle,
  BtnWrap,
  ImgWrap,
  Img
} from './InfoElements';
import { Canvas } from '@react-three/fiber'
import { useAspect, useVideoTexture, useTexture } from '@react-three/drei'
import Model from '../GEO/Geo'
import SombreroSuperficieMath from '../3d_models/Sombrero_superficie_math';
import Scenemodel from '../3d_models/Scene_draco'






const InfoSection6 = ({
  imgStart,
  topLine,
  lightText,
  headline,
  description,
  img,
  alt,
  primary,
  darkText,

}) => {
  console.log(primary);
  return (
    <>
      <InfoContainer3>
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
      </InfoContainer3>
    </>
  );
};

export default InfoSection6;

