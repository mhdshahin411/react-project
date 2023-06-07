import React, { useState } from 'react'
import Login from './Login'

import Register from './Register'

function Input() {
    // const [name, setName] = useState("")
    // const [name1, setName2] = useState("")

    // const newobj={name:"shahin",qualification:"b-tech"}
    // const newobj2={name:"wasu",qualification:"b-tech"}  

    const [shahin, setShahin] = useState("shahin")
    const [first, setfirst] = useState("still he is the best");
    
  return (
    <div>
        {/* <label htmlFor="">name : </label>
        <input type="text" placeholder='type something' onChange={(e)=>setName(e.target.value)} />
        <button onClick={()=>setName2(name)}>click</button>
        <h1>{name1}</h1> */}
      <Register obj={shahin} obj2={setShahin}/>
      <Login obj={first} obj2={setfirst}/>
        
    </div>
    

  )

  }
export default Input