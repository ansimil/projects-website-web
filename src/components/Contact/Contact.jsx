import React from 'react'
import "./Contact.css"
import { useInView } from 'react-intersection-observer'
import { useEffect, useRef, useCallback } from 'react'


const Contact = ({setContactRef, setContactInView, aboutRef}) => {
    const width = "40px"
    const ref = useRef();
    const { ref: inViewRef, inView } = useInView({
        threshold: 0.4
      })
    const setRefs = useCallback(
    (node) => {
        ref.current = node;
        inViewRef(node);
        setContactRef(ref)
    },
    [inViewRef, setContactRef],
    );

    const scrollToSection = (ref) => {
        window.scrollTo({
          top: ref.current.offsetTop,
          behavior: 'smooth'
        })
      }

    useEffect (()=> {
        if (inView){
            setContactInView(true)
        }
        else {
            setContactInView(false)
        }
        // eslint-disable-next-line
     }, [inView, setContactInView])

  return (
    <div ref={setRefs} id='contact' className="contactContainer">
    <ul className="contactList">
        <li>
            <a href="mailto:andrewsimonmiller@gmail.com">
            <img src="./email-icon2.png" alt="hello" width="40px" />
            </a>    
        </li>
        <li>
            <a href="https://github.com/ansimil" target="_blank" rel="noopener noreferrer">
                <img src="./github-icon.png" alt="hello" width={width} />
            </a>
            
        </li>
        <li>
            <a href="https://www.linkedin.com/in/andrew-miller-6421b4147/" target="_blank" rel="noopener noreferrer">
                <img src="./linkedin-icon.png" alt="hello" width="50px" />
            </a>
            
        </li>
        <li className="toTopContacts">
            <img className='aboutDownArrow' onClick={()=>{scrollToSection(aboutRef)}} src="./uparrow-icon.png" alt="hello" width='40px' />
        </li>
    </ul>
    </div>
  )
}

export default Contact