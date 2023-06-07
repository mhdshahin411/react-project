import React, { useState } from "react";
import { Table } from "react-bootstrap";


function Spread() {
  const [arr, setarr] = useState([
    {
      name: "shahin",
      age: 20,
      qualification: "B-tech",
      image:
        "https://tse1.mm.bing.net/th?id=OIP.1mm98_jWQi-d936FSQY3iQHaEK&pid=Api&P=0",
    },
    {
      name: "safa",
      age: 20,
      qualification: "B-tech",
      image:
        "https://tse1.mm.bing.net/th?id=OIP._B2QyjYxS3qGq7UEhE2_rAHaEo&pid=Api&P=0",
    },
    {
      name: "jusair",
      age: 20,
      qualification: "B-tech",
      image:
        "https://tse2.mm.bing.net/th?id=OIP.-8AXWkhFKGJoiC-nz_MScAHaGD&pid=Api&P=0",
    },
    {
      name: "waseem",
      age: 20,
      qualification: "B-tech",
      image:
        "https://tse2.mm.bing.net/th?id=OIP.aT1o4K07ELjvo9hMQkgQAgHaMR&pid=Api&P=0",
    },
    {
      name: "shuhaib",
      age: 20,
      qualification: "B-tech",
      image:
        "https://tse1.mm.bing.net/th?id=OIP.n9c2HoKeIFXa8XGPUODkqwHaEK&pid=Api&P=0",
    },
  ]);
  const obj = { name: "shahin", age: 16, qualification: "b tech" };

  const changedata = () => {
    //   const add=[...arr,obj]
    setarr([...arr, obj]);
  };

  return (
    <div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>NUMBER</th>
            <th>NAME</th>
            <th>AGE</th>
            <th>QUALIFICATION</th>
          </tr>
        </thead>
        {arr.map((item, index) => {
          return (
            <tr>
              <td>
                <p>{index + 1}</p>
              </td>
              <td>{item.name}</td>
              <td>{item.age}</td>
              <td>{item.qualification}</td>
            </tr>
          );
        })}

        <button style={{ color:'black',backgroundColor:'skyblue',border:'none',borderRadius:'5px',margin:'0.5rem',padding:'5px'}} onClick={changedata}>add items</button>
      </Table>
    </div>
  );
}

export default Spread;
