import './Contact.css'
import React from 'react'
import { useInView } from 'react-intersection-observer'
import { useEffect } from 'react'

const Contact = ({setContactInView}) => {
  const { ref, inView } = useInView({
    threshold: 0.1
  })
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
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="hello" height='75px'/>
                <h5>JavaScript</h5>
              </div>
              <div>
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt="hello" height='75px'/> 
                <h5>CSS 3</h5>
              </div>
              <div> 
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="hello" height='75px'/> 
                <h5>HTML 5</h5>
              </div>       
            </div>
          </div>
          <div className="librariesDiv">
            <h2>Libraries, Frameworks etc.</h2>
            <div className='librariesInnerDiv'>
              <div>
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" alt="hello" height='75px'/>
              <h5>Express</h5>
              </div>
              <div>
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/handlebars/handlebars-original.svg" alt="hello" height='75px'/>
              <h5>Handlesbars</h5> 
              </div>
              <div>
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" alt="hello" height='75px'/> 
              <h5>MongoDB/Mongoose</h5>
              </div>
              <div>
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" alt="hello" height='75px'/> 
              <h5>NodeJS</h5>
              </div>
              <div>
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="hello" height='75px'/>
              <h5>ReactJS</h5> 
              </div>
            </div> 
          </div>
        </div>
        <div className='rightSkillsDiv'>
          <img className='skillsIcon' src="./skills-icon.png" alt="hello" />
          <h1>skills</h1>
        </div>
    </section>
  )
}

export default Contact