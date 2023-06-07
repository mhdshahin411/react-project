import React from "react";

function Login({obj,obj2}) {
  
  return (
    <div>
      <h1>{obj}</h1>
    <button onClick={()=>obj2("still shahin is best")}>change</button>
    </div>
  );
}

export default Login;
