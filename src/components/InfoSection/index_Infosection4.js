import { React } from 'react';
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

