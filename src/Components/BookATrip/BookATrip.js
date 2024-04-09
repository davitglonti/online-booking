import React, { useState } from 'react';
import BookTripData from '../../Data/BookTripData';
import './BookATrip.css'
const BookATrip = () => {
    const [selectedCity, setSelectedCity] = useState('');
    const handleCityChange = (event) => {
        setSelectedCity(event.target.value);
    };

 
    return (
    <div className='Trip'>
        <h1> Ready To Book A Trip?</h1>

       <div className='TripInputs'>
        <select value={selectedCity} onChange={handleCityChange} className='inputs'>
                <option value="" disabled className='input'>you starting location</option>
               
               {BookTripData[0].list.map(item=>{
                return (
                    <option >{item.element}</option>
                )
               })}
        
                
                {/* Add more cities here */}
            </select>
        
            <select value={selectedCity} >
                <option value="" disabled className='input'>Chose a Tour offer</option>
               
                <option > paris, 7 day, 4 adults</option>
                <option > stockholm, 12 day, 2 adults</option>
                <option > viena, 4 day, 2 adults</option>
                
                {/* Add more cities here */}
            </select>
            <input type="date" id="start" name="trip-start" value="2018-07-22" min="2018-01-01" max="2018-12-31" className='input'/>
            

            <select value={selectedCity} >
                <option value="" disabled className='input'>persons</option>
               
                <input type='number'/>
                
                {/* Add more cities here */}
            </select>
       </div>


    </div>
  )
}

export default BookATrip