import React from 'react'
import Image from '../../Images/HeaderImg.png'
import './Home.css'
import '../../App.css'
import Services from '../../Components/Services/Services'
import  WatchMemories  from '../../Components/WatchMemories/WatchMemories'
import PopularTour from '../../Components/PopularTour/PopularTour'
import Blogs from '../../Components/Blogs/Blogs'
import BookATrip from '../../Components/BookATrip/BookATrip'
const Home = () => {
  return (
    <div>
        <div className='main'>
          
        <img src={Image} style={{width:'100%', height:'885px'}}/>

         <div className='mainText'>
            <h1>Visit Mountains</h1>
            <h1>italy</h1>
            <button className='button_1'> See offer</button>
         </div>

        </div>
        <Services/>
        <WatchMemories/>
        <PopularTour/>
        <Blogs/>
        <BookATrip/>
    </div>
  )
}

export default Home