import React from 'react';
import { Modal, Alert } from 'react-bootstrap';

const Success = ({ show, handleClose }) => {
    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Success!</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Alert variant="success">Email received!</Alert>
            </Modal.Body>
        </Modal>
    );
};

export default Success;
