import React from 'react'
import BlogsData from '../../Data/BlogsData'
import './Blogs.css'
const Blogs = () => {
  return (
    <div>
        <h1>Blogs</h1>

        <div className='blogList'>
            {BlogsData.map(item=>{
                return (
                    <div>
                    <img src={item.image} className='blogImage'/>
                    <p>{item.info}</p>
                    </div>
                )
            })}
        </div>

    </div>
  )
} 

export default Blogs