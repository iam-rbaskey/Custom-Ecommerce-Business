import React from 'react'
import t1 from "../assets/test_1.4.png"

const ProductCard2 = () => {
  return (
    <div className=' bg-white h-full w-1/4 items-center text-center content-center'>
        <div className=' h-2/3 w-full'>
        <img src={t1} alt=' ' />
        </div>
        <div className=' '>
            <h1 className=' font-bold text-xl '>Cotton Printed T-Shirt</h1>
            <p className=' font-semibold text-sm'>Black-M</p>
            <p className=' font-bold text-3xl text-green-700'> ₹399</p>
            <div className=' text-slate-800 font-bold p-2'><button className=' bg-yellow-500 h-10 w-24 rounded-full'>Notify</button></div>
        </div>
    </div>
  )
}

export default ProductCard2