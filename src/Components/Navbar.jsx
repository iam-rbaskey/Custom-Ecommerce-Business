import React, { useState } from 'react'

import Logo1 from "../assets/testlogo1.1.png"
import Home from "../assets/home.png"
import User from "../assets/user.png"
import Settings from "../assets/setting.png"
import Search from "../assets/loupe.png"
import Surprise from "../assets/app.png"

const Navbar = () => {

    const [touch, setTouch] = useState(false)

  return (
    <div className=' fixed grid grid-cols-2 bg-black bg-transparent h-screen  w-28 justify-between'>
        <div className='' onMouseEnter={()=> setTouch(true)} onMouseLeave={()=> setTouch(false)}>
        <img src={Logo1} alt='' className='w-28 ml-7 mt-5' />
        <img src={Home}  className='w-7 ml-10 mt-48 cursor-pointer invert '/>
        <img src={Search} className='w-7 ml-10 mt-8 cursor-pointer invert' />
        <img src={Surprise} className='w-7 ml-10 mt-8 cursor-pointer invert' />
        <img src={User} className='w-7 ml-10 mt-8 cursor-pointer invert' />
        <img src={Settings} className='w-7 ml-10 mt-8 cursor-pointer invert' />
        </div>
        { touch &&  <div className=' z-20 ml-8 w-20 h-screen text-base'>
        <h4 className=' mt-[267px] text-white font-bold text-xl'>Home</h4>
        <h4 className=' mt-[30px] text-white font-bold text-xl'>Search</h4>
        <h4 className=' mt-[35px] text-white font-bold text-xl'>Surprise</h4>
        <h4 className=' mt-[32px] text-white font-bold text-xl'>User</h4>
        <h4 className=' mt-[30px] text-white font-bold text-xl'>Settings</h4>
        </div>}
        
    </div>
  )
}

export default Navbar