import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const Useeffect = () => {
  const [name, setName] = useState("shahin");

  useEffect(() => {
    alert(`now the name changed ${name}`);
  }, [name]);

  return (
    <div>
      {name}
      <button onClick={() => setName("safa")}>click</button>
    </div>
  );
};
export default Useeffect