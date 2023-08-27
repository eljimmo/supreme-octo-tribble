import styled,  { keyframes } from 'styled-components';

export const InfoContainer = styled.div`
  color: #fff;
  background: ${({ lightBg }) => (lightBg ? '#f9f9f9' : '#010606')};

  @media screen and (max-width: 768px) {
    padding: 100px 0;
  }
`;


export const InfoContainer2 = styled.div`
  color: #fff;
  background: ${({ lightBg }) => (lightBg ? '#f9f9f9' : '#010606')};

  @media screen and (max-width: 768px) {
    padding: 100px 0;
    height: 860px;

  }
`;

export const InfoContainer3 = styled.div`
  border: 1px solid #ccc;
  color: #fff;
  background: transparent;
  @media screen and (max-width: 768px) {
    padding: 100px 0;
    height: 860px;

    &:after,
    &:before {
      content: '';
      color: #ccc;
      position: absolute;
      width: 0.5rem; height: 0.5rem;
    }
  
    &:before {
      bottom: -0.5rem;
      right: -0.5rem;
      border-bottom: 1px solid #ccc;
      border-right: 1px solid #ccc;
    }
  
    &:after {
      top: -0.5rem;
      left: -0.5rem;
      border-top: 1px solid #ccc;
      border-left: 1px solid #ccc;
    }
  `;



export const InfoWrapper = styled.div`
  display: grid;
  z-index: 1;
  height: 860px;
  width: 100%;
  max-width: 1100px;
  margin-right: auto;
  margin-left: auto;
  padding: 0 24px;
  justify-content: center;
`;



export const InfoWrapper2 = styled.div`
  display: grid;
  z-index: 1;
  width: 100%;
  max-width: 1100px;
  margin-right: auto;
  margin-left: auto;
  padding: 0 24px;
  justify-content: center;
`;

export const InfoRow = styled.div`
  display: grid;
  grid-auto-columns: minmax(auto, 1fr);
  align-items: center;
  grid-template-areas: ${({ imgStart }) =>
    imgStart ? "'col2 col1'" : "'col1 col2'"};
  /* Must use '\' css class \'' */

  @media screen and (max-width: 768px) {
    grid-template-areas: ${({ imgStart }) =>
      imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`};
  }
`;

export const Column1 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col1;
`;

export const Column2 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col2;
`;


export const Column2_5 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col2;
`;

export const TextWrapper = styled.div`
  max-width: 540px;
  padding-top: 0;
  padding-bottom: 60px;
`;

export const TopLine = styled.div`
  color: #00b100;
  font-size: 16px;
  line-height: 16px;
  font-weight: 700;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  margin-bottom: 16px;
`;


export const BTopLine = styled.div`
  color: #4485c9;
  font-size: 16px;
  line-height: 16px;
  font-weight: 700;
  letter-spacing: 0.5rem;
  text-transform: uppercase;
  margin-bottom: 16px;

  @media screen and (max-width: 480px) {
    font-size: 16px;
  }

`;


export const RTopLine = styled.div`
  color: #ff0900;
  font-size: 16px;
  line-height: 16px;
  font-weight: 700;
  letter-spacing: 0.5rem;
  text-transform: uppercase;
  margin-bottom: 16px;

  @media screen and (max-width: 480px) {
    font-size: 16px;
  }

`;

export const ZTopLine = styled.div`
  color: #ffffff;
  font-size: 12px;
  line-height: 16px;
  font-weight: 700;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  margin-bottom: 16px;
`;



export const BlackTopLine = styled.div`
  color: #000000;
  font-size: 16px;
  line-height: 16px;
  font-weight: 700;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  margin-bottom: 16px;
`;


const gradientText = keyframes`
{
0% {
  background-position: 0 50%;
}
50% {
  background-position: 100% 50%;
}
100% {
  background-position: 0 50%;
}}
`;

export const AnimatedGradientSmall = styled.h1`
  animation: ${gradientText} 5s ease-in-out infinite;
  font-size: 14px;

  letter-spacing: 0.8rem;
  text-transform: uppercase;
  text-align: center;
  background: linear-gradient(to right, #ee9ca7, #ffdde1, #2193b0, #6dd5ed);
  background-size: 200%;
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;

  @media screen and (max-width: 480px) {
    font-size: 14px;
  }

`;


export const WhiteTopLine = styled.div`
  color: #ffffff ;
  font-size: 16px;
  line-height: 16px;
  font-weight: 700;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  margin-bottom: 16px;
`;



export const Heading = styled.h1`
  margin-bottom: 24px;
  font-size: 48px;
  line-height: 1.1;
  font-weight: 600;
  color: ${({ lightText }) => (lightText ? '#f7f8fa' : '#010606')};

  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`;


export const Heading1 = styled.h1`
  margin-bottom: 24px;
  font-size: 48px;
  padding: 0 15px;
  line-height: 1.1;
  font-weight: 600;
  color: ${({ lightText }) => (lightText ? '#f7f8fa' : '#010606')};

  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`;


export const Heading2 = styled.h1`
  margin-bottom: 24px;
  font-size: 48px;
  line-height: 1.1;
  font-weight: 600;
  color: ${({ lightText }) => (lightText ? '#f7f8fa' : '#F7F8FA')};

  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`;


export const Subtitle = styled.p`
  max-width: 440px;
  margin-bottom: 35px;
  font-size: 18px;
  line-height: 24px;
  color: ${({ darkText }) => (darkText ? '#010606' : '#fff')};
`;


export const Subtitle2 = styled.p`
  max-width: 300px;
  margin-bottom: 35px;
  font-size: 14px;
  line-height: 24px;
  color: ${({ darkText }) => (darkText ? '#010606' : '#010606')};
`;


export const Subtitle3 = styled.p`
  max-width: 300px;
  padding: 0 15px;
  margin-bottom: 35px;
  font-size: 14px;
  line-height: 24px;
  color: ${({ darkText }) => (darkText ? '#010606' : '#010606')};
`;

export const BtnWrap = styled.div`
  display: flex;
  justify-content: flex-start;
`;

export const ImgWrap = styled.div`
  max-width: 555px;
  height: 100%;
`;

export const Img = styled.img`
  width: 100%;
  margin-top: 0;
  margin-right: 0;
  margin-left: 10px;
  padding-right: 0;
`;
