import React, { Component, useState } from 'react'  
import Carousel from 'react-bootstrap/Carousel'  
import image1 from '../assets/image-1.jpg'
import image2 from '../assets/image-2.jpg'
import image3 from '../assets/image-3.jpg'

export default function ControlledCarousel() {
    const [index, setIndex] = useState(0);
  
    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
  
    return (
      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={image1}
            alt="First slide"
            height="350"
          />
          <Carousel.Caption>
            <h3>Kitchen Space</h3>
            <p>Great Big stainless steel</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={image2}
            alt="Second slide"
            height="350"
          />
  
          <Carousel.Caption>
            <h3>Counters</h3>
            <p>Wooden great for chopping</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={image3}
            alt="Third slide"
            height="350"
          />
  
          <Carousel.Caption>
            <h3>Cookers</h3>
            <p>
              Nothing is better than stainless steel
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
  }