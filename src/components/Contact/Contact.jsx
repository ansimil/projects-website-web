import './Contact.css'
import React from 'react'
import { useInView } from 'react-intersection-observer'
import { useEffect, useRef, useCallback } from 'react'

const Contact = ({setContactInView, setContactRef, aboutRef}) => {
  const height = "40px"
  const ref = useRef();
  const { ref: inViewRef, inView } = useInView({
    threshold: 0.1
  })

const setRefs = useCallback(
  (node) => {
      // Ref's from useRef needs to have the node assigned to `current`
      ref.current = node;
      // Callback refs, like the one from `useInView`, is a function that takes the node as an argument
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
    <section ref={ref} id='contact' className='contactContainer'>
        <div className='leftSkillsDiv'>
          <div className='languagesDiv'>
            <h2>Languages</h2>
            <div className='languagesInnerDiv'>
              <div>
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="hello" height={height}/>
                <h5>JavaScript</h5>
              </div>
              <div>
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt="hello" height={height}/> 
                <h5>CSS 3</h5>
              </div>
              <div> 
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="hello" height={height}/> 
                <h5>HTML 5</h5>
              </div>       
            </div>
          </div>
          <div className="librariesDiv">
            <h2>Libraries, Frameworks etc.</h2>
            <div className='librariesInnerDiv'>
              <div>
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" alt="hello" height={height}/>
              <h5>Express</h5>
              </div>
              <div>
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/handlebars/handlebars-original.svg" alt="hello" height={height}/>
              <h5>Handlesbars</h5> 
              </div>
              <div>
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" alt="hello" height={height}/> 
              <h5>MongoDB/Mongoose</h5>
              </div>
              <div>
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" alt="hello" height={height}/> 
              <h5>NodeJS</h5>
              </div>
              <div>
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="hello" height={height}/>
              <h5>ReactJS</h5> 
              </div>
            </div> 
          </div>
        </div>
        <div ref={setRefs} className='rightSkillsDiv'>
          <img className='aboutDownArrow' onClick={()=>{scrollToSection(aboutRef)}} src="./downarrow-icon2.png" alt="hello" width='50px' />
          <img className='skillsIcon' src="./skills-icon.png" alt="hello" />
          <h1>skills</h1>
        </div>
    </section>
  )
}

export default Contact