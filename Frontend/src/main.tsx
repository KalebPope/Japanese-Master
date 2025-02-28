import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Header from './Header.tsx'
import Footer from './Footer.tsx'
import Home from './Home.tsx'
import {DarkModeProvider} from './context/DarkmodeContext.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <DarkModeProvider>
    <Header />
    <Home />
    <Footer />
    </DarkModeProvider>
  </StrictMode>,
)
