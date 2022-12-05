import './Navbar.css'
import React from 'react'
import MobileNavbarLinks from './MobileNavbarLinks'
import NavbarLinks from './NavbarLinks'

const Navbar = ({projectsRef, aboutRef, skillsRef, contactRef}) => {
  const navProps = {
    projectsRef, 
    aboutRef, 
    skillsRef, 
    contactRef
  }

  return (
    <nav id='navbar' className='navbarContainer'>
        <NavbarLinks {...navProps} className="navbarLinksContainer" />
        <MobileNavbarLinks {...navProps}/>
    </nav>
  )
}

export default Navbar