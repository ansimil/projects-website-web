import React from 'react'

const NavbarLinks = ({projectsRef, aboutRef, skillsRef, contactRef}) => {

    const scrollToSection = (ref) => {
        window.scrollTo({
            top: ref.current.offsetTop,
            behavior: 'smooth'
        })
        }

    return (
        <div className='navbarLinks'>
        <div className='navbarHeader'>
            <h2>andrew miller</h2>
        </div>
                <ul className='listContainer'>
                <li><h3 onClick={() => {scrollToSection(aboutRef)}} id='aboutNav' className='inactive'>about</h3></li>
                <li><h3 onClick={() => {scrollToSection(projectsRef)}} id='projectsNav' className='inactive'>projects</h3></li>
                <li><h3 onClick={() => {scrollToSection(skillsRef)}} id='skillsNav' className='inactive'>skills</h3></li> 
                <li><h3 onClick={() => {scrollToSection(contactRef)}} id='contactNav' className='inactive'>contact</h3></li>              
                </ul>
        </div>

    )
}

export default NavbarLinks