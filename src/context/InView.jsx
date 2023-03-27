import { createContext, useState } from 'react'

export const InViewContext = createContext()

const InView = (props) => {
    const [inViewCount, setInViewCount] = useState({
        about: 0,
        projects: 0,
        skills: 0
    })

  return (
    <InViewContext.Provider value={{inViewCount, setInViewCount}}>
        {props.children}
    </InViewContext.Provider>
  )
}

export default InView