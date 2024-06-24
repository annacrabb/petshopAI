import React, { useState } from 'react';
import { Modal } from 'react-bootstrap';
import Signup from './Signup';
import Success from './Success';

const SignupModal = ({ showModal, handleClose }) => {
    const [showSuccess, setShowSuccess] = useState(false);

    const handleSuccess = () => {
        setShowSuccess(true);
    };

    const handleCloseSuccess = () => {
        setShowSuccess(false);
        handleClose(); // Close the modal after success message is dismissed
    };

    return (
        <>
            <Modal show={showModal} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>
                        <h2 className="text-center">Sign Up</h2>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {!showSuccess ? (
                        <Signup onSuccess={handleSuccess} />
                    ) : (
                        <Success show={showSuccess} handleClose={handleCloseSuccess} />
                    )}
                </Modal.Body>
                <Modal.Footer>
                    {/* Additional footer content if needed */}
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default SignupModal;
