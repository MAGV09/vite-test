import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
// import {Greetings} from './Greeting.jsx'
import Greetings from './Greeting.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <Greetings/>
  </StrictMode>,
)
