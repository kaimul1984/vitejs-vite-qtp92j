import React from 'react';
import './offer.scss'
import img1 from '../../assets/paint-bucket.png'
import img2 from '../../assets/roller.png'
import img3 from '../../assets/paint-roller.png'
import img4 from '../../assets/artist.png'
import img5 from '../../assets/varnish.png'
import img6 from '../../assets/paint-bucket.png'

export default function Offer() {
  return (
    <div className="offer">
      <h1>what we provide as interior paintings</h1>
      <div className="contents">
        <div className="content">
          <div className="icon"><img src={img1} alt=""/></div>
          <h3>full room painting</h3>
          <p>Being An Independently Owned Company, We Have Total Control Over The Quality Of Our Services.</p>
        </div>
        <div className="content">
          <div className="icon"><img src={img2} alt=""/></div>
          <h3>touch-up work</h3>
          <p>Being An Independently Owned Company, We Have Total Control Over The Quality Of Our Services.</p>
        </div>
        <div className="content">
          <div className="icon"><img src={img3} alt=""/></div>
          <h3>custom finishes</h3>
          <p>Being An Independently Owned Company, We Have Total Control Over The Quality Of Our Services.</p>
        </div>
        <div className="content">
          <div className="icon"><img src={img4} alt=""/></div>
          <h3>accent walls</h3>
          <p>Being An Independently Owned Company, We Have Total Control Over The Quality Of Our Services.</p>
        </div>
        <div className="content">
          <div className="icon"><img src={img5} alt=""/></div>
          <h3>wallpaper</h3>
          <p>Being An Independently Owned Company, We Have Total Control Over The Quality Of Our Services.</p>
        </div>
        <div className="content">
          <div className="icon"><img src={img6} alt=""/></div>
          <h3>color consultations</h3>
          <p>Being An Independently Owned Company, We Have Total Control Over The Quality Of Our Services.</p>
        </div>
      </div>
    </div>
  );
}
