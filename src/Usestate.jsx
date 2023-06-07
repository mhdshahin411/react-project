import React, { useState } from 'react'

function Usestate() { 

    const [color,setColor] = useState("black")
    
    const green=()=>{
        setColor("green")
    }

    const yellow=()=>{
        setColor("yellow")
        
    }
    const blue=()=>{
        setColor("blue")
    }
    
  return (
    <div>
        <h1>color is {color}</h1>

        <button onClick={green}>A</button>
        <button onClick={yellow}>B</button>
        <button onClick={blue}>C</button>
    </div>

  )
}
export default Usestate

