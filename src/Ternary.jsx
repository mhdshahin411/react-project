import React, { useState } from "react";
import Spread from "./Spread";

function Ternary() {
  const [Hide, setHide] = useState(false);
  // const changedata = () => {
  //   setHide((Hide === false && true)? <Spread /> :"" );
  // };
  // const styles = {
  //   backgroundColor: Hide ? "red" : "green",
  //   padding: ".5rem",
  // };

  return (
    <div>
      {Hide === true ? <Spread /> : ""}
      <button
        style={{backgroundColor: Hide ? "red" : "green",padding:".5rem",border:'none',borderRadius:"30%",margin:'5px' }}
        onClick={() => setHide(!Hide)}
      >
        {Hide ? "hide" : "show"}
      </button>
    </div>
  );
}

export default Ternary;
