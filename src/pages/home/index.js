import React from 'react'
import Title from './scripts/Title'
import Overview from './scripts/Overview'
import Services from './scripts/Services'
import Fouth from './scripts/Fouth'
import Fifth from './scripts/Fifth'
import Footer from './scripts/Footer'
import './styles/index.css'
import Nav from './components/Nav'
import Overlay from './scripts/Overlay'

function Home() {
  return (
    <div className='home-page'>
        <Overlay />
        <Nav />
        <Title />
        <Overview />
        <Services />
        <Fouth />
        <Fifth />
        <Footer />
    </div>
  )
}

export default Home