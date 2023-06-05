import React from 'react';
import './about.scss';
import items from './data';

import { FaAngellist, FaRegLightbulb } from "react-icons/fa";
import { BiBriefcaseAlt, BiCamera } from "react-icons/bi";
import Counter from '../../components/Counter/Counter';


const data = [
  {
    id: "1",
    icon: <FaAngellist />,
    title: "skilled painters",
    info:
      "As a company, we are committed to doing what is right in the eyes of our customers at all times."
  }, 
  {
    id: "2",
    icon: <BiBriefcaseAlt />,
    title: "attention to details",
    info:
      "We provide the best workmanship and customer service to our clients."
  },

  {
    id: "3",
    icon: <BiCamera />,
    title: "eco-friendly",
    info:
      "We deliver the best results using the latest industry methods and technologies."
  },
  {
    id: "4",
    icon: <FaRegLightbulb />,
    title: "Customized Solutions",
    info:
      "We collaborate with clients to realize their vision and build strong industry partnerships."
  }
];

export default function About() {
  return (
    <>
      <div className="about-us">
        <div className="container">
          <div className="left">
                <img src="https://www.localsearch.com.au/resources/images/painters/young-worker-painting-wall-room.jpg" alt="painter"/>
          </div>
          <div className="right">
            <h3>about us</h3>
            <p>
              We believe that customer satisfaction is the foundation of our
              business. We strive to provide the highest quality painting
              services possible, and we stand behind every job we complete with
              our satisfaction guarantee. We understand that entrusting your
              space to someone else can be a big decision. That’s why we want to
              ensure that you are completely satisfied with the end result of
              our work. Our goal is to ensure that you are happy with the end
              result of your painting project, and we will not rest until you
              are completely satisfied. Contact us today to schedule your
              painting project and experience the difference with us and our
              satisfaction guarantee.
            </p>
            <div className="wrapper">
              {data.map((i)=> (

             <div className="card" key={i.id}>
              
               <div className="icon">
                {i.icon}
               </div>
              <div className="text">
              <h4>{i.title}</h4>
               <p>{i.info}.</p>
              </div>
             </div>
             
              ))}
           
            </div>
          </div>
        </div>
      </div>
      <Counter/>
      <div className="about">
        <div className="container">
          <div className="left">
            <div>
              <h3>our values</h3>
              <h1>
                Efficient and reliable <br /> painting services
              </h1>
              <p>
                We're committed to giving you a service you can count on,
                whether you just want to update one room or do a big renovation.
                We believe that dependability is the key to any project's
                success, and we want to earn your trust and business by giving
                you reliable and excellent service..
              </p>
              <button>Call Now</button>
            </div>
          </div>
          <div className="right">
            <div className="card-wrapper">
              {items.map((item) => {
                return (
                  <div className="card">
                    <div className="card-inner">
                      <li>{item.icon}</li>
                      <h2>{item.title}</h2>
                      <p>{item.info}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
