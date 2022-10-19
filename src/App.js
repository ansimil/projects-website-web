import './App.css';
import Navbar from './components/Navbar/Navbar';
import ProjectCard from './components/ProjectCard/ProjectCard';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
function App() {
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
