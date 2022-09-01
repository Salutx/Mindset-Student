import './styles.js';
import * as C from "./styles";
import Input from '../../components/Input';
import Button from '../../components/Button';
import { Link, useNavigate } from "react-router-dom";
import useAuth from '../../hooks/useAuth.js';
import { useState } from 'react';

const Signin = () => {

    const { signin } = useAuth();
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [error, setError] = useState("");

    const handleLogin = () => {
        if (!email | !senha) {
            setError("Preencha todos os campos!");
            return;
        }

        const res = signin(email, senha);

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
                <C.Line>
                    <Input 
                        type="email"
                        placeholder="Nascimento"
                        value={email}
                        onChange={(e) => [setEmail(e.target.value), setError("")]}
                    />

                    <Input 
                        type="password"
                        placeholder="Cód. Instituição"
                        value={senha}
                        onChange={(e) => [setSenha(e.target.value), setError("")]}
                    />
                </C.Line>

                <C.LabelError>{ error }</C.LabelError>

                <Button Text="Continuar" onClick={handleLogin} />
            </C.Content>
        </C.Container>
    )
}

export default Signin;