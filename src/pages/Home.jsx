import React from 'react'
import Footer from '../components/Footer'
import Intro from '../components/Intro'
import Navbar from '../components/Navbar'
import Slider from '../components/Slider'
import Wordle from '../components/Wordle'

export const Home = () => {
  return (
    <div>
        <Navbar/>
        <Intro/>
        <Slider/>
        <Wordle />
        <Footer/>
    </div>
  )
}

export default Home