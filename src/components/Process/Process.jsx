import React from 'react'
import './process.scss'

export default function Process() {
  return (
    <div className='process'>
      <h1>our process of working</h1>
      <div className="process_contents">
        <div className="process_content">
                <span>1</span>
                <h3>preparation</h3>
        </div>
        <div className="process_content">
                <span>2</span>
                <h3>priming</h3>
        </div>
        <div className="process_content">
                <span>3</span>
                <h3>painting</h3>
        </div>
        <div className="process_content">
                <span>4</span>
                <h3>finishing</h3>
        </div>
        <div className="process_content">
                <span>5</span>
                <h3>clean-up</h3>
        </div>
      </div>
    </div>
  )
}
