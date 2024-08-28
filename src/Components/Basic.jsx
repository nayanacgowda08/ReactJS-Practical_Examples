import React from 'react'
import image from '../image/ig.avif'
function Basic() {
    let imgurl = "https://images.unsplash.com/photo-1723791749202-561abfb9b81a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyM3x8fGVufDB8fHx8fA%3D%3D"
  return (
    <div>
      {/* <h1>Welcome to React</h1> */}
    
      <img src={imgurl} alt="Unsplash" height="200" width="200" />
      <img src="./images/1.avif" alt="Unsplash" height="200" width="200" />
      <img src={image} alt="Unsplash" height="200" width="200"/>
    </div>
  )
}

export default Basic