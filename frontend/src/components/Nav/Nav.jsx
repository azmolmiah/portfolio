import React from 'react'

import {images} from '../../constants'
import "./Nav.scss"

const Nav = () => {
  return (
    <nav className='app__navbar'>
      <div className='app__navbar-logo'>
        <img src={images.logo} alt="logo" style={{ 'border-radius': '50%'}}/>
      </div>
      <ul className='app__navbar-links'>
        {['home', 'projects', 'contact'].map((section)=>(
          <li className="app__flex p-text" key={`link-${section}`}>
            <div></div>
            <a href={`#${section}`}>{section}</a>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Nav