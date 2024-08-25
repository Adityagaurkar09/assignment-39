import React from 'react'
import "./home.css"
import Navbar from './../../component/navbar/navbar'
import imghome from './House searching-rafiki.png'
import footer from './../../component/footer/footer'

function Home() {
  return (
    <div>
      <Navbar/>
     <h1 className='page-title'>Home</h1> 
     <img src={imghome} className='header-img'/>
     <footer/>
      </div>
  )
}

export default Home