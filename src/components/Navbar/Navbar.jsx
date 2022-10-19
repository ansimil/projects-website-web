import './Navbar.css'
import React from 'react'

const Navbar = () => {
  return (
    <nav  className='navbarContainer'>

        <div className='navbarHeader'>
            <h2>andrew miller</h2>
        </div>

        <div className='navbarLinks'>
            <ul className='listContainer'>
            <li><a id='about' className='inactive' href="#about">about</a></li>
            <li><a id='projects' className='inactive' href="#projects">projects</a></li>
            <li><a id='contact' className='inactive' href="#contact">contact</a></li>              
            </ul>
        </div>

    </nav>
  )
}

export default Navbar