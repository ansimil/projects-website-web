import './App.css';
import Navbar from './components/Navbar/Navbar';
import ProjectCard from './components/ProjectCard/ProjectCard';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'



function App() {
  const [aboutInView, setAboutInView] = useState(false)
  const [projectsInView, setProjectsInView] = useState(false)
  const [contactInView, setContactInView] = useState(false)
  const [projectsRef, setProjectsRef] = useState(null)
  const location = useLocation()
  useEffect(() => {
    if (!aboutInView) {
      document.getElementById('navbar').classList.add('inView')
      document.getElementById('about').classList.remove('aboutInView')
    }
    else {
      document.getElementById('navbar').classList.remove('inView')
      document.getElementById('about').classList.add('aboutInView')

    }

    if (projectsInView) {
      document.getElementById('projects').classList.add('projectsInView')
    }
    else {
      document.getElementById('projects').classList.remove('projectsInView')
    }
 
    if (projectsInView && !aboutInView){
      document.getElementById('projectsNav').classList.replace('inactive', 'active')
      document.getElementById('aboutNav').classList.replace('active', 'inactive')
      document.getElementById('contactNav').classList.replace('active', 'inactive')
    }

    else if (aboutInView){
      document.getElementById('projectsNav').classList.replace('active', 'inactive')
      document.getElementById('aboutNav').classList.replace('inactive', 'active')
      document.getElementById('contactNav').classList.replace('active', 'inactive')
    }
    else if (contactInView){
      document.getElementById('projectsNav').classList.replace('active', 'inactive')
      document.getElementById('aboutNav').classList.replace('active', 'inactive')
      document.getElementById('contactNav').classList.replace('inactive', 'active')
    }
    else {
      document.querySelector('.navbarContainer').classList.remove('inView')
      document.getElementById('projectsNav').classList.replace('active', 'inactive')
      document.getElementById('aboutNav').classList.replace('active', 'inactive')
      document.getElementById('contactNav').classList.replace('active', 'inactive')
    }
  }, [location, aboutInView, projectsInView, contactInView] )

  return (
    <div className='App'>
      <Navbar projectsRef={projectsRef}/>
      <About setAboutInView={setAboutInView} projectsRef={projectsRef}/>
      <ProjectCard setProjectsInView={setProjectsInView} setProjectsRef={setProjectsRef}/>
      <Contact setContactInView={setContactInView}/>
    </div>
  );
}

export default App;
