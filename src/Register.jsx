import React from 'react'

function Register({obj,obj2}) {
  
  return (
    <div>
     <h1>{obj} </h1>
     <button onClick={()=>obj2("waseem")}>change</button>
    </div>
  )
}

export default Register