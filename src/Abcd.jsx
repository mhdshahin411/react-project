import React from 'react'
import { useState } from 'react'

function Abcd() {
    const [count,countAdd] = useState(0)

        const counter=()=>{
            countAdd(count+1)
        }
        const counter2=()=>{
            if(count<=0){
                alert("limit exiceed")
            }else{
                countAdd(count-1)
            }
        }
  return (

    <div>
        <h1 >counter : {count}</h1>
        <button onClick={counter}>A</button>
        <button onClick={counter2}>B</button>
    </div>
  )
}

export default Abcd