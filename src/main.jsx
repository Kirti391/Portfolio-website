import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import "./styles/animations.css";
import { Toaster } from "sonner";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Toaster
        position="top-right"
        richColors
        theme="dark"
      />
    <App />
  </StrictMode>,
)
