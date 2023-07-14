import React from 'react'

function Menuitem({image,price,content,name}) {
  return (
    <div className='nemuItem'>
        <div style={{backgroundImage:`url(${image})`}}></div>
        <h1>{name}</h1>
        <h6>{content}</h6>
        <i>{price}</i>
    </div>
  )
}

export default Menuitem