import React from 'react'
import "./about.css"
import Navbar from './../../component/navbar/navbar'
import imgabout from './About me-bro.png'
import footer from './../../component/footer/footer'

function About() {
  return (
    <div>
      <Navbar/>
      <h1 className='page-title'>About</h1>
      
      <img src={imgabout} className='header-img'/>

      < footer/>
      </div>
  )
}

export default About