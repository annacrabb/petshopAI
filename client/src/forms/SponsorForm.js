import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

const SponsorForm = () => {
  const [sponsorName, setSponsorName] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const sponsor = { sponsorName };

    const response = await fetch('http://localhost:4000/api/routes/sponsor', {
      method: 'POST',
      body: JSON.stringify(sponsor),
      headers: {
        'Content-Type': 'application/json'
      }
    });

    const json = await response.json();

    if (!response.ok) {
      setError(json.error);
    } else {
      setSponsorName('');
      setError(null);
      console.log('new sponsor added', json);
    }
  };

  return (
    <Form className="create container" onSubmit={handleSubmit}>
      <h3>Add a New Sponsor</h3>
      <Form.Group className="mb-3" controlId="formSponsorName">
        <Form.Label>Sponsor Name:</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter sponsor name"
          onChange={(e) => setSponsorName(e.target.value)}
          value={sponsorName}
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        Add Sponsor
      </Button>
      {error && <div className="error mt-3">{error}</div>}
    </Form>
  );
};

export default SponsorForm;
