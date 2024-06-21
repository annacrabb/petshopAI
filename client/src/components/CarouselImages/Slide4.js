import React from 'react';
import Carousel from 'react-bootstrap/Carousel';


function Slide4({ text }) {
  return (
    <div>
      <img
        src="https://i0.wp.com/www.yesmagazine.org/wp-content/uploads/2021/08/arcitc.jpg?w=1400&quality=90&ssl=1"
        className="d-block w-100"
        alt={text}
      />
      <Carousel.Caption>
        <h3>AI and Mammal Detection</h3>
        <p className="carouselText">Whale Seeker is a Canadian startup that uses artificial intelligence and human expertise to provide marine mammal detection. This aids in preventing collisions with fishing, cargo, or other marine vessels. <a className="text-light" href="https://www.barrierreef.org/what-we-do/projects/growing-heat-tolerant-corals">Learn more.</a></p>
      </Carousel.Caption>
    </div>
  );
}

export default Slide4;
