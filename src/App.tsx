import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavbarApp from './components/navbar';
import Home from './pages/home';
import Usuarios from './pages/usuarios';
import Sueldo from './pages/Sueldo';
import Bono from './pages/bono';
import Registro from './pages/registro';

const App: React.FC = () => {
  return (
    <Router>
      <NavbarApp />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/usuarios" element={<Usuarios />} />
        <Route path="/sueldo" element={<Sueldo />} />
        <Route path="/bono" element={<Bono />} />
        <Route path="/registro" element={<Registro />} />
      </Routes>
    </Router>
  );
};

export default App;
