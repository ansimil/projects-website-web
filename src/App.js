import './App.css';
import Navbar from './components/Navbar/Navbar';
import ProjectCard from './components/ProjectCard/ProjectCard';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
function App() {
  const location = useLocation()
  // const [projects, setProjects] = useState(false)
  // const [about, setAbout] = useState(false)
  // const [contact, setContact] = useState(false)


  useEffect(() => {
    console.log(location)
    if (location.hash === '#projects'){
      console.log('firing')
      document.getElementById('projects').classList.remove('inactive')
      document.getElementById('projects').classList.add('active')
    }
  }, [location] )

  return (
    <div className='App'>
      <Navbar/>
      <ProjectCard/>
      <About/>
      <Contact/>
    </div>
  );
}

export default App;
