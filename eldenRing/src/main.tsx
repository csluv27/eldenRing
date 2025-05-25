import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './index.css'
import App from './webPage/App.tsx'
import Header from './webPage/Header.tsx'
import DetailP from './webPage/DetailP.tsx'
import Character from './webPage/Character.tsx'
import ContentBelow from './webPage/ContentBelow.tsx'
import MainContent from './webPage/MainContent.tsx'
createRoot(document.getElementById('root')!).render(
  <StrictMode>


    <Header />
    <App />
    <MainContent></MainContent>
    <DetailP></DetailP>
    <Character></Character>
    <ContentBelow></ContentBelow>
  </StrictMode>,
)
