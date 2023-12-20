import styled from 'styled-components'
import { useStore } from './store'
import Typewriter from 'typewriter-effect';
import './styles.css';
import { Children } from 'react'
import { motion } from 'framer-motion'
import { Logo } from '@pmndrs/branding'


const TopLeft = styled.div`
  position: absolute;
  top: 6vw;
  left: 6vw;
  line-height: 1.5; /* Adjust line height as needed */
  max-width: 40%; /* Limit the width to control text wrapping */
  overflow: hidden; /* Hide any overflow content */
  word-wrap: break-word; /* Allow words to break to the next line */
`;

const StyledParagraph = styled.p`
  font-size: 16px;
  color: #ffffff;
  margin: 0; /* Remove default margin */
  /* You can add padding or margin here as well */

  @media screen and (max-width: 768px) {
    font-size: 14px; /* Adjust font size for mobile devices */
  }
`;

const BottomLeft = styled.div`
  position: absolute;
  bottom: 6vw;
  left: 6vw;

  line-height: 1.5; /* Adjust line height as needed */
  max-width: 40%; /* Limit the width to control text wrapping */
  overflow: hidden; /* Hide any overflow content */
  word-wrap: break-word; /* Allow words to break to the next line */
`;

const BottomRight = styled.div`
  position: absolute;
  bottom: 6vw;
  right: 6vw;

  text-align: right;
  line-height: 1.5; /* Adjust line height as needed */
  max-width: 40%; /* Limit the width to control text wrapping */
  overflow: hidden; /* Hide any overflow content */
  word-wrap: break-word; /* Allow words to break to the next line */
`;

const LeftMiddle = styled.div`
  position: absolute;
  bottom: 50%;
  right: 6vw;
  font-family: 'Inter';
  font-weight: 400;
  line-height: 1em;
  letter-spacing: -0.01em;
  font-size: 12px;
  transform: rotate(90deg) translate3d(50%, 0, 0);
  transform-origin: 100% 50%;
`

const Bar = styled.div`
  position: absolute;
  top: ${(props) => (props.vertical ? '0px' : '50%')};
  left: ${(props) => (props.vertical ? '50%' : '0px')};
  width: ${(props) => (props.vertical ? '2px' : '150px')};
  height: ${(props) => (props.vertical ? '150px' : '2px')};
  background: transparent; /* Set the background to transparent */
  box-shadow: 0 0 10px 5px white; /* Add a white box-shadow for the glow effect */
`;


const BarBT = styled.div`
  position: absolute;
  bottom: ${(props) => (props.vertical ? '0px' : '50%')};
  left: ${(props) => (props.vertical ? '50%' : '0px')};
  width: ${(props) => (props.vertical ? '2px' : '150px')};
  height: ${(props) => (props.vertical ? '150px' : '2px')};
  background: transparent; /* Set the background to transparent */
  box-shadow: 0 0 10px 5px white; /* Add a white box-shadow for the glow effect */
`;

const BarR = styled.div`
  position: absolute;
  top: ${(props) => (props.vertical ? '0px' : '50%')};
  right: ${(props) => (props.vertical ? '50%' : '0px')};
  width: ${(props) => (props.vertical ? '2px' : '150px')};
  height: ${(props) => (props.vertical ? '150px' : '2px')};
  background: #ffffff;
`




const container = {
  hidden: { opacity: 0, height: 0, transition: { staggerChildren: 0.05 } },
  show: {
    opacity: 1,
    height: 'auto',
    transition: { when: 'beforeChildren', staggerChildren: 0.05 }
  }
}

const item = {
  hidden: { opacity: 0, y: '100%' },
  show: { opacity: 1, y: 0 }
}

function List({ children, open }) {
  return (
    <motion.ul variants={container} initial="hidden" animate={open ? 'show' : 'hidden'}>
      {Children.map(children, (child) => (
        <li>
          <motion.div variants={item}>{child}</motion.div>
        </li>
      ))}
    </motion.ul>
  )
}

export function Underlay() {
  const state = useStore()
  return (
    <>
      
      <TopLeft>
        <StyledParagraph>
          AI has revolutionized the world of options trading, introducing advanced tools that magnify strategic decision-making and bolster operational efficiencies.
        </StyledParagraph>
        <StyledParagraph>
          With its computational prowess, AI underscores the importance of informed trading, enabling traders to harness cutting-edge tools for more accurate forecasts and optimized trade strategies.
        </StyledParagraph>
      </TopLeft>


      <div className="info">
                                  <h1 style={{ color: 'white' }}>
                                          <Typewriter
                                            options={{
                                              strings: ['Project Leibniz', 'Releasing 2024', 'Creating Intelligent Solutions', 'Discovering Artificial Reasoning'],
                                              autoStart: true,
                                              loop: true,
                                            }}
                                          />
                                  </h1>

                  
                                  <List open={state.open}>
                                          <p color='white'>
                                                                                        Named in homage to Gottfried Wilhelm Leibniz, the pioneer of calculus, Project Leibniz Analytica is designed with a singular focus: to revolutionize the realm of options trading. Our platform offers an advanced suite for constructing AI-driven research models and experimental agents dedicated to financial analysis and decision-making in options trading. By leveraging cutting-edge technologies, we've cultivated an ecosystem where traders can employ analytical bots to simulate stock movements, strategize trades, forecast potential values, and visualize prospective profits. With Project Leibniz Analytica, we're not just offering a tool; we're shaping the future of informed options trading.          
                                          </p>
                                  </List>                  
      </div>




      <BottomLeft>
{/*         
      <StyledParagraph>
      Finding patterns in data is a key component of machine learning. In fact, it's the primary way that ML algorithms learn. The more data you feed an ML algorithm, the more patterns it can find, and the more accurate its predictions become.
        </StyledParagraph>
        <StyledParagraph>
        Sophisticated AI-driven perspective leveraging deep learning empowers traders to manage their positions with enhanced precision and foresight.            
      </StyledParagraph> */}


      </BottomLeft>
      <BottomRight>

        
      <StyledParagraph>
      Finding patterns in data is a key component of machine learning. In fact, it's the primary way that ML algorithms learn. The more data you feed an ML algorithm, the more patterns it can find, and the more accurate its predictions become.
        </StyledParagraph>
        <StyledParagraph>
        Sophisticated AI-driven perspective leveraging deep learning empowers traders to manage their positions with enhanced precision and foresight.            
      </StyledParagraph>


      </BottomRight>
      {/* <LeftMiddle>A flight of stairs</LeftMiddle> */}
      {/* <Hamburger>
        <div />
        <div />
        <div />
      </Hamburger> */}
      <Bar />
      <Bar vertical />
      {/* <BarR /> */}
      <BarBT vertical/>
      {/* <OverlayLine /> Add the LeftBar component here */}

    </>
  )
}
