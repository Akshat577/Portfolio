import React, { useEffect } from 'react'
import Home from './Sections/Home'
import About from './Sections/About'
import Footer from './Sections/Footer'
import Contact from './Sections/Contact'

const App = () => {

  return (
    <div className='bg-primary'>
      <Home />
      <About />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
