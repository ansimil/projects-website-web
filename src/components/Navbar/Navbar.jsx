import './Navbar.css'
import React from 'react'

const Navbar = ({projectsRef, aboutRef}) => {

  const scrollToSection = (ref) => {
    window.scrollTo({
      top: ref.current.offsetTop,
      behavior: 'smooth'
    })
  }

  return (
    <nav id='navbar' className='navbarContainer'>

        <div className='navbarHeader'>
            <h2>andrew miller</h2>
        </div>

        <div className='navbarLinks'>
            <ul className='listContainer'>
            <li><h3 onClick={() => {scrollToSection(aboutRef)}} id='aboutNav' className='inactive'>about</h3></li>
            <li><h3 onClick={() => {scrollToSection(projectsRef)}} id='projectsNav' className='inactive'>projects</h3></li>
            <li><a id='contactNav' className='inactive' href="#contact">contact</a></li>              
            </ul>
        </div>

    </nav>
  )
}

export default Navbar