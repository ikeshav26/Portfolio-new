import React from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import Home from './pages/Home'
import Project from './pages/Project'
import Contact from './pages/Contact'
import About from './pages/About'
import { FloatingDockDemo } from '../src/components/FloatingDoc'
import Header from './components/Header'
import Particles from './components/ui/Particles.jsx';
import BlobCursor from './components/BlobCursor';
import { useTheme } from './components/context/ThemeProvider';

const App = () => {
  const location = useLocation();
  const isHome = location.pathname === "/" || location.pathname === "/home";
  const { theme } = useTheme();

  // Set particle colors based on theme
  const particleColors = theme === 'dark'
    ? ['#ffffff', '#cccccc']
    : ['#000000', '#333333'];

  return (
    <div className="relative min-h-screen w-full scrollbar-hide overflow-scroll">
      
      <div className="fixed top-7/8 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50">
        <FloatingDockDemo/>
      </div>
      {/* Only show global Particles and BlobCursor if NOT on Home */}
      {!isHome && (
        <>
          <div>
            <Header/>
          </div>
          <div className="fixed inset-0 pointer-events-none z-0">
            <Particles
              particleColors={particleColors}
              particleCount={200}
              particleSpread={10}
              speed={0.1}
              particleBaseSize={100}
              moveParticlesOnHover={true}
              alphaParticles={false}
              disableRotation={false}
            />
          </div>
          {/* BlobCursor behind all content except Particles */}
          <BlobCursor
            className="fixed inset-0 w-full h-full z-0"
            blobType="circle"
            fillColor="#B98AF3"
            trailCount={3}
            sizes={[30, 60, 40]}
            innerSizes={[10, 20, 15]}
            innerColor="rgba(255,255,255,0.8)"
            opacities={[0.6, 0.6, 0.6]}
            shadowColor="rgba(0,0,0,0.75)"
            shadowBlur={5}
            shadowOffsetX={10}
            shadowOffsetY={10}
            filterStdDeviation={30}
            useFilter={true}
            fastDuration={0.1}
            slowDuration={0.5}
            zIndex={-2}
          >
            {/* Render children inside BlobCursor for other pages */}
            <div style={{ position: 'relative', zIndex: 1 }}>
              {/* Your routes/components go here */}
            </div>
          </BlobCursor>
        </>
      )}
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/projects' element={<Project/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
      </Routes>
    </div>
  )
}

export default App
