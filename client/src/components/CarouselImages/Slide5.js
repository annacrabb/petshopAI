import React from 'react';
import Carousel from 'react-bootstrap/Carousel';


function Slide5({ text }) {
  return (
    <div>
      <img
        src="https://jagged-fortunate-stamp.media.strapiapp.com/Whats_App_Image_2019_11_25_at_09_18_48_34c5cf2acf.jpeg"
        className="d-block w-100"
        alt={text}
      />
      <Carousel.Caption>
        <h3>AI and Mapping</h3>
        <p className="carouselText">Plan Blue is a German startup that is using sensors, artificial intelligence, autonomous underwater satellites to revolutionize seafloor mapping and provide a database that can be used to improve conservation and sustainable underwater development. <a className="text-light" href="https://www.planblue.com/">Learn more.</a></p>
      </Carousel.Caption>
    </div>
  );
}

export default Slide5;
