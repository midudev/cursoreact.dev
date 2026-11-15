import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { Router } from 'wouter'
import { useHashLocation } from './useHashLocation'
import './index.css'

createRoot(document.getElementById('root') as HTMLElement).render(
  <StrictMode>
    <Router hook={useHashLocation}><App /></Router>
  </StrictMode>
)
