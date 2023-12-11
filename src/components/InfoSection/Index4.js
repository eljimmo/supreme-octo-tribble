import React from 'react';
import { Button } from '../ButtonElements';
import {
    InfoContainer3,
    InfoWrapper,
  InfoRow,
  Column1,
  Column2,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  BtnWrap,
  ImgWrap,
  Img
} from './InfoElements';
import OptimizerComparisonChart from '../../pages/Service_Index/OptimizerChart';
// import OptimizerComparisonChart from '../../../../pages/Service_Index/OptimizerChart';



const sgdSampleData = {
    epochs: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], // example epochs data
    loss: [0.9, 0.85, 0.8, 0.78, 0.76, 0.74, 0.73, 0.72, 0.71, 0.7]  // example loss data for SGD
};

const adamSampleData = {
    epochs: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    loss: [0.9, 0.82, 0.7, 0.6, 0.55, 0.52, 0.5, 0.49, 0.48, 0.47] // example loss data for Adam
};

const rmspropSampleData = {
    epochs: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    loss: [0.9, 0.83, 0.71, 0.63, 0.59, 0.57, 0.54, 0.52, 0.51, 0.5] // example loss data for RMSprop
};

const adagradSampleData = {
    epochs: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    loss: [0.9, 0.86, 0.79, 0.77, 0.75, 0.73, 0.72, 0.71, 0.7, 0.69] // example loss data for Adagrad
};




const InfoSection4 = ({
  lightBg,
  imgStart,
  topLine,
  lightText,
  headline,
  description,
  buttonLabel,
  img,
  alt,
  id,
  primary,
  darkText,
  dark,
  dark2
}) => {
  console.log(primary);
  return (
    <>
      <InfoContainer3 lightBg={lightBg} id={id}>
        <InfoWrapper>
          <InfoRow imgStart={imgStart}>
            <Column1>
              <TextWrapper>
                <TopLine>{topLine}</TopLine>
                <Heading lightText={lightText}>{headline}</Heading>
                <Subtitle darkText={darkText}>{description}</Subtitle>
                <OptimizerComparisonChart adagradData={adagradSampleData} rmspropData={rmspropSampleData} sgdData={sgdSampleData} adamData={adamSampleData} />
              </TextWrapper>
            </Column1>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer3>
    </>
  );
};

export default InfoSection4;
