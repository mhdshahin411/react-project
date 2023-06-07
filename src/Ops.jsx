import React from "react";
import { useState } from "react";

function Ops() {
  const [data, setData] = useState({
    name: "shahin",
    age: 22,
    qualification: "B-tech",
    position: "react developer",
  });

  const changeName = () => {
    setData({ name: "waseem", age: 10 });
  };

  return (
    <div>
      <h1>name : {data.name}</h1>
      <button onClick={changeName}>change</button>
      <h1>age : {data.age}</h1>
      <h1>qualification : {data.qualification}</h1>
      <h1>position: {data.position}</h1>
    </div>
  );
}
export default Ops;
