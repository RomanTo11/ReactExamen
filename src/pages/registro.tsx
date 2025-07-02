import React, { useState } from 'react';
import { Container, Form, Button, Alert } from 'react-bootstrap';

const Registro: React.FC = () => {
  const [nombre, setNombre] = useState('');
  const [correo, setCorreo] = useState('');
  const [rol, setRol] = useState('');
  const [registrado, setRegistrado] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí luego se conectaría con API para guardar
    setRegistrado(true);
  };

  return (
    <Container className="mt-4">
      <h2>Registro de Nuevo Usuario</h2>
      <Form onSubmit={handleSubmit} className="mt-3">
        <Form.Group className="mb-3">
          <Form.Label>Nombre</Form.Label>
          <Form.Control
            type="text"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Correo</Form.Label>
          <Form.Control
            type="email"
            value={correo}
            onChange={(e) => setCorreo(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Rol</Form.Label>
          <Form.Control
            type="text"
            value={rol}
            onChange={(e) => setRol(e.target.value)}
            required
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Registrar
        </Button>
      </Form>

      {registrado && (
        <Alert variant="success" className="mt-3">
          ¡Usuario registrado correctamente!
        </Alert>
      )}
    </Container>
  );
};

export default Registro;
