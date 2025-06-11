import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Aurora from './components/Background.jsx'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from './components/context/ThemeProvider.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <ThemeProvider>
        {/* Render Aurora as a background, then overlay App */}
        <div className="relative min-h-screen w-full ">
          <Aurora
            colorStops={["#fff", "#fff", "#fff"]}
            blend={0.5}
            amplitude={3.0}
            speed={1}
          />
          <div className="absolute inset-0 z-10 scrollbar-hide overflow-scroll">
            <App />
          </div>
        </div>
      </ThemeProvider>
    </BrowserRouter>
  </StrictMode>,
)
