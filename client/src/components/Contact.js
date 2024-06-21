import React from 'react';
import Banner from '../assets/contact.banner.jack.png';
import Logo from '../assets/TIDE TOGETHER.png';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';



const Contact = () => {
  return (
    <div>
      {/* Header Photo */}
      <div>
        <img src={Banner} className="img-fluid" width="100%" alt="reef" />
      </div>

      {/* Title */}
      <div className="container my-5 text-center customHeader">
        <h1 className="customHeader">Contact</h1>
      </div>

      {/* Content - Contact */}
      <div className="container pb-4">
        <div className="row">
          <div className="col">
            <p className="lead">
              While we fund different research ventures around the world, our home office is located in Cozumel, Mexico, where you can find some of the best drift dives in the world. Visit us at Roberta's Scuba Shack, and while you're at it, you can mark a few more dive sites off your list!
            </p>
            <div className="row">
              <div className="col-6 p-2">Street Address:</div>
              <div className="col-6 p-2">77675 Cozumel, Q.R., Mexico</div>
            </div>
            <div className="row">
              <div className="col-6 p-2">Phone Number:</div>
              <div className="col-6 p-2">+52 987 555 5555</div>
            </div>
            <div className="row">
              <div className="col-6 p-2">Email Address:</div>
              <a className="col-6 p-2" href="mailto:annacrabb92@gmail.com">tidetogether@coralreef.com</a>
            </div>
            <div className="row pt-3">
              <div className="col-8"></div>
              <div className="col-4">
                <a href="https://kableacademy.com/" className="text-dark social">
                  <i className="bi-twitter-x"></i>
                </a>
                <a href="https://kableacademy.com/" className="text-dark social">
                  <i className="bi-facebook"></i>
                </a>
                <a href="https://kableacademy.com/" className="text-dark social">
                  <i className="bi-instagram"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="col d-none d-xl-block">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14950.352863093281!2d-86.98222425044698!3d20.482099480954794!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f4e574f76c1c891%3A0xe8f0bb7b26be098e!2sRoberta&#39;s%20Scuba%20Shack!5e0!3m2!1sen!2sus!4v1715104212581!5m2!1sen!2sus"
              width="600"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <h2 className="pt-4">Drop us a line!</h2>
          <div className="col">

            <Form>
              <Form.Group className='mb-3' controlId="formGroupEmail">
                <Form.Label>Email address:</Form.Label>
                <Form.Control type="email" placeholder="carriefisher@coralreef.com" />
              </Form.Group>
              <Form.Group className='mb-3' controlId="formGroupName">
                <Form.Label>Name:</Form.Label>
                <Form.Control type="name" placeholder="Carrie Fisher" />
              </Form.Group>
              <Form.Group className='mb-3' controlId="formGroupSelect">
                <Form.Label>Reason for contact:</Form.Label>
                <Form.Select aria-label="Select">
                  <option>Select option</option>
                  <option value="1">I have questions about how sponsorship works</option>
                  <option value="2">I want to tell you about more research to fund</option>
                  <option value="3">I want to see how else I can help</option>
                </Form.Select>
              </Form.Group>
              <Form.Group className='mb-3' controlId="formGroupSubject" >
                <Form.Label>Subject:</Form.Label>
                <Form.Control type="text" style={{ height: '140px'}} />
              </Form.Group>
              <Button variant="dark">Submit</Button>
            </Form>

          </div>

          <div className="col text-center d-none d-lg-block">
            <img src={Logo} alt="tide together logo" width="400px" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
