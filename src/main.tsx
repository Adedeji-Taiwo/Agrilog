import React from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'
import { DashboardProvider } from './context'
import { BrowserRouter } from 'react-router-dom'


createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
  <BrowserRouter>
    <DashboardProvider>
      <App />
    </DashboardProvider>
  </BrowserRouter>
</React.StrictMode>,
)
