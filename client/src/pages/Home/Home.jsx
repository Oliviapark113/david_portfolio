import React from 'react'
import {useEffect, useRef } from 'react'
import {init} from 'ityped'
import './home.css'

export default function Home() {

    const textRef = useRef()

    useEffect(()=>{
    
      init(textRef.current, { showCursor: true, 
        backDelay:1500,
        backSpeed: 60,
        strings: 
        ['OOH','BROADCAST','SPORTS MEDIA' ] })
      
  
    },[])


  return (
    <div className="home" id="home">
      <div className="homeLeft">
      <div className="wrapper">
          <h2 className="greeting">Hello, I am </h2>
          <h1 className="name">David Tolliver</h1>
          <h3 className="introduction">Executive Maganaging Director at CASTLEWOOD ADVISORS<br/>
            <span ref={textRef} className="span"></span>
            </h3>

        <div className="icons">
        <i className="fab fa-linkedin linkedIn"></i>
        <i className="fab fa-instagram-square instagram"></i>
        <i className="fas fa-envelope email"></i>
        </div>
        </div>
   
      </div>
      <div className="homeRight">
      <div className="imgContainer">
          <img src="../../../assets/david.jpg" alt="david_photo" className="davidHeroImg"/>
        </div>
      </div>
    </div>
  )
}
