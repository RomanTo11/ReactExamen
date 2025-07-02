import React from 'react';
import { Row, Col, Card } from 'react-bootstrap';

const CardGroupApp: React.FC = () => {
  const data = [
    {
      title: 'Usuarios',
      text: 'Gestiona el listado de usuarios registrados.',
    },
    {
      title: 'Cálculo de Sueldos',
      text: 'Calcula el sueldo neto de cada empleado.',
    },
    {
      title: 'Registro Rápido',
      text: 'Registra nuevos usuarios fácilmente.',
    }
  ];

  return (
    <Row className="mt-4">
      {data.map((item, index) => (
        <Col md={4} key={index}>
          <Card className="mb-3">
            <Card.Body>
              <Card.Title>{item.title}</Card.Title>
              <Card.Text>{item.text}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default CardGroupApp;
