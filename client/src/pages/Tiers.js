import React from "react";
import { Card, Badge, Container, Row, Col, Modal, Button } from 'react-bootstrap';
import Signup from '../pages/Signup';
import { Link } from 'react-router-dom';

function Tiers() {
  const [showModal, setShowModal] = React.useState(false);

  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  return (
    <div className="body">
      <Container className="my-5 text-center">
        <h1 className="customHeader">Sponsorship Tiers</h1>
      </Container>

      <Container>
        <Row>
          <Col xs={12} className="m-4">
            <Card className="mb-4">
              <Card.Body>
                <Card.Title>Tier One - Coral Crusader</Card.Title>
                <Card.Text>
                  Dive into the deep blue for just $10 a month! As a Coral Crusader, you’ll be the proud supporter of our aquatic adventures, keeping tabs on all our ocean-saving efforts. Dive gear not included, but digital perks aplenty!
                </Card.Text>
                <Row>
                  <Col md={4} className="mb-3">
                    <Card>
                      <Card.Body>
                    <div className="card-badge">
                        <Badge variant="primary">Certificate</Badge>
                    </div>
                        <Card.Text>
                          Personalized certificate of sponsorship featuring the sponsored sea creature's name and photo.
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col md={4} className="mb-3">
                    <Card>
                      <Card.Body>
                      <div className="card-badge">
                        <Badge variant="secondary">Profile</Badge>
                      </div>
                        <Card.Text>
                          A detailed profile of the sponsored sea creature, including its species information, habitat, and conservation status.
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col md={4} className="mb-3">
                    <Card>
                      <Card.Body>
                      <div className="card-badge">
                        <Badge variant="info">Newsletter</Badge>
                      </div>
                        <Card.Text>
                          Subscription to a monthly newsletter with updates on marine conservation news, success stories, and upcoming events.
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>

          <Col xs={12} className="m-4">
            <Card className="mb-4">
              <Card.Body>
                <Card.Title>Tier Two - Reef Rangers</Card.Title>
                <Card.Text>
                  Double the fun for our ocean-loving fans! Reef Rangers get all the Coral Crusader perks, plus some snazzy swag to flaunt your support. Show off your Tide Together pride with exclusive gear and dive even deeper into our educational goodies!
                </Card.Text>
                <Row>
                  <Col md={4} className="mb-3">
                    <Card>
                      <Card.Body>
                      <div className="card-badge">
                        <Badge variant="primary">Merchandise</Badge>
                      </div>
                        <Card.Text>
                          Branded merchandise - choose between a t-shirt and a bucket hat - featuring the "Tide Together" crab logo.
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col md={4} className="mb-3">
                    <Card>
                      <Card.Body>
                      <div className="card-badge">
                        <Badge variant="secondary">Educational Materials</Badge>
                      </div>
                        <Card.Text>
                          Access to educational materials such as e-books, documentaries, and infographics about marine life and conservation.
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col md={4} className="mb-3">
                    <Card>
                      <Card.Body>
                      <div className="card-badge">
                        <Badge variant="info">Photo Book</Badge>
                      </div>
                        <Card.Text>
                          A printed photo book featuring stunning images of marine life and conservation efforts, with a special section dedicated to sponsored sea creatures.
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>

          <Col xs={12} className="m-4">
            <Card className="mb-4">
              <Card.Body>
                <Card.Title>Tier Three - Ocean Ambassadors</Card.Title>
                <Card.Text>
                  Ready to make a splash? At $100 a month, our Ocean Ambassadors are the VIPs of the sea! Enjoy all the perks from Coral Crusaders and Reef Rangers, plus exclusive experiences that bring you closer to the heart of marine conservation. Dive in and join the elite!
                </Card.Text>
                <Row>
                  <Col md={4} className="mb-3">
                    <Card>
                      <Card.Body>
                      <div className="card-badge">
                        <Badge variant="primary">Virtual Dive</Badge>
                      </div>
                        <Card.Text>
                          Access to virtual reality or 360-degree videos showcasing the habitats of the sponsored sea creature.
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col md={4} className="mb-3">
                    <Card>
                      <Card.Body>
                      <div className="card-badge">
                        <Badge variant="secondary">VIP Events</Badge>
                      </div>
                        <Card.Text>
                          Invitation to exclusive events such as virtual Q&A sessions with marine biologists or behind-the-scenes tours of conservation facilities.
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col md={4} className="mb-3">
                    <Card>
                      <Card.Body>
                      <div className="card-badge">
                        <Badge variant="info">Website Recognition</Badge>
                      </div>
                        <Card.Text>
                          Recognition on the website as a sponsor, with the option to include a personal message or dedication.
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </Col>
                </Row>
                <p>
                  Check out our current Ocean Ambassadors <Link to='/acknowledgements' className="text-body-secondary">here</Link>!
                </p>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      <Container className="text-center my-5">
        <h2 className="customHeader">Join the Tide and Sign Up Today!</h2>
        <p className="lead">
          Don't miss the boat! <Button variant="primary" onClick={handleShow}>Sign up</Button> now to dive into the Sponsor page and discover the amazing animals you can support. Let’s make some waves together!
        </p>
      </Container>

      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>
          <h2 className="text-center ms-4 mt-3">Dive In!</h2>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Signup />
        </Modal.Body>
        <Modal.Footer>
          {/* Already have an account? Log in <Link to='/login' className="text-body-secondary">here</Link>! */}
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Tiers;
