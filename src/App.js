import './App.css';
import Navbar from './components/Navbar/Navbar';
import ProjectCard from './components/ProjectCard/ProjectCard';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Contact from './components/Contact/Contact';
import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'



function App() {
  const [aboutInView, setAboutInView] = useState(false)
  const [projectsInView, setProjectsInView] = useState(false)
  const [skillsInView, setSkillsInView] = useState(false)
  const [contactInView, setContactInView] = useState(false)
  const [projectsRef, setProjectsRef] = useState(null)
  const [aboutRef, setAboutRef] = useState(null)
  const [skillsRef, setSkillsRef] = useState(null)
  const [contactRef, setContactRef] = useState(null)
  const location = useLocation()

  useEffect(() => {
    console.log('render')
    if (!aboutInView) {
      document.getElementById('navbar').classList.add('inView')
    }
    else {
      document.getElementById('navbar').classList.remove('inView')
      document.getElementById('about').classList.add('aboutInView')
    }

    if (projectsInView) {
      document.getElementById('projects').classList.add('projectsInView')
    }
    

    if (skillsInView || contactInView) {
      document.getElementById('skills').classList.add('skillsInView')
    }
    
 
    if (projectsInView && !aboutInView){
      document.getElementById('contactNav').classList.replace('active', 'inactive')
      document.getElementById('projectsNav').classList.replace('inactive', 'active')
      document.getElementById('aboutNav').classList.replace('active', 'inactive')
      document.getElementById('skillsNav').classList.replace('active', 'inactive')
    }

    else if (aboutInView){
      document.getElementById('contactNav').classList.replace('active', 'inactive')
      document.getElementById('projectsNav').classList.replace('active', 'inactive')
      document.getElementById('aboutNav').classList.replace('inactive', 'active')
      document.getElementById('skillsNav').classList.replace('active', 'inactive')
    }
    else if (skillsInView && !contactInView){
      document.getElementById('contactNav').classList.replace('active', 'inactive')
      document.getElementById('projectsNav').classList.replace('active', 'inactive')
      document.getElementById('aboutNav').classList.replace('active', 'inactive')
      document.getElementById('skillsNav').classList.replace('inactive', 'active')
    }      
    
    else if (contactInView && !aboutInView && !projectsInView){
      document.getElementById('contactNav').classList.replace('inactive', 'active')
      document.getElementById('projectsNav').classList.replace('active', 'inactive')
      document.getElementById('aboutNav').classList.replace('active', 'inactive')
      document.getElementById('skillsNav').classList.replace('active', 'inactive')
    }    

    else {
      document.querySelector('.navbarContainer').classList.remove('inView')
      document.getElementById('contactNav').classList.replace('active', 'inactive')
      document.getElementById('projectsNav').classList.replace('active', 'inactive')
      document.getElementById('aboutNav').classList.replace('active', 'inactive')
      document.getElementById('skillsNav').classList.replace('active', 'inactive')
    }
  }, [location, aboutInView, projectsInView, skillsInView, contactInView] )

  return (
    <div className='App'>
      <Navbar projectsRef={projectsRef} aboutRef={aboutRef} skillsRef={skillsRef} contactRef={contactRef}/>
      <About setAboutInView={setAboutInView} setAboutRef={setAboutRef} projectsRef={projectsRef}/>
      <ProjectCard setProjectsInView={setProjectsInView} setProjectsRef={setProjectsRef}/>
      <Skills setSkillsInView={setSkillsInView} setSkillsRef={setSkillsRef} aboutRef={aboutRef}/>
      <Contact setContactRef={setContactRef} setContactInView={setContactInView} aboutRef={aboutRef} />
    </div>
  );
}

export default App;
