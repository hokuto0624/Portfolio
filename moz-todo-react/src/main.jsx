import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Header from './compment/header/heder.jsx'
import Jobs from './compment/jobs/jobs.jsx'
import Nav from './compment/nav/nav.jsx'
import Lib from './compment/library/library.jsx'
// import Mail from './compment/mail/mail.jsx'
import Footer from './compment/footer/footer.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Nav />
    <Header />
    <Lib />
    <Jobs />
    <Footer />
  </StrictMode>,
)
