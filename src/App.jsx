import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './Components/Navbar'
import Welcome from './Components/Welcome'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className=' justify-between h-10 w-96 '>
      <div className=''><Navbar /></div>
      <div className=' '><Welcome /></div>
      
    </div>
    </>
  )
}

export default App
