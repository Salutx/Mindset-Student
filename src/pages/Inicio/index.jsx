import React from 'react';
import VerticalMenu from '../../components/VerticalMenu';
import * as C from "./styles.js";
import * as G from "../../styles/global"
import Header from '../../components/Header';

const Inicio = () => {
	
	return (

		<G.Content>
			<VerticalMenu />
			<G.Main>
				<Header />
				<G.Section>
                    <p>Início</p>
                </G.Section>
			</G.Main>
		</G.Content>

	)
}
	
export default Inicio;