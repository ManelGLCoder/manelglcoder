import './App.css'
import { useState, useEffect } from 'react'
import PCScreen from './components/screen/PCScreen'
import MobileScreen from './components/mobile/screen/MobileScreen'
import { WindowProvider } from './contexts/WindowsContext'
import { GalleryProvider } from './contexts/GalleryContext'

function App() {
  const [device, setDevice] = useState('')
  const [orientation, setOrientation] = useState('')
  const handleWindowResize = ()=> {
      const resolution = window.innerWidth;
      const isMobile = resolution >= 320 && resolution <= 767;
      const isTablet = resolution >= 768 && resolution <= 1024;
      const isDesktop = !isMobile && !isTablet;
      setDevice(
          isDesktop? 'desktop' : isTablet? 'tablet': 'mobile'
      )
      const orientationDevice = screen.orientation.type.split('-')[0]
      setOrientation(orientationDevice)
  }
  useEffect(() => {
      handleWindowResize()
      window.addEventListener("resize", handleWindowResize.bind(this));
      return () => null
}, []);
  return (
    <div className='flex h-dvh w-dvw'>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <WindowProvider>
        <GalleryProvider>
          {
            device == 'desktop'? <PCScreen/> : <MobileScreen orientation={orientation}/>
          }
        </GalleryProvider>
      </WindowProvider>
    </div>
  )
}

export default App
