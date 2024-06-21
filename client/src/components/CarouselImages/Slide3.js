import React from 'react';
import Carousel from 'react-bootstrap/Carousel';


function Slide3({ text }) {
  return (
    <div>
      <img
        src="https://www.barrierreef.org/generated/1280w-16-9/seasim-4-copyrightaims-credit-christianmiller-1-jpg-1701384511.jpg?1701386805"
        className="d-block w-100"
        alt={text}
      />
      <Carousel.Caption>
        <h3>Heat-Resistant Coral</h3>
        <p className="carouselText">Researchers in Australia are working to breed heat-tolerant coral populations that can withstand rising temperatures. <a className="text-light" href="https://www.barrierreef.org/what-we-do/projects/growing-heat-tolerant-corals">Learn more.</a></p>
      </Carousel.Caption>
    </div>
  );
}

export default Slide3;
