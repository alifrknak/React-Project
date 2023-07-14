import React from 'react'
import Logo from "../assets/logo.jpg";
import {Link} from "react-router-dom";
import "../styles/Navbar.css";

function Navbar() {
  return (
    <div className='navbar'>

    <div className='main'>
       <img src={Logo}></img>

    <div className='mainlink'>
      <Link to="/">Anasayfa</Link>
      <Link to="/Menu">Menu</Link>
      <Link to="/About">About</Link>
      <Link to="/Contact">Contact</Link>
    </div>
    </div>

    </div>
  )
}

export default Navbar