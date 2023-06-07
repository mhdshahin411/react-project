import React, { useEffect, useState } from "react";
import axios from "axios";
import { Card, Carousel } from "react-bootstrap";

function Apint() {
  const [product, setProduct] = useState([]);
  const Api = "https://dummyjson.com/products";
  
  
  useEffect(() => {
    axios.get(Api).then((res) => setProduct(res.data.products));
    console.log(Api);
  }, []);

  return (
    <div>
      {product.map((item) => {
        return (
          <Card style={{ width: "18rem",float:'left'}}>
            
                <Carousel>
                {item.images.map((shah) => {
              return (
                <Carousel.Item>
                <Card.Img style={{height:'200px'}}
                  variant="top"
                  src={(shah)}
                />
                </Carousel.Item>
                 );
                })}
    
              </Carousel>
               
             
            <Card.Body>
              <Card.Title>{item.title}</Card.Title>
              <Card.Text>{item.brand}</Card.Text>
            </Card.Body>
          </Card>
        );
      })}
    </div>
  );
}

export default Apint;
