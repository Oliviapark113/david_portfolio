import React from 'react'
import './topbar.css'
// import {Link} from "react-router-dom"

export default function Topbar({menuOpen, setMenuOpen}) {
  return (
    <div className={"top" + (menuOpen && "active")}>
      <div className="topLeft">
          <img src="../../assets/Logo.png" alt="castlewood logo"className="logo"/>
          CASTLEWOOD ADVISORS
      </div>
      <div className="topCenter">
      <ul className="topList">
            <li className="topListItem">HOME</li>
              <li className="topListItem">ABOUT</li>
              <li className="topListItem">AWARDS</li>
              <li className="topListItem">WHY ME?</li>
              <li className="topListItem">LOG OUT</li>
              <li className="topListItem letstalk">LET'S TALK</li>
          </ul>

      </div>
      <div className="topRight">
      <img src="../../assets/david.jpg" alt="david"className="davidImg"/>
      {/* <i className="fas fa-bars topMenuIcon"></i> */}
      <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
        <span className="line1"></span>
        <span className="line2"></span>
        <span className="line3"></span>
      </div>
      </div>
    </div>
  )
}
