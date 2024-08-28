import React from 'react'

const Child = (props) => {
    // console.log(props);
    let {count, msg} = props;

    
  return (
    <>
    <div>Child</div>
    <h1>My fav num is {count}</h1>
    <h1> {msg} to ReactJS class</h1>
    </>
  )
}

export default Child