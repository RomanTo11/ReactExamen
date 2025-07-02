import React, { useState } from 'react';
import { Container, Form, Button, Alert } from 'react-bootstrap';

const Sueldo: React.FC = () => {
  const [sueldoBruto, setSueldoBruto] = useState<number>(0);
  const [sueldoNeto, setSueldoNeto] = useState<number | null>(null);

  const calcularSueldo = () => {
    const neto = sueldoBruto * 0.85; // Simula un descuento del 15%
    setSueldoNeto(neto);
  };

  return (
    <Container className="mt-4">
      <h2>Cálculo de Sueldo Neto</h2>
      <Form className="mt-3">
        <Form.Group>
          <Form.Label>Sueldo Bruto</Form.Label>
          <Form.Control
            type="number"
            value={sueldoBruto}
            onChange={(e) => setSueldoBruto(parseFloat(e.target.value))}
          />
        </Form.Group>
        <Button className="mt-3" onClick={calcularSueldo}>Calcular</Button>
      </Form>

      {sueldoNeto !== null && (
        <Alert variant="info" className="mt-3">
          Sueldo Neto estimado: ${sueldoNeto.toFixed(2)}
        </Alert>
      )}
    </Container>
  );
};

export default Sueldo;
