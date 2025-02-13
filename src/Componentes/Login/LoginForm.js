import React, { useState } from 'react';
import styled from 'styled-components';
import Input from './Inputs';

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const SubmitButton = styled.button`
  padding: 10px;
  background-color: #007bff;
  border: none;
  border-radius: 5px;
  color: white;
  cursor: pointer;
  font-size: 1rem;
`;

const LoginForm = () => {
  const [usuario, setUsuario] = useState('');
  const [senha, setSenha] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Adicionar lógica de login aqui
    console.log('Usuário:', usuario);
    console.log('Senha:', senha);
  };

  return (
    <FormContainer onSubmit={handleSubmit}>
      <Input
        id="campoUsuario"
        label="Usuário"
        type="text"
        value={usuario}
        onChange={(e) => setUsuario(e.target.value)}
        required
      />
      <Input
        id="campoSenha"
        label="Senha"
        type="password"
        value={senha}
        onChange={(e) => setSenha(e.target.value)}
        required
      />
      <SubmitButton type="submit">Entrar</SubmitButton>
    </FormContainer>
  );
};

export default LoginForm;
