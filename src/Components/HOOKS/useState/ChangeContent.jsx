import React, { useState } from 'react'
import './style.css'
const ChangeContent = () => {
    const [user, setuser] = useState("Nayana")
    const printName = ()=>{
        setuser("Nayana Gowda")
    
    }
  return (
    <>
    <br /><br />
    <div className="main2 main">
        <h2>Change Content</h2>
        <div className="name">
        <h3>My name is {user}</h3>
        <button onClick={printName}>Chnage name</button>
        </div>
    </div>
    </>
  )
}

export default ChangeContent