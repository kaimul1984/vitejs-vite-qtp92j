import React, { useRef, useState } from 'react';
import './team.scss';

import {
  FaChevronLeft,
  FaChevronRight,
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaPinterest,
  FaQuoteLeft,
  FaQuoteRight,
} from 'react-icons/fa';

// import facebook from "../../assests/images/facebook.png";
// import twitter from "../../assests/images/twitter.png";
// import linkedin from "../../assests/images/linkedin.png";
// import pinterest from "../../assests/images/pinterest.png";

const TeamMember = () => {
  const [selected, setSelected] = useState(0);
  const listRef = useRef();

  const handleLeft = () => {
    setSelected(selected === 0 ? 0 : selected - 1);
  };
  const handleRight = () => {
    setSelected(
      selected === items.length - 3 ? items.length - 3 : selected + 1
    );
  };

  const items = [
    {
      image:
        'https://images.pexels.com/photos/7316743/pexels-photo-7316743.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
      name: 'Amily horper',
      role: 'design expert',
    },
    {
      image:
        'https://images.pexels.com/photos/2061082/pexels-photo-2061082.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
      name: 'zenith cooper',
      role: 'design expert',
    },
    {
      image:
        'https://images.pexels.com/photos/5668470/pexels-photo-5668470.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
      name: 'zema zane',
      role: 'design expert',
    },
    {
      image:
        'https://images.pexels.com/photos/9851730/pexels-photo-9851730.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
      name: 'melisa roza',
      role: 'design expert',
    },
    {
      image:
        'https://images.pexels.com/photos/8872162/pexels-photo-8872162.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
      name: 'cathy hops',
      role: 'design expert',
    },
    {
      image:
        'https://images.pexels.com/photos/8101976/pexels-photo-8101976.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
      name: 'cathy hops',
      role: 'design expert',
    },
    {
      image:
        'https://images.pexels.com/photos/3727508/pexels-photo-3727508.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
      name: 'cathy hops',
      role: 'design expert',
    },
  ];
  const btns = [
    {
      image: <FaChevronLeft />,
      direction: 'left',
    },
    {
      image: <FaChevronRight />,
      direction: 'right',
    },
  ];

  // onClick={() => handleLeft("left")}
  //onClick={() => handleRight("right")}
  return (
    <div className="team-member">
      <div className="container">
        <h6>meat our team</h6>
        <div className="heading">
          <h2>
            our <span className="span">creative</span> team
          </h2>

          <div className="button">
            {btns.map((btn, index) => (
              <>
                <div
                  key={btn.image}
                  direction={btn.direction}
                  className={selected === index ? ' btn1 active' : 'btn1'}
                  onClick={() => {
                    btn.direction === 'left' ? handleLeft() : handleRight();
                  }}
                >
                  {btn.image}
                </div>
              </>
            ))}
          </div>
        </div>

        <div
          className="slider"
          ref={listRef}
          style={{
            transform: `translateX(${
              selected === items.length - 1
                ? (items.length - 1 - selected) * 470
                : -selected * 470
            }px)`,
          }}
        >
          {items.map((item, index) => (
            <div className="slide" key={item.name}>
              <div className="img">
                <img src={item.image} alt="" />
              </div>
              {/* <div className="text">
                <h3>{item.name}</h3>
                <p>{item.role}</p>
              </div> */}
              <div className="text2">
                <h3>{item.name}</h3>
                <p>{item.role}</p>
                {/* <div className="icon">
                  <FaFacebook />
                  <FaTwitter />
                  <FaPinterest />
                  <FaLinkedin />

                </div> */}
              </div>
              <div className="info">
                <FaQuoteLeft/>
                <p>
                  On recommend tolerably my belonging or am. Mutual has cannot
                  beauty indeed now sussex merely you. It possible no husbands
                  jennings ye offended packages pleasant he
                </p>
                <FaQuoteRight/>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeamMember;

// className={selected === index ? 'text2 active' : 'text2'}
