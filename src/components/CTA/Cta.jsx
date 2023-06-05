import React from 'react'
import './cta.scss'
import { FaPhoneAlt } from 'react-icons/fa'

export default function Cta() {
  return (
    <div className='cta'>
      <div className="info">
        <h3>Ready for a change? Let's get started on your <br/> painting project!</h3>
      </div>
    <div className="call">
      <FaPhoneAlt/>
    <a href="tel:123-456-7890">123-456-7890</a>
    </div>
    </div>
  )
}
