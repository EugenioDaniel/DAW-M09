// ContactForm.js

import React from 'react';
import { Form, Button, Col } from 'react-bootstrap';

const ContactForm = () => {
  return (
    <Form>

      <Form.Group as={Col} controlId="formGridEmail">
        <Form.Label>Correu electrònic</Form.Label>
        <Form.Control type="email" placeholder="Introdueix el teu correu" />
      </Form.Group>

      <Form.Group as={Col} controlId="formGridPassword">
        <Form.Label>Contrassenya</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>


      <Form.Group controlId="formGridAddress1">
        <Form.Label>Adreça</Form.Label>
        <Form.Control placeholder="Carrer, 12" />
      </Form.Group>

      <Form.Group controlId="formGridAddress2">
        <Form.Label>2a línia adreça</Form.Label>
        <Form.Control placeholder="Número de porta" />
      </Form.Group>


      <Form.Group as={Col} controlId="formGridCity">
        <Form.Label>Ciutat</Form.Label>
        <Form.Control />
      </Form.Group>

      <Form.Group as={Col} controlId="formGridState">
        <Form.Label>Província</Form.Label>
        <Form.Control as="select">
          <option>Choose...</option>
          <option>...</option>
        </Form.Control>
      </Form.Group>

      <Form.Group as={Col} controlId="formGridZip">
        <Form.Label>Codi postal</Form.Label>
        <Form.Control />
      </Form.Group>


      <Button variant="primary" type="submit">
        Enviar
      </Button>
    </Form>
  );
};

export default ContactForm;