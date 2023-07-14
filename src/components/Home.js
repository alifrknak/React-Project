import React from 'react';
import Banner from "../assets/anasayfa.jpg";
import { Link } from "react-router-dom";
import "../styles/Home.css";

function Home() {
  return (
    <div className='MainPage' style={{backgroundImage:`url(${Banner})`}}>
      <div className='order'>
        <Link to="/menu">
          <button>SATIN AL</button>
        </Link>
      </div>
    </div>
  )
}

export default Home