import { Children } from 'react'
import { motion } from 'framer-motion'
import { Logo } from '@pmndrs/branding'
import { useStore } from './store'
import Typewriter from 'typewriter-effect';
// import Navbar from '../Navbar';
import Heroartificialintelligence from "../../components/portfolio_react/components/hero/hero.artificialintelligence";


const container = {
  hidden: { opacity: 0, height: 0, transition: { staggerChildren: 0.05 } },
  show: {
    opacity: 1,
    height: 'auto',
// width: '1000px',

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
        // <li>
          <motion.div variants={item}>{child}</motion.div>
        // </li>
      ))}
    </motion.ul>
  );
}


export function Overlay() {
  const state = useStore()
  return (
    <>
      <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}>


        <a href="https://pmnd.rs/" style={{ position: 'absolute', bottom: 40, left: 40, fontSize: '13px' }}>
          <br />
</a>
        <div style={{ position: 'absolute', bottom: 40, right: 40, fontSize: '13px' }}>

        <Typewriter
          options={{
          strings: ['The man who loves walking will walk further than the man who loves the destination.', 'The greatest glory in living lies not in never falling, but in rising every time we fall. -Nelson Mandela', 'Do not go where the path may lead, go instead where there is no path and leave a trail. -Ralph Waldo Emerson', 'It is during our darkest moments that we must focus to see the light. -Aristotle', 'Whoever is happy will make others happy too. -Anne Frank', 'You will face many defeats in life, but never let yourself be defeated. -Maya Angelou', 'In the end, it is not the years in your life that count. Its the life in your years. -Abraham Lincoln', 'Life is either a daring adventure or nothing at all. -Helen Keller', 'Many of lifes failures are people who did not realize how close they were to success when they gave up. -Thomas A. Edison', 'All men dream: but not equally. Those who dream by night in the dusty recesses of their minds wake up in the day to find it was vanity, but the dreamers of the day are dangerous men, for they may act their dreams with open eyes, to make it possible.- T.E Lawrence', 'Your success will be proportioned to the amount of mental effort you devote to it. - T.E Lawrence '],
          autoStart: true,
          loop: true,
          }}
          /> 
        
        </div>
      </div>
      <Logo style={{ position: 'absolute', top: 40, left: 40, width: 30 }} />


                              <div className="info">
                                <h1>
                                <Typewriter
                                  options={{
                                  strings: ['Project Leibniz', 'Releasing 2024', 'Creating Intelligent Solutions', 'Discovering Artificial Reasoning'],
                                  autoStart: true,
                                  loop: true,
                                  }}
                                  /> 


                                </h1>
                                <List open={state.open}>


                                <Heroartificialintelligence/>
                                
                                
                                              {/* <p>
                                              "Project Leibniz Analytica, named to honor the legacy of calculus pioneer Gottfried Wilhelm Leibniz, is not just a platform but a paradigm shift in trading technologies. 

                                    At the heart of Project Leibniz Analytica lies an advanced suite designed to serve both novice traders and seasoned analysts. Users can engage with our suite to construct, test, and refine trading strategies through a sophisticated environment that includes options, stocks, and beyond. Our platform facilitates the simulation of stock movements, enabling traders to forecast potential values and visualize prospective profits without the immediate risks of actual capital investment.

                                    One of our cornerstone features, bot paper trading, allows users to experiment with trading bots that execute trades in a simulated market environment. 

                                    Furthermore, Project Leibniz Analytica nurtures an ecosystem of analytical bots that can automate the exploration of market trends and trading opportunities. These bots are designed to learn from market fluctuations, trader behavior, and economic indicators to propose informed trading strategies, be it in real-world scenarios or within the risk-free confines of paper trading.

                                                          </p> */}
                                </List>
                              </div>


      {/* <Navbar/> */}

    </>
  )
}

