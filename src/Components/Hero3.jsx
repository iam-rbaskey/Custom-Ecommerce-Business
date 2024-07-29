import React from 'react'
import Picture from '../assets/testpic1.2.jpg'

const Hero3 = () => {
  return (
    <div className=''>
    <div style={{backgroundImage: `linear-gradient(to right, rgba(0,0,0,7),rgba(0,0,0,0.01)),url(${Picture})`, backgroundRepeat:"no-repeat", backgroundSize:'cover'}} className=' h-screen w-screen justify-between flex-col text-center content-end items-center'>
        <div></div>
        
    </div>
    </div>
  )
}

export default Hero3