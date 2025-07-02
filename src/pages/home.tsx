import React from 'react';
import CarouselApp from '../components/carousel';
import CardGroupApp from '../components/cardgroup';
import { Container, Alert } from 'react-bootstrap';

const Home: React.FC = () => {
  return (
    <Container>
      <div className="p-5 mb-4 bg-light rounded-3">
        <h1>Bienvenido a Mi App!</h1>
        <p>
          Aplicación de ejemplo usando Bootstrap que simula un frontend para migrar a React + Ant Design.
        </p>
      </div>

      <CarouselApp />
      <CardGroupApp />

      <Alert variant="success" className="mt-3">
        Bienvenido al sistema de usuarios y nómina.
      </Alert>
    </Container>
  );
};

export default Home;
