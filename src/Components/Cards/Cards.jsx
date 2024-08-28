import React from 'react'
import './cards.css'
import {data} from './data'

function Cards() {
    // console.log(data);
    
    return (
      <div className='card'>
          <div className="header">
              Animal's Gallery
          </div>
          <div className="line">
          {data.map((val, index) => (
              <div className="main" key={index}>
                <div className="img">
                  <img src={val.imageURL} alt={val.title} />
                  </div>
                  <div className="title">
                  <h2 >{val.title}</h2>
                  </div>
                  <div className="desc">
                  <p >{val.desc}</p>
                  </div>
              </div>
          ))}
          </div>
      </div>
  );
}

export default Cards