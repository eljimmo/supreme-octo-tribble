import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import Navbar from '../../components/Navbar';
import Sidebar from '../../components/Sidebar/index';
import Footer from '../../components/Footer/index';
import Overlay from '../../components/Landing/Overlay';
import Map from '../../components/Maps/index';
import Underlay from '../../components/Landing/Underlay';


const TopLine1 = styled.div`
  color: #00b100;
  font-size: 12px;
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


const AnimatedGradientText1 = styled.h1`
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


const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
`;

const Header = styled.h1`
  text-align: center;
  color: #333;
`;

const DataDisplay = styled.div`
  background-color: #f4f4f4;
  padding: 20px;
  margin-bottom: 20px;
`;

const Analysis = styled.div`
  background-color: #e0e0e0;
  padding: 20px;
`;

const PageWrapper = styled.div`
    max-width: 1200px;
    margin: 75px auto;
    padding: 20px;
    border: 1px solid #00b100;
    border-radius: 5px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);

    @media (max-width: 1200px) {
        margin: 50px auto;
        padding: 15px;
    }

    @media (max-width: 768px) {
        margin: 30px auto;
        padding: 10px;
        max-width: 90%;
    }

    @media (max-width: 480px) {
        margin: 20px auto;
        padding: 5px;
        max-width: 100%;
    }
`;


const Row = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 40px;
`;

const BoxWrapper = styled.div`
  flex: 1;
  background-color: #f9f9f9;
  padding: 20px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  margin: 0 10px;
  text-align: center;

  &:first-child {
    margin-left: 0;
  }

  &:last-child {
    margin-right: 0;
  }
`;

const BoxHeader = styled.h3`
  color: #333;
  margin-bottom: 16px;
`;


const HeroContainer = styled.div`
background: 
/* Diagonal split - top left to bottom right */
linear-gradient(to bottom right, transparent 50%, transparent 50%), 
url('container.jpg') left top,

/* Diagonal split - top right to bottom left */
linear-gradient(to bottom left, transparent 50%, transparent 50%), 
url('containers.jpg') right top;

background-size: 50% 100%, 50% 100%; /* Adjust the size as needed */
background-repeat: no-repeat;
display: flex;
justify-content: center;
align-items: center;
padding: 0 30px;
height: 800px;
position: relative;
z-index: 1;

`;


const HeroContainerTransparent = styled.div`
background: #000000;
display: flex;
justify-content: center;
align-items: center;
padding: 0 30px;
height: 100px;
position: relative;
z-index: 1;

`;


export default function Howitworks() {
  const [isOpen, setIsOpen] = useState(false);
  const sampleData = [10, 12, 15, 20, 27, 35];
  const growth = ((sampleData[sampleData.length - 1] - sampleData[0]) / sampleData[0]) * 100;


  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Navbar toggle={toggle} />
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <hr/>
      <br/>
      <br/>
      <br/>
      <br/>

      <PageWrapper>
        <AnimatedGradientText1>
          2024 Freight Analysis
        </AnimatedGradientText1>
        <DataDisplay>
          <h2>Current Freight Map Movement</h2>
          <p>
            In the modern era, data is invaluable. Leveraging the power of TensorFlow, statistical modeling, 
            and cutting-edge algorithmic systems, our software provides unparalleled insights into complex datasets.
            </p>
            <Map/>

       
        </DataDisplay>
        <Analysis>
          <h2>Booked Freight Shipments </h2>
          <p>
            Deep Learning with TensorFlow: Harnessing the power of neural networks and deep learning models to make sense of massive datasets.
          </p>
          <TopLine1>
            Algorithmic Systems: Sophisticated algorithms designed to detect patterns, anomalies, and meaningful information from raw data.
          </TopLine1>
          <TopLine1>
            Statistical Analysis: Using proven statistical models to infer, predict, and understand underlying trends in the data.
          </TopLine1>
        </Analysis>

        <Row>
          <BoxWrapper>
            <BoxHeader>Carousel Key Result Areas (KRAs)</BoxHeader>
            <p>Utilize the open-source software library for dataflow and machine learning tasks, ensuring precise and efficient analyses.</p>
          </BoxWrapper>
          <BoxWrapper>
            <BoxHeader>Key Performance Indicators | KPIs</BoxHeader>
            <p>Empower decision-making with algorithms that sift through data to highlight actionable insights and patterns.</p>
          </BoxWrapper>
          <BoxWrapper>
            <BoxHeader>Statistical OKRs (Objectives and Key Results) </BoxHeader>
            <p>Apply rigorous statistical methods to predict outcomes, understand data distributions, and infer trends.</p>
          </BoxWrapper>
        </Row>

      </PageWrapper>

      
  <HeroContainer>
                {/* <Map/> */}
                <Underlay/>
              </HeroContainer>


      <Footer/>
    </>
  );
}