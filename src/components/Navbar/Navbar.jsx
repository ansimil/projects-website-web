import './Navbar.css'
import React from 'react'

const Navbar = () => {


  return (
    <nav id='navbar' className='navbarContainer'>

        <div className='navbarHeader'>
            <h2>andrew miller</h2>
        </div>

        <div className='navbarLinks'>
            <ul className='listContainer'>
            <li><a id='aboutNav' className='inactive' href="#about">about</a></li>
            <li><a id='projectsNav' className='inactive' href="#projects">projects</a></li>
            <li><a id='contactNav' className='inactive' href="#contact">contact</a></li>              
            </ul>
        </div>

    </nav>
  )
}

export default Navbar