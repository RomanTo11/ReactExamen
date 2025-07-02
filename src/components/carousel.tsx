import React from 'react';
import { Carousel } from 'react-bootstrap';

const CarouselApp: React.FC = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://source.unsplash.com/1600x500/?nature,forest"
          alt="Imagen naturaleza"
        />
      </Carousel.Item>
    </Carousel>
  );
};

export default CarouselApp;
