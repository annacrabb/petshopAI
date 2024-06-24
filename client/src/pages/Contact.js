import React from 'react';
import Banner from '../assets/contact.banner.jack.png';
import Logo from '../assets/slimtidetogether.png';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import ContactForm from '../forms/ContactForm';
// import 'bootstrap-icons/font/bootstrap-icons.css';

const Contact = () => {
  return (
    <div className="body">
      {/* Header Photo */}
      <div>
        <img src={Banner} className="img-fluid w-100" alt="reef" />
      </div>

      {/* Title */}
      <div className="container my-5 text-center">
        <h1 className="display-4">Contact</h1>
      </div>

      {/* Content - Contact */}
      <div className="container pb-4">
        <Row>
          <Col>
            <p className="lead">
              While we fund different research ventures around the world, our home office is located in Cozumel, Mexico, where you can find some of the best drift dives in the world. Visit us at Roberta's Scuba Shack, and while you're at it, you can mark a few more dive sites off your list!
            </p>
            <Row>
              <Col xs={6} className="p-2">Street Address:</Col>
              <Col xs={6} className="p-2">77675 Cozumel, Q.R., Mexico</Col>
            </Row>
            <Row>
              <Col xs={6} className="p-2">Phone Number:</Col>
              <Col xs={6} className="p-2">+52 987 555 5555</Col>
            </Row>
            <Row>
              <Col xs={6} className="p-2">Email Address:</Col>
              <Col xs={6} className="p-2">
                <a href="mailto:annacrabb92@gmail.com">tidetogether@coralreef.com</a>
              </Col>
            </Row>
            <Row className="pt-3">
              <Col></Col>
              <Col>
                <a href="https://kableacademy.com/" className="text-dark me-2">
                  <i className="bi bi-twitter"></i>
                </a>
                <a href="https://kableacademy.com/" className="text-dark me-2">
                  <i className="bi bi-facebook"></i>
                </a>
                <a href="https://kableacademy.com/" className="text-dark">
                  <i className="bi bi-instagram"></i>
                </a>
              </Col>
            </Row>
          </Col>
          <Col className="d-none d-xl-block">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14950.352863093281!2d-86.98222425044698!3d20.482099480954794!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f4e574f76c1c891%3A0xe8f0bb7b26be098e!2sRoberta&#39;s%20Scuba%20Shack!5e0!3m2!1sen!2sus!4v1715104212581!5m2!1sen!2sus"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </Col>
        </Row>
      </div>

      <div className="container">
        <Row>
          <h2 className="pt-4">Drop us a line!</h2>
          <Col>
            <ContactForm />
          </Col>
          <Col className="text-center d-none d-lg-block">
            <img src={Logo} alt="tide together logo" className="img-fluid" width="350px" />
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Contact;
