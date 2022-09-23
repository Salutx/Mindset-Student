import React from 'react';
import { useNavigate } from "react-router-dom";
import Button from '../../components/Button';
import VerticalMenu from '../../components/VerticalMenu';
import useAuth from '../../hooks/useAuth';
import * as C from "./styles.js";
import "./styled.css";
import Header from '../../components/Header';

const Home = () => {
	
	const { signout } = useAuth();
	const navigate = useNavigate();
	
	return (
		<div className='content'>
			
			<VerticalMenu />

			<C.Main>
				<Header />
				
				<C.Title>Home</C.Title>
				<Button Text={"Sair"} onClick={() => [signout(), navigate("/")]}>
					Sair
				</Button>
			</C.Main>

		</div>
		)
	}
	
	export default Home;