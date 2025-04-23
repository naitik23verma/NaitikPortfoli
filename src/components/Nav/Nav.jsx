import React,{useRef} from 'react'
import "./Nav.css"
import { useState } from 'react'
import {FaBars} from "react-icons/fa"
import {HiX} from "react-icons/hi"
import {Link} from "react-scroll"
function Nav() {
  let menu=useRef()
  let mobile=useRef()
  const [toggleIcon,setToggleIcon]=useState(false);
  const handleToggleIcon=()=>{
    setToggleIcon(!toggleIcon);
  };
  return (
    <nav>
        <h1>PORTFOLIO</h1>
        <ul className='desktopmenu'>
            <Link to="home" duration={500} spy={true} activeClass='active' smooth={true}><li>Home</li></Link>
            <Link to="about" duration={500} spy={true} activeClass='active'  smooth={true}><li>About</li></Link>
            <Link to="projects"  duration={500} spy={true} activeClass='active' smooth={true}><li>Projects</li></Link>
            <Link to="contact" duration={500} spy={true} activeClass='active'  smooth={true}><li>Contact</li></Link>
        </ul>
        <div className="hamburger" ref={menu} onClick={()=>{
          mobile.current.classList.toggle("activemobile");
          handleToggleIcon();
        }} >
          {
            toggleIcon ? <HiX size={30}/>:<FaBars size={30}/>
          }
        </div>
        <ul className='mobilemenu' ref={mobile}>
            <Link to="home" duration={500} spy={true} activeClass='active' smooth={true}><li>Home</li></Link>
            <Link to="about" duration={500} spy={true} activeClass='active'  smooth={true}><li>About</li></Link>
            <Link to="projects"  duration={500} spy={true} activeClass='active' smooth={true}><li>Projects</li></Link>
            <Link to="contact" duration={500} spy={true} activeClass='active'  smooth={true}><li>Contact</li></Link>
        </ul>
    </nav>
    
  )
}

export default Nav


