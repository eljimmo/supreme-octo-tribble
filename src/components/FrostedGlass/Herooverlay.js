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
  font-family: 'Playfair Display', serif;
  font-weight: 700;
  font-size: min(10vw, 5em);
  line-height: 0.9em;
`

const BottomLeft = styled.div`
  position: absolute;
  bottom: 6vw;
  left: 6vw;
  font-family: 'Playfair Display', serif;
  font-weight: 900;
  font-size: min(15vw, 20em);
  line-height: 0.9em;
`

const BottomRight = styled.div`
  position: absolute;
  bottom: 6vw;
  right: 6vw;
  font-family: 'Inter';
  font-weight: 400;
  line-height: 1em;
  letter-spacing: -0.01em;
  font-size: 12px;
  text-align: right;
`

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
  background: #252525;
`
const BarBT = styled.div`
  position: absolute;
  bottom: ${(props) => (props.vertical ? '0px' : '50%')};
  left: ${(props) => (props.vertical ? '50%' : '0px')};
  width: ${(props) => (props.vertical ? '2px' : '150px')};
  height: ${(props) => (props.vertical ? '150px' : '2px')};
  background: #252525;
`


const BarR = styled.div`
  position: absolute;
  top: ${(props) => (props.vertical ? '0px' : '50%')};
  right: ${(props) => (props.vertical ? '50%' : '0px')};
  width: ${(props) => (props.vertical ? '2px' : '150px')};
  height: ${(props) => (props.vertical ? '150px' : '2px')};
  background: #252525;
`

const Hamburger = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  top: 6vw;
  right: 6vw;
  & > div {
    position: relative;
    width: 24px;
    height: 2px;
    background: #252525;
    margin-bottom: 6px;
  }
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
        <i>Design</i>
        <br />
        Type
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




      <BottomLeft>B</BottomLeft>
      <BottomRight>
        2021
        <br />
        poimandres
        <br />
        dev collective
      </BottomRight>
      {/* <LeftMiddle>A flight of stairs</LeftMiddle> */}
      {/* <Hamburger>
        <div />
        <div />
        <div />
      </Hamburger> */}
      <Bar />
      <Bar vertical />
      <BarR />
      <BarBT vertical/>
      {/* <OverlayLine /> Add the LeftBar component here */}

    </>
  )
}
