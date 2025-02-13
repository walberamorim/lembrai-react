import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Imagem from '../../assets/logo_lembra_ai_sm.jpg';

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
  max-width: 350px;
`;

const InputField = ({ label, type, name, value, onChange }) => (
  <div className="form-group mt-3">
    <label>{label}</label>
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      className="form-control"
      required
    />
    <span className="mensagem-erro"></span>
  </div>
);

const Button = styled.button`
  width: 100%;
  padding: 10px;
  background: #6f42c1;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background: #4c2e85;
  }
`;

const Cadastro = () => {
  const [form, setForm] = useState({
    nome: "",
    aniversario: "",
    email: "",
    usuario: "",
    senha: "",
    repetirSenha: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.senha !== form.repetirSenha) {
      alert("As senhas não coincidem!");
      return;
    }
    console.log("Dados enviados", form);
  };
  const navigate = useNavigate();
  return (
    
    <Container className="container-principal">
      <Card className="card">
        <img src={Imagem} alt="Cadastro" className="card-img-top" />
        <div className="card-body">
          <h5 className="card-title">Cadastro Inicial</h5>
          <form onSubmit={handleSubmit}>
            <InputField label="Nome e Sobrenome" type="text" name="nome" value={form.nome} onChange={handleChange} />
            <InputField label="Nascimento" type="date" name="aniversario" value={form.aniversario} onChange={handleChange} />
            <InputField label="E-mail" type="email" name="email" value={form.email} onChange={handleChange} />
            <InputField label="Usuário" type="text" name="usuario" value={form.usuario} onChange={handleChange} />
            <InputField label="Senha" type="password" name="senha" value={form.senha} onChange={handleChange} />
            <InputField label="Repita a Senha" type="password" name="repetirSenha" value={form.repetirSenha} onChange={handleChange} />
            <Button type="submit" onClick={() => navigate('/login')} className="btn btn-primary mt-3">Cadastrar</Button>
          </form>
          <p className="text-center mt-3">
            Já possui cadastro? <a onClick={() => navigate('/login')}>Entrar</a>
          </p>
        </div>
      </Card>
    </Container>
  );
};

export default Cadastro;
