import { Children } from 'react'
import { motion } from 'framer-motion'
import { Logo } from '@pmndrs/branding'
import { useStore } from './store'
import Typewriter from 'typewriter-effect';



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
strings: ['Project Leibniz', 'Releasing 2024', 'Creating Solutions', 'Creating Intelligence'],
autoStart: true,
loop: true,
}}
/> 


        </h1>
        <List open={state.open}>
          <p>
            Named after Gottfried Wilhelm Leibniz the Father of Calculus, Project Leibniz Analytica is a project that aims to create a platform to build research AI models and experimentational Agents for Financial Analysis & decision making. We utilize a variety of technologies to create a powerful ecosystem for testing analytical agents. 


                      </p>
        </List>
      </div>
    </>
  )
}

