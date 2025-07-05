import React, { useEffect } from 'react'
import Home from './Sections/Home'
import About from './Sections/About'
import Footer from './Sections/Footer'

const App = () => {

  return (
    <div className='bg-primary'>
      <Home />
      <About />
      <Footer />
    </div>
  )
}

export default App
