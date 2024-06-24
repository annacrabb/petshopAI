import React, { useState } from 'react';
import { useLogin } from '../hooks/useLogin';
import Banner from '../assets/acknow.banner.png';
import { Form, Button, Container, Row, Col, Alert } from 'react-bootstrap';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { login, error, isLoading } = useLogin();

    const handleSubmit = async (e) => {
        e.preventDefault();
        await login(email, password);
    };

    return (
        <div>
            <img src={Banner} className="img-fluid" width="100%" alt="reef" />
            <Container className="my-5 text-center">
                <h1>Log In</h1>
            </Container>
            <Container>
                <Row className="justify-content-center">
                    <Col md={6}>
                        <Form className="login" onSubmit={handleSubmit}>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control
                                    type="email"
                                    placeholder="Enter email"
                                    onChange={(e) => setEmail(e.target.value)}
                                    value={email}
                                />
                            </Form.Group>
                            <br />
                            <Form.Group controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control
                                    type="password"
                                    placeholder="Password"
                                    onChange={(e) => setPassword(e.target.value)}
                                    value={password}
                                />
                            </Form.Group>
                            <br />
                            <Button variant="primary" type="submit" disabled={isLoading} block>
                                {isLoading ? 'Logging in...' : 'Log In'}
                            </Button>

                            {error && <Alert variant="danger" className="mt-3">{error}</Alert>}
                        </Form>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Login;
