import React, { useState } from 'react'
import PopularToursData from '../../Data/PopularToursData'
import './PopularTour.css'
import { FaChevronLeft,FaChevronRight } from "react-icons/fa";
const PopularTour = () => {
    const [firstElement,setFirstElement]=useState(0)
    const [secondElement,setSecondElement]=useState(4)

    const prevElements = () => {
        console.log(firstElement)
        if(firstElement > 0 ){
          setFirstElement(firstElement - 4)
            setSecondElement(secondElement - 4)
        } else {
            setFirstElement(PopularToursData.length - 4)
            setSecondElement(PopularToursData.length)
        }
    }
    const nextElements = () => {
        if(secondElement>=PopularToursData.length){
            setFirstElement(0)
            setSecondElement(4)
        } else {
            setFirstElement(firstElement+4)
            setSecondElement(secondElement+4)
        }
    }
  return (
    <div className='Tours'>
        <h1>Popular Tour Oppers</h1>
        
        <FaChevronLeft onClick={()=>prevElements()}/>
        <FaChevronRight className='rightClick' onClick={()=>nextElements()}/>
        <div className='ToursList'>
            {PopularToursData.slice(firstElement,secondElement).map(item=>{
                return (
                    <div >
                    <img src={item.image} className='ToursImg'/>
                    <h2> {item.city}, {item.country}</h2>
                    <p>{item.guests} adults, {item.days} days</p>
                    <p>{item.price}$</p>
                    </div>
                )
            })}
        </div>
    </div>
  )
}

export default PopularTour