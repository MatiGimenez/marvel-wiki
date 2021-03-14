import React, { useState, useEffect } from 'react'
import './Header.scss'
import logo from '../../assets/images/marvel-wiki-logo.png'

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

  if (width < breakpoint) {
    return (
      <div className="contracted-header">
        <i className="fas fa-bars"></i>
      </div>
    )
  } else {
    return (
      <div className="expanded-header">
        <div>Boton 1</div>
        <div>Boton 2</div>
        <div>
          <img alt="" src={logo} width={200} height={50}/>
        </div>
        <div>Boton 3</div>
        <div>Boton 4</div>
      </div>
    )
  }
}

export default Header