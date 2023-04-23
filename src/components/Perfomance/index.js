import { createRoot } from 'react-dom/client'
import { Footer } from '@pmndrs/branding'
import './styles.css'
import App from './App'
import { Overlay } from '../FrostedGlass/Overlay';

export default function P_App() {
  return (
  <>
    <App />
    <Overlay />
    {/* <Footer date="22. June" year="2021" /> */}
  </>
  )
}


