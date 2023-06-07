import React, { useState } from 'react'
import { Table } from 'react-bootstrap'


function Tab() {
  const [arr,setarr] = useState([
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
  ])
    const obj={name:"shahin",age:16,qualification:"b tech"}
    
    const changedata=()=>{
        setarr(arr.concat(obj))
        // push or concat 
    }
  return (
    <div>

 <Table striped bordered hover >
      <thead>
        <tr>
        <th>number</th>
          <th>name</th>
          <th>age</th>
          <th>qualification</th>
          
          
        </tr>
      </thead>
      {arr.map((item,index)=>{
            return(
                <tr>
                <td><p>{index+1}</p></td>
                <td>{item.name}</td>
                <td>{item.age}</td>
                <td>{item.qualification}</td>
                
                
              </tr>
            )
        })}
        
        <button onClick={changedata}>add items</button>
      
    </Table>
  




    </div>
  )
}

export default Tab