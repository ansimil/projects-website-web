import './Navbar.css'
import React from 'react'

const Navbar = () => {
  return (
    <div  className='navbarContainer'>

        <div className='navbarHeader'>
            <h2>ANDREW MILLER</h2>
        </div>

        <div className='navbarLinks'>
            <ul className='listContainer'>
            <li><a href="about">About</a></li>
            <li><a href="projects">Projects</a></li>
            <li><a href="contact">Contact</a></li>              
            </ul>
        </div>

    </div>
  )
}

export default Navbar