// import React, { useState } from 'react';
// import Logo from '../assets/TIDE TOGETHER.png';
// import Banner from '../assets/acknow.banner.png';
// import Form from 'react-bootstrap/Form';
// import Button from 'react-bootstrap/Button';
// import { useSignup } from '../hooks/useSignup';

// const Signup = () => {

//     const [email, setEmail] = useState('')
//     const [password, setPassword] = useState('')
//     const {signup, error, isLoading} = useSignup()

//     const handleSubmit = async (e) => {
//         e.preventDefault()

//         await signup(email, password)
//     }

//     return (
//         <div>

//             <div className="container">

//                 <form className="signup" onSubmit={handleSubmit}>
//                     <h3>Sign Up</h3>

//                     <label>Email:</label>
//                     <input type="email"
//                         onChange={(e) => setEmail(e.target.value)}
//                         value={email}
//                     />
//                     <label>Password:</label>
//                     <input type="password"
//                         onChange={(e) => setPassword(e.target.value)}
//                         value={password}
//                     />
//                     <button disabled={isLoading}>Sign Up</button>
//                     {error && <div className="error">{error}</div>}
//                 </form>
//             </div>
//         </div>
//     )

// }

// export default Signup

import React, { useState } from 'react';
import Logo from '../assets/TIDE TOGETHER.png';
import Banner from '../assets/acknow.banner.png';
import { Form, Button, Container, Row, Col, Alert } from 'react-bootstrap';
import { useSignup } from '../hooks/useSignup';

const Signup = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { signup, error, isLoading } = useSignup();

    const handleSubmit = async (e) => {
        e.preventDefault();
        await signup(email, password);
    };

    return (
        <div>
            <Container>
                <Row className="justify-content-center">
                    <Col md={6}>
                        <Form className="signup mt-5" onSubmit={handleSubmit}>
                            <h2 className="text-center mb-4">Sign Up</h2>
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
                            <Form.Group controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control
                                    type="password"
                                    placeholder="Enter password"
                                    onChange={(e) => setPassword(e.target.value)}
                                    value={password}
                                />
                            </Form.Group>
                            <br />
                            <Button variant="primary" type="submit" disabled={isLoading} block>
                                Sign Up
                            </Button>

                            {error && <Alert variant="danger" className="mt-3">{error}</Alert>}


                        </Form>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Signup;
