import React from 'react'
import './StayDetals.css'
import newZelandImg from '../../Images/newZeland.png'
import { IoStarSharp } from "react-icons/io5";

const StaysDetal = () => {
  return (
    <div class="parent">
    <div class="div1">
        <h1>Searched by:</h1>
       
        <p>destionation</p>
        <h3 className='stayList'>Auckland,new Zealand</h3>
        <p>Check in date</p>
        <h3 className='stayList'>thuesday,february 1, 2024</h3>
        <p>destionation</p>
        <h3 className='stayList'>check out date</h3>
        <p>destionation</p>
        <h3 className='stayList'>friday,february, 2024</h3>
        <p>persons</p>
        <h3 className='stayList'>2 adults,0 children 1 room</h3>
        
        <h3>total 8 days</h3>
         </div>
    <div class="div2">
        <img src={newZelandImg}/>
         </div>
    <div class="div3">
        <h1> all the facilities</h1>
        <ul>
            <li>private pool</li>
            <li>terrace</li>
            <li>kitchen</li>
            <li>1 bedroom</li>
            <li>2 bathrooms</li>
            <li>private gym</li>
        </ul>
         </div>
    <div class="div4">
        <div className=''>
           <h1>New Zealand Resort</h1>
           <p> Street,auckland,new zealand</p> 
            <h2> Rating:</h2>
            <IoStarSharp style={{color:'#FF6700'}}/>
            <IoStarSharp style={{color:'#FF6700'}}/>
            <IoStarSharp style={{color:'#FF6700'}}/>
        </div>
        
        
         </div>
    </div>
  )
}

export default StaysDetal