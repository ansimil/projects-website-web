import React from 'react'
import ProjectsList from '../components/ProjectsList/ProjectsList'
import About from '../components/About/About';
import Contact from '../components/Contact/Contact';
import './Home.css'

const Home = () => {
  return (
    <div className='homeContainer'>
        <ProjectsList/>
        <About/>
        <Contact/>
    </div>
  )
}

export default Home