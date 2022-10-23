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
  const location = useLocation()
  useEffect(() => {
    if (!aboutInView) {
      console.log('not about')
      document.getElementById('navbar').classList.add('inView')
    }
    else {
      document.getElementById('navbar').classList.remove('inView')
    }

    if (projectsInView && !aboutInView){
      console.log('projects')
      document.getElementById('projectsNav').classList.replace('inactive', 'active')
      document.getElementById('aboutNav').classList.replace('active', 'inactive')
      document.getElementById('contactNav').classList.replace('active', 'inactive')
    }

    else if (aboutInView){
      console.log('about')
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
      <Navbar/>
      <About setAboutInView={setAboutInView}/>
      <ProjectCard setProjectsInView={setProjectsInView}/>
      <Contact setContactInView={setContactInView}/>
    </div>
  );
}

export default App;
