import React from 'react'
import * as C from "./styles";
import Input from '../../components/Input';
import Button from '../../components/Button';
import { Link, useNavigate } from "react-router-dom";
import useAuth from '../../hooks/useAuth.js';
import { useState } from 'react';

const SignUp = () => {
  
    const { signin } = useAuth();
    const navigate = useNavigate();

    const [nascimento, setNascimento] = useState("");
    const [instituicao, setInstituicao] = useState("");
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [error, setError] = useState("");

    const handleLogin = () => {
        if (!email | !senha) {
            setError("Preencha todos os campos!");
            return;
        }

        const res = signin(nascimento, instituicao, email, senha);

        if (res) {
            setError(res);
            return;
        }

        navigate("/home");
    };

    return (
    <C.Container>
    <C.Label>MINDSET STUDENT</C.Label>
    <C.Content>
        <Input 
            type="email"
            placeholder="Digite seu e-mail"
            value={email}
            onChange={(e) => [setEmail(e.target.value), setError("")]}
        />

        <Input 
            type="password"
            placeholder="Digite sua senha"
            value={senha}
            onChange={(e) => [setSenha(e.target.value), setError("")]}
        />

        <C.LabelError>{ error }</C.LabelError>

        <Button Text="Entrar" onClick={handleLogin} />
    </C.Content>
</C.Container>
  )
}

export default SignUp;