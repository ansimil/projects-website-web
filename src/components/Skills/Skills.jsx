import './Skills.css'
import React from 'react'
import { useInView } from 'react-intersection-observer'
import { useEffect, useRef, useCallback } from 'react'

const Skills = ({setSkillsInView, setSkillsRef, aboutRef}) => {
  const height = "40px"
  const ref = useRef();
  const { ref: inViewRef, inView } = useInView({
    threshold: 0.9
  })

const setRefs = useCallback(
  (node) => {
      ref.current = node;
      inViewRef(node);
      setSkillsRef(ref)
  },
  [inViewRef, setSkillsRef],
  );

const scrollToSection = (ref) => {
  window.scrollTo({
    top: ref.current.offsetTop,
    behavior: 'smooth'
  })
}

 useEffect (()=> {
    if (inView){
      setSkillsInView(true)
    }
    else {
      setSkillsInView(false) 
    }
    // eslint-disable-next-line
 }, [inView, setSkillsInView])

  return (
    <section ref={ref} id='skills' className='skillsContainer'>
        <div className='leftSkillsDiv'>
          <div className='languagesDiv'>
            <h2>Front-end</h2>
            <div className='languagesInnerDiv'>
              <div>
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JavaScript" height={height}/>
                <h5>JavaScript</h5>
              </div>
              <div>
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt="CSS" height={height}/> 
                <h5>CSS 3</h5>
              </div>
              <div> 
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="HTML" height={height}/> 
                <h5>HTML 5</h5>
              </div> 
              <div>
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="REACT" height={height}/>
              <h5>ReactJS</h5> 
              </div>
              <div>
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg" alt="SASS" height={height}/>
                <h5>Sass</h5>
              </div> 
              <div>
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/handlebars/handlebars-original.svg" alt="HANDLEBARS" height={height}/>
              <h5>Handlesbars</h5> 
              </div>     
            </div>
          </div>
          <div className="librariesDiv">
            <h2>Back-end</h2>
            <div className='librariesInnerDiv'>
              <div className="librariesIcon">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" alt="EXPRESS" height={height}/>
              <h5>Express</h5>
              </div>
              
              <div className="librariesIcon">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" alt="MONGODB" height={height}/> 
              <h5>MongoDB</h5>
              </div>
              <div className="librariesIcon">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" alt="NODEJS" height={height}/> 
              <h5>NodeJS</h5>
              </div>
              <div className="librariesIcon">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/adonisjs/adonisjs-original.svg" alt="ADONIS" height={height}/>
                <h5>AdonisJS</h5>
              </div>
              <div className="librariesIcon">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nestjs/nestjs-plain.svg" alt="NESTJS" height={height} />
                <h5>NestJS</h5>
              </div>
              <div className="librariesIcon">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" alt="POSTGRESQL" height={height}/>
                <h5>Postgresql</h5>
              </div>
            </div> 
          </div>
        </div>
        <div ref={setRefs} className='rightSkillsDiv'>
          <div className="skillsDiv">
            <img className='skillsIcon' src="./skills-icon.png" alt="hello" />
            <h1>skills</h1>
          </div>
          <div className="scrollToTopDiv">
            <img className='aboutDownArrow' onClick={()=>{scrollToSection(aboutRef)}} src="./uparrow-icon.png" alt="hello" width='50px' />
            <p>back to top</p>
          </div>
        </div>
    </section>
  )
}

export default Skills