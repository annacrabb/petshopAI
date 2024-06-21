import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../custom.css';
import Banner from '../assets/about.banner.jack.png';
import Rays from '../assets/about.pic.1.jpg';
import Turtle from '../assets/about.pic.2.jpg';
import Purple1 from '../assets/about.pic.3.png';
import Purple2 from '../assets/about.pic.4.png';


const About = () => {
  return (
    <div>
      {/* Header Photo */}
      <div>
        <img src={Banner} className="img-fluid" width="100%" alt="reef" />
      </div>

      {/* Title */}
      <div className="container my-5 text-center customHeader">
        <h1 className="customHeader">About Us</h1>
      </div>

      {/* Content - About */}
      <div className="container">
        <div className="pb-4 lead">
          At Tide Together, we believe in the power of community to safeguard our oceans and their mesmerizing inhabitants. Our mission is to unite scuba divers, ocean enthusiasts, and conservationists worldwide in a common cause: protecting marine flora and fauna through innovative research initiatives.
        </div>
        <div className="pb-4 lead">
          Driven by a deep passion for the ocean's beauty and biodiversity, we provide a platform where individuals can actively contribute to the preservation of marine life. Through our sponsorship program, users have the opportunity to directly support the conservation of specific marine animals, fostering a personal connection with the underwater world.
        </div>

        <div className="row">
          <div className="col pb-4 d-none d-md-block">
            <img className="img-fluid" src={Rays} alt="sting rays being photographed by a diver" />
          </div>
          <div className="col pb-4 d-none d-md-block">
            <img className="img-fluid" src={Turtle} alt="turtle swimming along a reef" />
          </div>
        </div>

        <div className="pb-4 lead">
          We understand that not everyone can explore the depths firsthand, but our platform offers alternative ways to engage with and support marine ecosystems. Whether through sponsoring marine life, participating in educational initiatives, or advocating for sustainable practices, every action taken on Tide Together contributes to the collective effort of protecting our oceans.
        </div>

        <div className="pb-4 lead">
          By fostering a sense of community and empowerment, we aim to raise awareness about the challenges facing marine environments and inspire positive change. Through the combined efforts of passionate individuals and strategic funding, we strive to advance research, conservation, and advocacy efforts, ensuring a vibrant and resilient future for our oceans and the life they sustain.
        </div>
        <div className="row">
          <div className="col pb-4 d-none d-md-block">
            <img className="img-fluid" src={Purple1} alt="long purple coral" />
          </div>
          <div className="col pb-4 d-none d-md-block">
            <img className="img-fluid" src={Purple2} alt="coral reef" />
          </div>
          <div className="lead">
            Join us in our mission to explore, conserve, and cherish the wonders of the deep blue sea. Together, we can make a meaningful difference for marine biodiversity and the health of our planet.
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
