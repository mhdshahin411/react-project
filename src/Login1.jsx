import React, { useState } from "react";
import axios from "axios"
function Login1() {
  const [name, setName] = useState("");
  const [pass, setPass] = useState("")
  const [first, setfirst] = useState("")
  const API ="http://localhost:9000/hashpass"
 const handlesubmit =(e)=>{
  // e.preventDefault();
  // setfirst({name,pass})
  // console.log(first);
  axios.get(API).then((res) => setfirst(res.data.products));
  console.log(API);
 }


  return (

    <div>
      <form onSubmit={handlesubmit}>
        <h8>username</h8> <br></br>
        <input
         
          type="text"
          onChange={(e) => {
            setName(e.target.value);
            
          }}
        
        ></input>
        <br></br>
        <h8>password</h8> <br></br>
        <input
          
          type="text"
          onChange={(e) => {
            setPass(e.target.value);
          }}
      
        ></input><br></br><br></br>
        <button  >submit </button>
      </form>
      <br></br>
      
    </div>
  );
}

export default Login1;
