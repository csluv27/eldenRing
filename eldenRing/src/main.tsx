import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './index.css'
import App from './webPage/App.tsx'
import Header from './webPage/Header.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>


    <Header />

    <App />
  </StrictMode>,
)
