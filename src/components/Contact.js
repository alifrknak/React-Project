import React from 'react'
import Image from "../assets/about.png";
import "../styles/contact.css"

function Contact() {
  return (
    <div className='contact'>
      <div className='left' style={{backgroundImage:`url(${Image})`}}>
      </div>
    <div className='right'>
      <h1>İletişime geç</h1>
        <form>
          <label>Ad Soyad</label>
          <input type="text" placeholder='gir'></input>
          <label>Email</label>
          <input type="email" placeholder='gir'></input>
          <label>Mesajınız</label>
          <textarea rows="6" placeholder='lütfen mesajınızı giriniz'></textarea>
          <button>Gönder</button>
        </form>
    </div>
    </div>
  )
}

export default Contact