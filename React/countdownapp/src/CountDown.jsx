import React, { useState } from 'react'
import './CountDown.css'


const CountDown = () => {
    const [count,setcount]= useState(0);
    const handleClickPlus = ()=>
    {
        setcount(count+1);
        console.log(count);
    }
    const handleClick = ()=>
    {
        if(count<=0)
        {
            alert("Count Can't be negative");
        }
        else{
            setcount(count-1);
        }
    }
  return (
    <div 
    id='first'>
      <div id="box">
      <h1>Counter App</h1>
      <button onClick={handleClickPlus} className="btn">+</button>
      {count}
      <button onClick={handleClick} className="btn">-</button>
      </div>
    </div>
  )
}

export default CountDown
