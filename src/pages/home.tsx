import React from 'react';
import CarouselApp from '../components/carousel';
import CardGroupApp from '../components/cardgroup';
import { Container, Alert } from 'react-bootstrap';
import paisaje from '../assets/paisaje.webp.jpg'; // Asegúrate de que la ruta sea correcta

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
      <>url</>
      <img
        src={paisaje}
        alt="Imagen local de bienvenida"
        style={{ width: "100%", maxHeight: "400px", objectFit: "cover" }}
      />
      <CardGroupApp />

      <Alert variant="success" className="mt-3">
        Bienvenido al sistema de usuarios y nómina.
      </Alert>
    </Container>
  );
};

export default Home;
