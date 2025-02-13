import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Imagem from '../../assets/logo_lembra_ai_sm.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  font-family: 'Lato', Helvetica, sans-serif;
`;

const Card = styled.div`
  background: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  text-align: center;
  width: 100%;
  max-width: 600px;
`;

const Image = styled.img`
  width: 100%;
  border-radius: 8px 8px 0 0;
`;

const Button = styled.button`
  display: inline-block;
  margin-top: 20px;
  padding: 10px 20px;
  background: #6f42c1;
  color: white;
  text-decoration: none;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background: #4c2e85;
  }
`;

const Intro = () => {
  const navigate = useNavigate();

  return (
    <Container className="container-principal">
      <Card className="card">
        <Image src={Imagem} alt="Lembraí" className="card-img-top" />
        <div className="card-body">
          <p className="text-justify">
            Lembraí é uma aplicação web desenvolvida durante o curso de pós-graduação em Desenvolvimento Web. O objetivo da plataforma é auxiliar os usuários a se organizarem e lembrarem de tarefas e atividades rotineiras, proporcionando uma experiência personalizada.
          </p>
          <p className="text-center">
            <Button onClick={() => navigate('/cadastro')}>Começar Agora!</Button>
          </p>
        </div>
      </Card>
    </Container>
  );
};

export default Intro;
