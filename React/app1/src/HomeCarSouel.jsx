import React from 'react'
import Carousel from 'react-bootstrap/Carousel';

const HomeCarSouel = () => {
  return (
    <div>
    <Carousel>
    <Carousel.Item>
      <img src="https://cdn.pixabay.com/photo/2017/02/09/21/08/wings-2053515_640.png" alt='hi' text="First slide" />
      <Carousel.Caption>
        <h3>First slide label</h3>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHvmdDU4s2LyCaCwImbS-isqXEI11hV5v0JniUSRnskcZAILKnycUljIN-fAzH_BXEdBk&usqp=CAU" alt='hi' text="Second slide" />
      <Carousel.Caption>
        <h3>Second slide label</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img src="https://www.pngall.com/wp-content/uploads/14/Sonic-Movie-PNG-Background-300x225.png" alt='hi' text="Third slide" />
      <Carousel.Caption>
        <h3>Third slide label</h3>
        <p>
          Praesent commodo cursus magna, vel scelerisque nisl consectetur.
        </p>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
    </div>
  )
}

export default HomeCarSouel
