import React, { useState } from 'react';
import { Form, Button, Modal } from 'react-bootstrap';

const ContactForm = () => {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [reason, setReason] = useState('');
    const [subject, setSubject] = useState('');
    const [error, setError] = useState(null);
    const [emptyFields, setEmptyFields] = useState([]);
    const [showModal, setShowModal] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const contact = { email, name, reason, subject };
        console.log('Sending data to server:', contact);

        const response = await fetch('http://localhost:4000/api/contact', {
            method: 'POST',
            body: JSON.stringify(contact),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        const json = await response.json();

        if (!response.ok) {
            console.log('Error response:', json);
            setError(json.error);
            setEmptyFields(json.emptyFields);
        } else {
            setEmail('');
            setName('');
            setReason('');
            setSubject('');
            setError(null);
            setEmptyFields([]);
            console.log('New contact added', json);
            setShowModal(true); // Show modal on successful submission
        }
    }

    return (
        <>
            <Form className="create container" onSubmit={handleSubmit}>
                <Form.Group className='mb-3' controlId="formGroupEmail">
                    <Form.Label>Email address:</Form.Label>
                    <Form.Control
                        type="email"
                        placeholder="carriefisher@coralreef.com"
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                        className={emptyFields.includes('email') ? 'error' : ''}
                    />
                </Form.Group>

                <Form.Group className='mb-3' controlId="formGroupName">
                    <Form.Label>Name:</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Carrie Fisher"
                        onChange={(e) => setName(e.target.value)}
                        value={name}
                        className={emptyFields.includes('name') ? 'error' : ''}
                    />
                </Form.Group>

                <Form.Group className='mb-3' controlId="formGroupSelect">
                    <Form.Label>Reason for contact:</Form.Label>
                    <Form.Select
                        aria-label="Select"
                        onChange={(e) => setReason(e.target.value)}
                        value={reason}
                        className={emptyFields.includes('reason') ? 'error' : ''}
                    >
                        <option value="" disabled>Select option</option>
                        <option value="I have questions about how sponsorship works">I have questions about how sponsorship works</option>
                        <option value="I want to tell you about more research to fund">I want to tell you about more research to fund</option>
                        <option value="I want to see how else I can help">I want to see how else I can help</option>
                    </Form.Select>
                </Form.Group>

                <Form.Group className='mb-3' controlId="formGroupSubject">
                    <Form.Label>Subject:</Form.Label>
                    <Form.Control
                        as="textarea"
                        rows={4}
                        onChange={(e) => setSubject(e.target.value)}
                        value={subject}
                        className={emptyFields.includes('subject') ? 'error' : ''}
                    />
                </Form.Group>

                <Button type="submit">
                    Submit
                </Button>

                {error && <div className="errorMsg mt-3">{error}</div>}
            </Form>

            <Modal show={showModal} onHide={() => setShowModal(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Message Sent</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Your message just made a big splash! We'll get back to you in no time.
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="dark" onClick={() => setShowModal(false)}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default ContactForm;
