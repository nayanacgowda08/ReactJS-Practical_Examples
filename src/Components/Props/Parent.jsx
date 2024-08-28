import React from 'react'
import Child from './Child';

const Parent = () => {
    let num = 10;
    const msg = "Welcome"
  return (
    <>
    <h1>Sending data to Child Component ...</h1>
    {/* when we pass properties to child cmponent , we receive it as objects */}
    <Child count={num} msg={msg} />
    </>
  )
}

export default Parent