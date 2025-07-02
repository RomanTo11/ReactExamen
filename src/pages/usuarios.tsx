import React from 'react';
import { Container, Table } from 'react-bootstrap';

const Usuarios: React.FC = () => {
  return (
    <Container className="mt-4">
      <h2>Usuarios Registrados</h2>
      <Table striped bordered hover responsive className="mt-3">
        <thead>
          <tr>
            <th>#</th>
            <th>Nombre</th>
            <th>Correo</th>
            <th>Rol</th>
          </tr>
        </thead>
        <tbody>
          {/* Simulación temporal */}
          <tr>
            <td>1</td>
            <td>Juan Pérez</td>
            <td>juan@example.com</td>
            <td>Administrador</td>
          </tr>
        </tbody>
      </Table>
    </Container>
  );
};

export default Usuarios;
