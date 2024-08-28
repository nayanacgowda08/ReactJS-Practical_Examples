import React, { useState } from 'react'
import './style.css'
const IncDec = () => {
    const [count, setCount] = useState(0)

    const increament = () => {
        setCount(count + 1)
    }

    const decrement = ()=>{
        if(count>0) 
             setCount(count-1)
        else
         alert("not valid")
    }

  return (
    <div className='sup'>
     <div className="main">
        <h1 className='top'>🔔<sup>{count}</sup></h1>
       <div className="btn">
       <button className='inc' onClick={increament} >➕</button>
       <button className='dec' onClick={decrement}  >➖</button>
       </div>
     </div>
    </div>
  )
}

export default IncDec