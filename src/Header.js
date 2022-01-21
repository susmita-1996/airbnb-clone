import React from 'react'
import './Header.css'
// import AiOutlineSearch from AiOutlineSearch
// import { AiOutlineSearch } from 'react-icons/Ai';

function Header() {
  return (
    <div className='header'>
      <img 
          className="header_icon"
          src= "https://i.pinimg.com/originals/3c/bf/be/3cbfbe148597341fa56f2f87ade90956.png"
          alt=""
          />

          <div className='header_center'>
              <input type="text"/>
              {/* <AiOutlineSearch/> */}
          </div>
    </div>
  )
}

export default Header
