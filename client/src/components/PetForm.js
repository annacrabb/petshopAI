import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

const PetForm = () => {

    const [petName, setPetName] = useState('')
    const [petType, setPetType] = useState('')
    const [picture, setPicture] = useState('')
    const [desc, setDesc] = useState('')
    const [cost, setCost] = useState('')
    const [error, setError] = useState(null)
    const [emptyFields, setEmptyFields] = useState([])

    const handleSubmit = async (e) => {
        e.preventDefault()

        const pet = { petName, petType, picture, desc, cost }
        console.log('Sending data to server:', pet)

        const response = await fetch('http://localhost:4000/api/routes/sponsor', {
            method: 'POST',
            body: JSON.stringify(pet),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const json = await response.json()

        if (!response.ok) {
            console.log('Error response:', json)
            setError(json.error)
            setEmptyFields(json.emptyFields)
        } else {
            setPetName('')
            setPetType('')
            setPicture('')
            setDesc('')
            setCost('')
            setError(null)
            setEmptyFields([])
            console.log('new pet added', json)
        }
    }

    return (
        <Form className="create container" onSubmit={handleSubmit}>
            <div className="container m-5 text-center">
                <h1 className="customHeader">Add a New Pet</h1>
            </div>
            <Form.Group className="mb-3" controlId="formPetName">
                <Form.Label>Pet Name:</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Enter pet name"
                    onChange={(e) => setPetName(e.target.value)}
                    value={petName}
                    className={emptyFields.includes('petName') ? 'error' : ''}
                />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formPetType">
                <Form.Label>Pet Type:</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Enter pet type"
                    onChange={(e) => setPetType(e.target.value)}
                    value={petType}
                    className={emptyFields.includes('petType') ? 'error' : ''}
                />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formPicture">
                <Form.Label>Picture:</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Enter picture URL"
                    onChange={(e) => setPicture(e.target.value)}
                    value={picture}
                    className={emptyFields.includes('picture') ? 'error' : ''}
                />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formDesc">
                <Form.Label>Description:</Form.Label>
                <Form.Control
                    type="text"
                    onChange={(e) => setDesc(e.target.value)}
                    value={desc}
                    className={emptyFields.includes('desc') ? 'error' : ''}
                    style={{ height: '140px' }}
                />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formCost">
                <Form.Label>Cost:</Form.Label>
                <Form.Select
                    onChange={(e) => setCost(e.target.value)}
                    value={cost}
                    className={emptyFields.includes('cost') ? 'error' : ''}
                >
                    <option value="" disabled>Select</option>
                    <option value="10">$10 per month (Tier One)</option>
                    <option value="50">$50 per month (Tier Two)</option>
                    <option value="100">$100 per month (Tier Three)</option>
                </Form.Select>
            </Form.Group>




            <Button variant="primary" type="submit">
                Add Pet
            </Button>

            {error && <div className="error mt-3">{error}</div>}
        </Form>

    )
}

export default PetForm