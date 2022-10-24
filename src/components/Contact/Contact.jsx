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
    <section ref={ref} id='contact' className='contactContainer'>Contact</section>
  )
}

export default Contact