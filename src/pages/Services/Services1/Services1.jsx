import React from 'react';
import { Link } from 'react-router-dom';
import './service.scss';
import { RxSlash } from 'react-icons/rx';
import { FaCheckCircle } from 'react-icons/fa';
import { MdDoubleArrow } from 'react-icons/md';
import Offer from '../../../components/Offer/Offer';
import Process from '../../../components/Process/Process';

export default function Services1() {
  return (
    <div className="service1">
      <div className="banner">
        <h1>interior painting</h1>
        <div className="link">
          <Link to="/">home</Link>
          <RxSlash />
          <Link to="/">interior painting</Link>
        </div>
        <img
          src="https://images.pexels.com/photos/1571459/pexels-photo-1571459.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
        />
      </div>
      <div className="container">
        <div className="left">
          <h1>interior painting service sydney</h1>
          <p>
            If you want to change the interior of your office or your home, then
            contact Sydney Metro Painting today. Whether you are tired of
            adjusting around the same old interior patterns or wear and tear, we
            can help you give a refreshing look to your home or office. With
            more than 20 years of experience, we have the skills to conduct
            painting services with quality and efficiency. This enables us to
            offer you the value you have been looking for – a beautiful home and
            outstanding overall experience.
          </p>
          <h2>What Amissa Painting Delivers:</h2>
          <ul>
            <li>
              {' '}
              <FaCheckCircle /> We provide you with a fair and accurate quote
              for your unique needs
            </li>
            <li>
              {' '}
              <FaCheckCircle /> We use premium quality materials and paints
            </li>
            <li>
              {' '}
              <FaCheckCircle /> We minimise disruption in your home
            </li>
            <li>
              {' '}
              <FaCheckCircle /> We ensure safety for you, your home and our
              painters
            </li>
            <li>
              {' '}
              <FaCheckCircle /> We protect your furniture and floors
            </li>
          </ul>
          <h2>check our recent work:</h2>
          <div className="image">
            <img
              src="https://images.pexels.com/photos/271816/pexels-photo-271816.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt=""
            />
          </div>
          <h2>Taking Steps to Minimise Disruption</h2>
          <p>
            We understand that our clients lead busy lives and don’t have time
            to deal with problems and disruptions. That’s why, at the
            preparation stage, our team takes the time to talk with you and
            ensure any valuables, along with your furniture, are taken out of
            harm’s way. Before starting, we carefully cover every surface with
            plastic and canvas drop sheets. If your rooms are used, we’ll move
            all furniture back before the end of each day. Regarding Sydney
            suburbs, our team prefers working on two rooms simultaneously to
            reduce the disruption to your household and keep the job running
            smoothly. Each step of the project, from preparation and the
            delivery of materials to the cleanup process, is signed off and
            approved by the client. We also provide you with 1-litre tins of all
            colours used on the job in minor cases. Touch-ups are required in
            the future.
          </p>
          <h2>Dependability for over 35 years</h2>
          <p>
            Being an independently owned company, we have total control over the
            quality of our services. This is why so much of our success comes
            from repeat business and word of mouth from satisfied clients. If
            you have any questions throughout the process, our team of experts
            is always happy to advise and make sure you’re satisfied with the
            outcome.
          </p>
          <Offer/>
          <Process/>
        </div>
        <div className="right">
          <div className="get-qoute">
            <h3>Get a Free Quote</h3>
            <p>
              Ready to bring your vision to life? Contact us today for a free
              quote and let's get started!
            </p>
            <form action="">
              <input type="text" placeholder="Name" required/>
              <input type="number" placeholder="Phone" required/>
              <input type="number" placeholder="Post Code" required/>
              <select className="select" required>
                <option value="">--Please choose an option--</option>
                <option value="interior-painting">Interior Painting</option>
                <option value="exterior-painting">Exterior Painting</option>
                <option value="commercial-painting">Commercial Painting</option>
                <option value="strata-painting">Strata Painting</option>
                <option value="roof-painting">Roof Painting</option>
              </select>
              <input type="number" placeholder="Start Date" required />
              <button type="submit">Get a Free Qoute</button>
            </form>
          </div>
          <div className="services">
            <h3>Related services</h3>
            <ul>
              <li>
                <Link to='/services1'>Interior painting <MdDoubleArrow/></Link>
              </li>         
              <li>
                <Link to='/services2'>Exterior painting <MdDoubleArrow/></Link>
              </li>         
              <li>
                <Link to='/services1'>Commercial painting <MdDoubleArrow/></Link>
              </li>         
              <li>
                <Link to='/services1'>Strata painting <MdDoubleArrow/></Link>
              </li>         
              <li>
                <Link to='/services1'>Roof painting <MdDoubleArrow/></Link>
              </li>         
                    
              
                   
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
