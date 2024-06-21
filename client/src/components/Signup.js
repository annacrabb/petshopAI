import React, { Component } from 'react';
import Logo from '../assets/TIDE TOGETHER.png';
import Banner from '../assets/acknow.banner.png';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'

class Signup extends Component {
    render() {
        return (
            <div>
                <img
                    src={Banner}
                    className="img-fluid"
                    width="100%"
                    alt="reef"
                />
                <div className="container my-5 text-center customHeader">
                    <h1 className="customHeader">Sign Up</h1>
                </div>
                <div className="container">

                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                            <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Check me out" />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </div>

            </div>
        )
    }
}

export default Signup