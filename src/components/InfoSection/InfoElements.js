import styled, { keyframes } from 'styled-components';


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


export const AnimatedGradientText1 = styled.h1`
  animation: ${gradientText} 5s ease-in-out infinite;
  font-size: 50px;

  letter-spacing: 0.8rem;
  text-transform: uppercase;
  text-align: center;
  background: linear-gradient(to right, #ee9ca7, #ffdde1, #2193b0, #6dd5ed);
  background-size: 200%;
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;

  @media screen and (max-width: 480px) {
    font-size: 32px;
  }

`;
export const Wrapper = styled.div`
	border: 1px solid #ccc;
	color: #ddd;
	width: 100%; min-width: 10rem; max-width: 30rem;
	min-height: 15rem;
	padding: 1rem;
	position: fixed;
	top: 50%; left: 50%;
	transform: translate(-50%, -50%);
		
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



export const Wrapper2 = styled.div`

	border: 1px solid #ccc;
	color: #ddd;
	width: 100%; min-width: 10rem; max-width: 30rem;
	min-height: 15rem;
	padding: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;	
  top: 50%; left: 50%;
	transform: translate(-50%, -50%);
		
	&:after,
	&:before {
		content: '';
		color: #ccc;
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

export const HeroContainer1 = styled.div`

  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
  height: 800px;
  position: relative;
  z-index: 1;

  :before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: -webkit-gradient(
        linear,
        left top,
        left bottom,
        from(rgba(0, 0, 0, 0.2)),
        to(rgba(0, 0, 0, 0.2))
      ),
      -webkit-gradient(linear, left top, left bottom, from(rgba(0, 0, 0, 0.2)), to(transparent));
    background: linear-gradient(
        180deg,
        rgba(0, 0, 0, 0.2) 0%,
        rgba(0, 0, 0, 0.6) 100%
      ),
      linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, transparent 100%);
    z-index: 2;
  }
`;


export const InfoContainer = styled.div`
  color: #fff;
  background: ${({ lightBg }) => (lightBg ? '#f9f9f9' : '#010606')};

  @media screen and (max-width: 768px) {
    padding: 100px 0;
  }
`;




export const InfoContainer3 = styled.div`

  color: #fff;
  background: transparent;
  @media screen and (max-width: 768px) {
    padding: 100px 0;
    height: 860px;

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







export const TopLine1 = styled.div`
  color: #00b100;
  font-size: 12px;
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
  color: ${({ lightText }) => (lightText ? '#f7f8fa' : '#f7f8fa')};

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




export const BtnWrap = styled.div`
  display: flex;
  justify-content: flex-start;
`;

export const ImgWrap = styled.div`
  max-width: 555px;
  width: 100%;
  height: 100%;
  margin-top: 0;
  margin-right: 0;
  margin-left: 10px;
  padding-right: 0;
`;

export const Img = styled.img`
  width: 100%;
  margin-top: 0;
  margin-right: 0;
  margin-left: 10px;
  padding-right: 0;
`;


