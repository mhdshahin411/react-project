import React from "react";
import { Carousel } from "react-bootstrap";

function Curosal() {

  const arr = [
    { name: "shahin", age: 20, qualification: "b-tech" , img:"https://tse3.mm.bing.net/th?id=OIP.MCLzVoExgXPyNi_V5gb1AwHaE7&pid=Api&P=0" },
    { name: "shahin", age: 20, qualification: "b-tech" ,img:'https://tse2.mm.bing.net/th?id=OIP.Z_PIeIRDajXPmZHROt-T_QHaEK&pid=Api&P=0'},
    { name: "shahin", age: 20, qualification: "b-tech" ,img:'https://tse4.mm.bing.net/th?id=OIP.nyFLBYjD207JNHC4hBQBAwHaE8&pid=Api&P=0'},
    
  ];

  return (
    <div>
    <Carousel>
   
        
      {arr.map((item) => {
        return (
         
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={item.img}
                alt="Second slide"
              />

              <Carousel.Caption>
                <h3>{item.name}</h3>
                <p>{item.age}</p>
                <p>{item.qualification}</p>
              </Carousel.Caption>
            </Carousel.Item>
          
        );
      })}
   
    </Carousel>
     </div>
  );
}

export default Curosal;
