import React from 'react'
import './navbar.scss'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <div className='navbar'>
    <nav>
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/about'>About</Link>
        </li>
        <li className='menu'>
          service
          <ul className='submenu'>
            <li>
              <Link to='services1'>Services1</Link>
            </li>
            <li>
              <Link to='services2'>Services2</Link>
            </li>
            
          </ul>
        </li>
        <li>
          <Link to='/contact'>Contact</Link>
        </li>
      </ul>
    </nav>
    </div>
  )
}
