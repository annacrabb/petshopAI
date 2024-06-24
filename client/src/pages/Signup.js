import React, { useState } from 'react';
import { Form, Button, Container, Row, Col, Alert } from 'react-bootstrap';
import { useSignup } from '../hooks/useSignup';
import Success from '../components/Success'; 

const Signup = ({ onSuccess }) => {
    const [email, setEmail] = useState('');
    const { signup, error, isLoading } = useSignup();
    const defaultPassword = 'defaultPassword123!';

    const handleSubmit = async (e) => {
        e.preventDefault();
        await signup(email, defaultPassword);
        onSuccess(); 
    };

    return (
        <Container>
            <Row className="justify-content-center">
                <Col md={9}>
                    <Form className="signup" onSubmit={handleSubmit}>
                        <h6 className="text-center">Sign up to our mailing list to receive up-to-date information about current and upcoming projects!</h6>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="Enter email"
                                onChange={(e) => setEmail(e.target.value)}
                                value={email}
                            />
                        </Form.Group>
                        <br />
                        <Button type="submit" disabled={isLoading} block>
                            Sign Up
                        </Button>

                        {error && <Alert className="errorMsg mt-3">{error}</Alert>}
                    </Form>
                </Col>
            </Row>
        </Container>
    );
};

export default Signup;
