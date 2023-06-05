import React from 'react'
import './home.scss'
import TeamMember from '../../components/Team/Team'
import { Link } from 'react-router-dom'
import Cta from '../../components/CTA/Cta'

export default function Home() {
  return (
    <div className='home'>
      {/* <TeamMember/> */}
      <Cta/>
      <h2>service we offer</h2>
      <div className="container">
        <div className="card">
           <div>icon</div>
           <h3>dafjkdsafhihhkjdsfkdsjfh</h3>
           <Link to='/services1'>read more</Link>
        </div>
        <div className="card">
           <div>icon</div>
           <h3>dafjkdsafhihhkjdsfkdsjfh</h3>
           <Link to='/services1'>read more</Link>
        </div>
        <div className="card">
           <div>icon</div>
           <h3>dafjkdsafhihhkjdsfkdsjfh</h3>
           <Link to='/services1'>read more</Link>
        </div>
        <div className="card">
           <div>icon</div>
           <h3>dafjkdsafhihhkjdsfkdsjfh</h3>
           <Link to='/services1'>read more</Link>
        </div>
        <div className="card">
           <div>icon</div>
           <h3>dafjkdsafhihhkjdsfkdsjfh</h3>
           <Link to='/services1'>read more</Link>
        </div>
        <div className="card">
           <div>icon</div>
           <h3>dafjkdsafhihhkjdsfkdsjfh</h3>
           <Link to='/services1'>read more</Link>
        </div>


        
      </div>
    </div>
  )
}
