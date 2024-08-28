import React, { useState } from 'react'
import './Accordian.css'

const Accordian = () => {
    const [para, setpara] = useState(true)
    const handleClick = () => {
        setpara(!para)
    }
  return (
    <>
  <div className="main">
  <button onClick={handleClick}>
    {para?"show para":"hide para"}
    </button>
    <p>
        {
            para?" ":"  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, alias."
        }
    </p>
  </div>
    </>


  )
}

export default Accordian