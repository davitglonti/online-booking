import React from "react"

import barcelona from '../Images/Popular/barcelona.png'
import egypt from '../Images/Popular/egypt.png'
import paris from '../Images/Popular/paris.png'
import rome from '../Images/Popular/rome.png'

const PopularToursData = [
    {
        city:'Barcelona',
        country:'Spain',
        image:barcelona,
        guests: 2,
        days:7,
        price: 2400
    },
    {
        city:'Rome',
        country:'Italy',
        image:rome,
        guests: 2,
        days:3,
        price: 2400
    },
    {
        city:'Paris',
        country:'France',
        image:paris,
        guests: 4,
        days:3,
        price: 2400
    },
    {
        city:'Luxor City',
        country:'Egypt',
        image:egypt,
        guests: 2,
        days:2,
        price: 2400
    },
    {
        city:'London',
        country:'United Kingdom',
        image:'ll',
        guests: 3,
        days:5,
        price: 3000
        },
        {
        city:'Tokyo',
        country:'Japan',
        image:'ll',
        guests: 2,
        days:6,
        price: 3000
        },
        {
        city:'New York City',
        country:'United States',
        image:'ll',
        guests: 3,
        days:4,
        price: 2500
        },
        
        {
        city:'Sydney',
        country:'Australia',
        image:'ll',
        guests: 2,
        days:5,
        price: 2800
        },
        
        {
        city:'Dubai',
        country:'United Arab Emirates',
        image:'ll',
        guests: 2,
        days:4,
        price: 2800
        }
]

export default PopularToursData