import React from 'react';
import Carousel from 'react-bootstrap/Carousel';


function Slide1({ text }) {
  return (   
    <div>
      <img
        src="https://sustainability.stanford.edu/sites/sustainability/files/styles/card_1192x596/public/media/image/resized_reef_image_0.jpg.webp?h=6935e2eb&itok=ZcKJ9MOE"
        className="d-block w-100"
        alt={text}
      />
      <Carousel.Caption>
        <h3>Coral Prediciton</h3>
        <p className="carouselText">Researchers in Hawai'i are using Indigenous knowledge and seafloor maps to predict where coral reefs will thrive in order to prioritize current and future conservation efforts. <a className="text-light" href="https://sustainability.stanford.edu/news/protecting-next-generation-corals#:~:text=New%20research%20shows%20the%20major,better%20protect%20these%20coral%20nurseries">Learn more.</a></p>
      </Carousel.Caption>
    </div>
  );
}

export default Slide1;
