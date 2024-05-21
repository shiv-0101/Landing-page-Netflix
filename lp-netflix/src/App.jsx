import React from 'react'

import Header from './Components/header';
import Hero from './Components/hero';
import Container1 from './Components/container1';
import Container2 from './Components/container2';
import Container3 from './Components/container3';
import Container4 from './Components/container4';
import Faq from './Components/faq';
import Footer from './Components/footer';
import './App.css'

function App() {
  return (
    <>
      <div className='bg-cover bg-center bg-no-repeat	' style={{ backgroundImage: `url(https://assets.nflxext.com/ffe/siteui/vlv3/c1366fb4-3292-4428-9639-b73f25539794/291d18e4-fcd3-45ec-9843-6c39247bc0ae/PK-en-20240408-popsignuptwoweeks-perspective_alpha_website_large.jpg)` }}>
        <div className=' bg-[rgba(0,0,0,0.65)] over w-[100%] h-[100vh]'>
          <Header />
          <Hero />
          <Container1 />
          <Container2 />
          <Container3 />
          <Container4 />
          <Faq />
          <Footer />
        </div>
      </div>
    </>
  )
}

export default App
