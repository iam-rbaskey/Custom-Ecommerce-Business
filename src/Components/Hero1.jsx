import React from 'react'
import Picture from '../assets/testpic1.1.jpg'
import Home from "../assets/home1.png"


const Hero1 = () => {
  return (
    <div className=''>
    <div style={{backgroundImage: `linear-gradient(to right, rgba(0,0,0,7),rgba(0,0,0,0.01)),url(${Picture})`, backgroundRepeat:"no-repeat", backgroundSize:'cover'}} className=' h-screen w-screen grid grid-cols-2'>
        <div className=' flex-col justify-between'>
            
            <img src={Home}  className='w-36 pt-36 ml-[200px] mt-48'/>
            <h1 className=' text-white pt-1 ml-[200px] text-5xl font-bold '>Cool Printed <p className='bg-gradient-to-r from-[#f4ce43] to-[#f40000] text-transparent bg-clip-text'>T-Shirts</p></h1>
            <h5 className=' text-white pt-1 ml-[200px] text-3xl font-bold '>@most Affordable price</h5>
            <div className='pt-5'><button className=' bg-white w-24 h-10 rounded-3xl ml-[200px] font-bold hover:bg-slate-700 hover:text-white '>Explore</button></div>
        </div>
    </div>
    </div>
  )
}

export default Hero1