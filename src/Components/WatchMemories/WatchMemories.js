import React from 'react'
import travelVideo from  '../../Images/TravelVideo.mp4'
const WatchMemories = () => {
  return (
    <div style={{padding:'50px'}}>
      <h1>Watch Our Memorable Trips</h1> 
      <video width="1580px" height="724.38px" controls style={{borderRadius:'20px'}}>
        <source src={travelVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  )
}

export default WatchMemories

