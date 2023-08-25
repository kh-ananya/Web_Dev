import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


const ImgCard2 = (value) => {
  return (
    <div>
    <div>
    <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src={"value.src" }/>
    <Card.Body>
      <Card.Title>{value.title}</Card.Title>
      <Card.Text>
        {value.desc}
      </Card.Text>
      <Button variant="primary" >Go somewhere</Button>
    </Card.Body>
  </Card>
    </div>
    </div>
  )
}

export default ImgCard2
