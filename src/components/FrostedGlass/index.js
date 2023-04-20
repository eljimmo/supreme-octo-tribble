import { createRoot } from 'react-dom/client'
import './styles.css'
import App from './App'
import { Overlay } from './Overlay'

export default function Frosted_App() {
  return (
  <>
    <App />
    <Overlay />
  </>
)
}
