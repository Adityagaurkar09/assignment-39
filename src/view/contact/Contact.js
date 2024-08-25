import React from 'react'
import "./contact.css"
import Navbar from './../../component/navbar/navbar'
import imgcontact from './Contact us-bro.png'
import footer from './../../component/footer/footer'

function Contact() {
  return (
    <div>
      <Navbar/>
      <h1 className='page-title'>Contact</h1>
      <img src={imgcontact} className='header-img'/>
      <footer/>
      </div>
  )
}

export default Contact