import React from 'react'
import Picture from '../assets/testpic1.2.jpg'
import ProductCard1 from './ProductCard1'
import ProductCard2 from './ProductCard2'
import ProductCard3 from './ProductCard3'
import ProductCard4 from './ProductCard4'

const Hero2 = () => {
  return (
    <div className=''>
    <div style={{backgroundImage: `linear-gradient(to right, rgba(0,0,0,7),rgba(0,0,0,0.01)),url(${Picture})`, backgroundRepeat:"no-repeat", backgroundSize:'cover'}} className=' h-screen w-screen justify-between flex-col text-center content-end items-center'>
        <div></div>
        <div className=' flex ml-96 bg-black h-3/4 w-4/4 mb-5 mr-3 rounded-3xl opacity-90  drop-shadow-2xl'>
            <ProductCard1 />
            <ProductCard2 />
            <ProductCard3 />
            <ProductCard4 />
        </div>
    </div>
    </div>
  )
}

export default Hero2