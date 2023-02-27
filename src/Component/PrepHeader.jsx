import React from 'react'
import '../Style/header.css';
import NavbarLink from './Nav-Link';

const Navbar = () => {
  return (
    <>
     <div className="header-main">
        <div className="logo">
          <img
            src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/navbar/logoPrepBytes.svg"
            alt="" 
            width={"200px"}
          />
        </div>
        <div>
          <div>
            <div className="mobile-log">
            <span id="V">V</span>
            <select name="" id="">
              Log out
            </select>
            </div>
           
            <div id="sbox">
              <div className="btn">
                <button id="btn1">Login</button> &nbsp;&nbsp;&nbsp;
                <button id="btn2">Sign Up</button>
                <br />
              </div>
              <nav className="navbar">
              <NavbarLink/>
              </nav>
            </div>
          </div>
        </div>
      </div>
       <div className="header">
        <div className="blog">
          <h2 className="heading1">
            Take Your <span className="heading3">Coding Journey</span> <br />
            To New Heights With
          </h2>
          <h1 className="heading2">
            PrepBytes Personalized <br />
            Learning Curriculum
          </h1>
          <button className="button1">Learn more</button>
        </div>
        <div className="banner">
          <img
            src="../images/Banner.jpg"
            alt=""
            width={"937px"}
            height={"415px"}
          />
        </div>
      </div>
   
    
    </>
  )
}

export default Navbar
