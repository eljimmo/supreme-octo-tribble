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
        {/* Project Leibniz Analytica */}
          <br />
          {/* <Typewriter
options={{
strings: ['Creating Intelligence', 'Creating Agency', 'Creating Consciousness', 'Creating Solutions'],
autoStart: true,
loop: true,
}}
/>         */}
</a>
        <div style={{ position: 'absolute', bottom: 40, right: 40, fontSize: '13px' }}>

        <Typewriter
options={{
strings: ['The man who loves walking will walk further than the man who loves the destination.', 'The greatest glory in living lies not in never falling, but in rising every time we fall. -Nelson Mandela', 'Do not go where the path may lead, go instead where there is no path and leave a trail. -Ralph Waldo Emerson', 'It is during our darkest moments that we must focus to see the light. -Aristotle', 'Whoever is happy will make others happy too. -Anne Frank', 'You will face many defeats in life, but never let yourself be defeated. -Maya Angelou', 'In the end, it is not the years in your life that count. Its the life in your years. -Abraham Lincoln', 'Life is either a daring adventure or nothing at all. -Helen Keller', 'Many of lifes failures are people who did not realize how close they were to success when they gave up. -Thomas A. Edison'],
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
            Named after Gottfried Wilhelm Leibniz the Father of Calculus, Project Leibniz Analytica is a project that aims to create a platform to build AI models and Agents for Financial Analysis. We utilize a variety of technologies that include Machine Learning, Deep Learning, and Natural Language Processing to create a powerful tool. 
            

                      </p>
        </List>
      </div>
    </>
  )
}



export function Overlay2() {
  const state = useStore()
  return (
    <>
      <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}>
        <a href="https://pmnd.rs/" style={{ position: 'relative', bottom: 40, left: 40, fontSize: '13px' }}>
        Project Leibniz Analytica
          <br />

</a>
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

        <Typewriter
options={{
strings: ['Created by the Project Leibniz Analytica Team', 'Releasing 2024', 'Creating Solutions', 'Creating Intelligence'],
autoStart: true,
loop: true,
}}
/> 


        </h1>
        <List open={state.open}>

  
          <p>
            Neuro Evolution Algorithms are a type of Artificial Intelligence Process that is founded on the concept of biology and evolution.
            By mimicking the natural selection processes found in the biological evolution found of animals, we can create a system that can learn and adapt to its environment by creating individuals in a population.
            Subsequently the traits that are found to be beneficial towards optiumium are favored, and the traits that are found to be detrimental towards optiumium are removed in the next generation of individuals.

                      </p>
        </List>
      </div>
    </>
  )
}





export function Overlay3() {
  const state = useStore()
  return (
    <>
      <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}>
        <a href="https://pmnd.rs/" style={{ position: 'relative', bottom: 40, left: 40, fontSize: '13px' }}>
        Project Leibniz Analytica
          <br />

</a>
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

        <Typewriter
options={{
strings: ['Created by the Project Leibniz Analytica Team', 'Releasing 2024', 'Creating Solutions', 'Creating Intelligence'],
autoStart: true,
loop: true,
}}
/> 


        </h1>
        <List open={state.open}>

  
          <p>
            The motive of Project Leibniz Analytica is to build and tune investment algorithmic trading bots that can adjust to market conditions and learn in real time. Giving users the ability to create their own bots.
            Project Leibniz Analytica is also a stock market analysis tool to better understand the volitility of a users portfolio. By integrating several different technologies Project Leibniz Analytica aims to create a platform that can be used by anyone to better understand the stock market and trade profitabily.
            “You make your money when you buy, not when you sell.” ~Robert Kiyosaki



                      </p>
        </List>
      </div>
    </>
  )
}
