import React, { useState } from 'react'
import './toggle.css'

const Toggle = () => {
    const [btn, setbtn] = useState(true)
    const toggle = ()=>{
        setbtn(!btn)
    }
  return (
    <>
        <div className="toggle">
            <h2>Toggle</h2>
            <div className="onOff">
            <button onClick={toggle} className={btn?"on":"off"}>
                {btn?"On":"Off"}
            </button>
            </div>
        </div>
    </>
  )
}

export default Toggle