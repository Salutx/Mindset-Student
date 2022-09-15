import React from 'react';
import { useNavigate } from "react-router-dom";
import Button from '../../components/Button';
import Logo from '../../components/Logo';
import useAuth from '../../hooks/useAuth';
import * as C from "./styles.js";
import "./styled.css";

const Home = () => {
	
	const { signout } = useAuth();
	const navigate = useNavigate();
	
	return (
		<div className='content'>
			<div className='menu'>
				<div className='menu-logo'>
					<Logo />
				</div>

				<div className='menu-item'>
				<FontAwesomeIcon icon="fa-solid fa-house" />
				</div>
			</div>

			<C.Main>
				<C.Title>Home</C.Title>
				<Button Text={"Sair"} onClick={() => [signout(), navigate("/")]}>
			Sair
				</Button>
			</C.Main>

		</div>
		)
	}
	
	export default Home;