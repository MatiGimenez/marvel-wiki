import React, { useState, useEffect } from 'react'
import './Header.scss'

const Header = () => {

  const [width, setWidth] = useState(window.innerWidth);
  const breakpoint = 700;

  useEffect(() => {
    const handleResizeWindow = () => setWidth(window.innerWidth);
    // subscribe to window resize event "onComponentDidMount"
    window.addEventListener("resize", handleResizeWindow);
    return () => {
      // unsubscribe "onComponentDestroy"
      window.removeEventListener("resize", handleResizeWindow);
    };
  }, []);

  return (
    <div className="header">
      {
        width < breakpoint ?
          <i class="fas fa-bars"></i> 
          : <>
              <div>Boton 1</div>
              <div>Boton 2</div>
              <div>Boton 3</div>
              <div>Boton 4</div>
            </>
      }
    </div>
  )
}

export default Header