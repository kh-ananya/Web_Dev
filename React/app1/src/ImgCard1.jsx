import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


const ImgCard1 = (val) => {
  return (
    <div>
    <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src={val.imgsrc} />
    <Card.Body>
      <Card.Title>{val.title}</Card.Title>
      <Card.Text>
      {val.desc}
      </Card.Text>
      <Button variant="primary">Go SomeWhere</Button>
    </Card.Body>
  </Card>
    </div>
  )
}

export default ImgCard1
 