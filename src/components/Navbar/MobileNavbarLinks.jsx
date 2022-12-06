import {useState} from 'react'
import {RxHamburgerMenu} from 'react-icons/rx'


const MobileNavbarLinks = ({projectsRef, aboutRef, skillsRef, contactRef}) => {

    const [open, setOpen] = useState(false)

    const scrollToSection = (ref) => {
        window.scrollTo({
            top: ref.current.offsetTop,
            behavior: 'smooth'
        })
        }

    return (
        <div className='mobileNavbarLinks'>
                <div>
                {!open && <RxHamburgerMenu onClick={() => setOpen(true)} className='hamburgerIcon' size="40px" color="black"/>}
                </div>
                {open && 
                <ul className='mobileListContainer'>
                    {open && <li><h1 className="closeIcon" onClick={() => {setOpen(false)}}>x</h1></li>}
                    <li><h3 onClick={() => {
                        scrollToSection(aboutRef);
                        setOpen(false);
                        }} id='aboutNav' className='inactive'>about</h3></li>
                    <li><h3 onClick={() => {
                        scrollToSection(projectsRef);
                        setOpen(false);
                        }} id='projectsNav' className='inactive'>projects</h3></li>
                    <li><h3 onClick={() => {
                        scrollToSection(skillsRef);
                        setOpen(false);
                        }} id='skillsNav' className='inactive'>skills</h3></li> 
                    <li><h3 onClick={() => {
                        scrollToSection(contactRef);
                        setOpen(false);
                        }} id='contactNav' className='inactive'>contact</h3></li>              
                </ul>}
        </div>
    )
}

export default MobileNavbarLinks