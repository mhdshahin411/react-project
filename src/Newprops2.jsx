import React from 'react'
import {  Card} from 'react-bootstrap'
function Newprops2({name,age,maritialStatus,Number,img}) {
  return (
    <div >
      <Card style={{ width: '18rem',margin: '20px' ,borderRadius:'20px '}}>
      <Card.Img variant="top" src={img} style={{borderRadius:"20px 20px 0 0"}} />
      <Card.Body>
      <Card.Title>{name}</Card.Title>
      <Card.Text>{age}
        </Card.Text>
        <Card.Text>
         {maritialStatus}
        </Card.Text>
        <Card.Text>
         {Number}
        </Card.Text>
        
      </Card.Body>
    </Card>
    </div>
  )
}

export default Newprops2