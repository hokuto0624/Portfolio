import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Jobs from './compment/jobs/jobs.jsx'
import Nav from './compment/nav/nav.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Nav />
    <Jobs />
  </StrictMode>,
)
