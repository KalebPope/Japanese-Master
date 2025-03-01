import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Header from './components/layout/Header.tsx'
import Footer from './components/layout/Footer.tsx'
import Home from './pages/Home/Home.tsx'
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
