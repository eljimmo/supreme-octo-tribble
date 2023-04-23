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
        Project Leibniz Analytica
          <br />
          <Typewriter
options={{
strings: ['Creating Intelligence', 'Creating Agency', 'Creating Consciousness', 'Creating Solutions'],
autoStart: true,
loop: true,
}}
/>        </a>
        <div style={{ position: 'absolute', bottom: 40, right: 40, fontSize: '13px' }}>

        <Typewriter
options={{
strings: ['Created by the Project Leibniz Analytica Team', 'Releasing 2024', 'Creating Solutions', 'Creating Intelligence'],
autoStart: true,
loop: true,
}}
/> 
        
        </div>
      </div>
      <Logo style={{ position: 'absolute', top: 40, left: 40, width: 30 }} />
      <div className="info">
        <h1>
        Project Leibniz Analytica


        </h1>
        <List open={state.open}>
          {/* <h3>Lorem ipsum</h3>
          <h3>Lorem ipsum</h3> */}
          <h3>
            {/* <span className="accent">Lorem ipsum</span> */}
          </h3>
          {/* <h4>Lorem ipsum</h4> */}
          {/* <p className="price">$Lorem ipsum</p> */}
          <p>
            Named after Gottfried Wilhelm Leibniz the Father of Calculus, Project Leibniz Analytica is a project that aims to create a platform to build AI models and Agents for Financial Analysis.
            Neuro Evolution Algorithms are a type of Artificial Intelligence Process that is founded on the concept of biology and evolution.
            By mimicking the natural selection processes found in the biological evolution found of animals, we can create a system that can learn and adapt to its environment by creating individuals in a population.
            Subsequently the traits that are found to be beneficial towards optiumium are favored, and the traits that are found to be detrimental towards optiumium are removed in the next generation of individuals.

                      </p>
        </List>
      </div>
    </>
  )
}
