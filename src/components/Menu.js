  import React from 'react'
import "../styles/Menu.css"
//import Yem from  "../assets/yem.jpg";
import {Data} from "../helpers/Data";
import Item from "../components/Menuitem"

function Menu() {
    return (
      <div className='Menu'>
        <h1 className='menuhead'>Güçlendiriciler</h1>
         <div className='list'>
        {Data.map((item,index)=>{
          return <Item image={item.image} name={item.name} price={item.price} content={item.content}  key={index}></Item>
        })}
        </div>
      </div>
    )
  }
  
  export default Menu