import React from 'react';
import Carousel from 'react-bootstrap/Carousel';


function Slide2({ text }) {
  return (
    <div>
      <img
        src="https://media.licdn.com/dms/image/D4E1BAQG0HP-afqLdQg/company-background_10000/0/1660149760139/coastruction_cover?e=2147483647&v=beta&t=RzdgBF92DGNVotGrBmm1GgCTD_3v0i3MKPqxZpwoc6o"
        className="d-block w-100"
        alt={text}
      />
      <Carousel.Caption>
        <h3>3D Printed Coral</h3>
        <p className="carouselText ">Coastruction designs, produces, and installs 3D printed coral reefs to aid in the restoration of damaged reef systems and protect vulnerable coastlines. <a href="https://www.coastruction.com/">Learn more.</a></p>
      </Carousel.Caption>
    </div>
  );
}

export default Slide2;
