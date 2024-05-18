import React from 'react'

import Header from './Components/header';
import Hero from './Components/hero';
import Container1 from './Components/container1';
import './App.css'

function App() {
  return (
    <>
      <div className='bg-cover bg-center bg-no-repeat	' style={{ backgroundImage: `url(https://assets.nflxext.com/ffe/siteui/vlv3/c1366fb4-3292-4428-9639-b73f25539794/291d18e4-fcd3-45ec-9843-6c39247bc0ae/PK-en-20240408-popsignuptwoweeks-perspective_alpha_website_large.jpg)` }}>
        <div className=' bg-[rgba(0,0,0,0.65)] over w-[100%] h-[100vh]'>
          <Header />
          <Hero />
          <Container1 />
        </div>
      </div>
    </>
  )
}

export default App
