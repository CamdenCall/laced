import React, { useState, useEffect } from 'react';
import getTimeZone from '../lib/timezone';
import '../styles/time.scss'
import '../styles/responsive.scss'



const TimeWidget = ({ TimeZone, widgets, setWidgets }) => {
  
  const [time, setTime] = useState(null);
  useEffect(() => {
    const intervalId = setInterval(() => {
      var time = getTimeZone(TimeZone).currentTime
      setTime(time);
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);
  


  return (
    <div className='time-widget mode'>
        <div className='timezone'>
        <div className='time-info'>
            <p>LOCAL TIME</p>
            <svg width="1" height="21" viewBox="0 0 1 21" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="-0.00146484" y="0.75" width="1" height="20" rx="0.5" fill="#595959"/>
            </svg>
            <p id="timezone">{TimeZone}</p>
        </div>
        </div>
        <p id="time">{time}</p>
    </div>
  );
};

export default TimeWidget;
