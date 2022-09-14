import React from 'react';
import { useNavigate } from "react-router-dom";
import Button from '../../components/Button';
import useAuth from '../../hooks/useAuth';
import * as C from "./styles.js";
import { Container } from 'react-bulma-components';

const Home = () => {

  const { signout } = useAuth();
  const navigate = useNavigate();

  return (
    <Container>
      <C.Title>Home</C.Title>
      <Button Text={"Sair"} onClick={() => [signout(), navigate("/")]}>
        Sair
      </Button>
    </Container>
  )
}

export default Home;