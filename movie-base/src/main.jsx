import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { MovieProvider } from './context/MovieContext';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <MovieProvider>
  <StrictMode>
    <App />
  </StrictMode>,
  </MovieProvider>
  </BrowserRouter>
)
