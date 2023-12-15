import { Children } from 'react'
import { motion } from 'framer-motion'
import { useStore } from './store'
import HeroMachineLearning from "../../components/portfolio_react/components/hero/hero.machinelearning";
import Experience from "../../components/MachineLearning/src/components/experience/Expreience";
import TimeClock from '../../components/TimeClock/Index';


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

            <HeroMachineLearning/>
            <TimeClock/>
            {/* <Experience/> */}
                  </div>

    </>
  )
}

