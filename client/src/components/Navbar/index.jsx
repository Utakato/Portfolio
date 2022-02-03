import React from 'react';
import { useState } from 'react';
import "./style.css"
import * as tools from "../../tools"

const Navbar = () => {
    const [isSmallScreen, setIsSmallScreen] = useState(window.matchMedia("(max-width: 800px)").matches)
    const [navbarOpen, setNavbarOpen] = useState(false);
    
    const handleToggle = () => {
        setNavbarOpen(!navbarOpen)
    }
    
    const handleClick = (selector) => () => {
        const target = document.querySelector(selector)
        tools.SmoothScroll(target)
        setNavbarOpen(false)
    }

    function smallScreen(mediaQuery) {
        mediaQuery.matches ? setIsSmallScreen(true) : setIsSmallScreen(false)
    }
      
    let mediaQuery = window.matchMedia("(max-width: 800px)")
    mediaQuery.addEventListener("change",smallScreen)
    
    return isSmallScreen ? 
        <nav className="navbar">
            <button onClick={handleToggle}>{navbarOpen ? <i class="fas fa-times fa-2x"></i>: <i class="fas fa-bars fa-2x"></i>}</button>
            <ul className={`menuNav ${navbarOpen? "showMenu" : ""}`}>
              <li onClick={handleClick(".skills")}>Skills </li>
              <li onClick={handleClick(".projects")}>Projects</li>
              <li onClick={handleClick(".about")}>About</li>
              <li onClick={handleClick(".contact")}>Contact</li>
            </ul>
        </nav>
        :
        <nav>
          <div className="item" onClick={handleClick(".skills")}>Skills</div>
          <div className="item" onClick={handleClick(".projects")}>Projects</div>
          <div className="item" onClick={handleClick(".about")}>About</div>
          <div className="item" onClick={handleClick(".contact")}>Contact</div>
        </nav>
};

export default Navbar;