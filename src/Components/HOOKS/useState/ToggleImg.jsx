import React, { useState } from 'react'
import img from "../../../image/img9.avif"
import './style.css'

const ToggleImg = () => {
    const [image, setimage] = useState(true)

    const handleClick = () => {
        setimage(!image)
    }

  return (
    <>
        <div className="main">
            <button
            onClick={handleClick}>
                click her to show the img
            </button>
            {/* <img 
            
             alt="" {image ? "":src={img}}/> */}
             <p>
                {
                    image? "" : <img src={img} alt="" width="20vw"  />
                }
             </p>
        </div>
    </>


  )
}

export default ToggleImg