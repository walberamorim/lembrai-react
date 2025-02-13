import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Cadastro from './Componentes/Cadastro/Cadastro';
import Intro from './Componentes/Intro/Intro';
import Card from './Componentes/Login/Card';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Intro />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/login" element={<Card />} />
      </Routes>
    </Router>
  );
}

export default App;
