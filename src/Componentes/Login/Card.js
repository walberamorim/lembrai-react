import React from 'react';
import styled from 'styled-components';
import LoginForm from './LoginForm';
import Imagem from '../../assets/logo_lembra_ai_sm.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';

const CardContainer = styled.div`
  margin: 20px;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  max-width: 400px;
  width: 100%;
`;

const CardImage = styled.img`
  width: 100%;
  border-radius: 10px;
`;

const CardTitle = styled.h5`
  font-size: 1.5rem;
  text-align: center;
  margin-top: 15px;
`;

const Card = () => {
  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="col-md-4 col-lg-3 align-self-center">
        <CardContainer className="card mx-auto">
          <CardImage src={Imagem} alt="Logo Lembraí" />
          <CardTitle>Entrar</CardTitle>
          <LoginForm />
        </CardContainer>
      </div>
    </div>
  );
};

export default Card;
