import React, { useEffect, useState } from 'react';

export default function Content({number,duration,info}) {

  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = parseInt(number.substring(0, 3));

    let totalDuration = parseInt(duration);
    let incrementTime = totalDuration / end;

    let timer = setInterval(() => {
      start += 1;
      let final = String(start) + number.substring(3);
      //console.log(final)
      setCount(final);
      if (start === end) clearInterval(timer);
    }, incrementTime);
  }, [number, duration]);

  return (
    <div className="content" 
  
    >
      <div className="number">
        <span>{count}</span>
      </div>
      <h5>{info}</h5>
    </div>
  )
}
