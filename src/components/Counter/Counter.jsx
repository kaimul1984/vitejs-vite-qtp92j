import React from 'react'


import Content from '../Counter/Content';
import items from '../Counter/data';
import './counter.scss';

export default function Counter() {
 

  return (
    <div className="counter">
      <div className="container">
        {items.map((item) => (
          <Content
            key={item.id}
            number={item.number}
            info={item.info}
            duration={item.duration}
          />
        ))}
      </div>
    </div>
  );
}
