import React, { useState } from 'react';
import ServicesData from '../../Data/ServicesData';
import './Services.css';

const Services = () => {
  const [showPopup, setShowPopup] = useState(false);

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  return (
    <div className='services'>
      <h1>Discover Our Services</h1>
      <p>explore era provides a one-stop</p>
      <div className='servicesList'>
        {ServicesData.slice(0,4).map(item => (
          <div key={item.id}>
            <img src={item.image} className='serviceImage' alt={item.title} />
            <h2>{item.title}</h2>
            <p>{item.description}</p>
          </div>
        ))}
        <button className='servicesBtn' onClick={togglePopup}>
          See All
        </button>
        {showPopup && (
          <div className='popup'>
            <h2>All Services</h2>
            <ul>
              {ServicesData.map(item => (
                <img src={item.image} style={{width:'200px', margin:'20px'}}/>
              ))}
            </ul>
            <button onClick={togglePopup}>Close</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Services;