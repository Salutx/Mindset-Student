import React from 'react';
import VerticalMenu from '../../components/VerticalMenu';
import TitleSection from '../../components/TitleSection';
import * as C from "./styles.js";
import * as G from "../../styles/global"
import Header from '../../components/Header';
import './styles.css'

const Inicio = () => {
	return (
		<G.Content>
			<VerticalMenu />
			<G.Main>
				<Header />
				<G.Section>
					<div className="grid-layout">
						<div className="welcome-area section">
							<h1>Welcome back,</h1>
							<p>25 de Setembro de 2022</p>
						</div>
						
						<div className="gadgets-area">
							
							<div className='gadgets-container'>
								<div className='gadgets-icon'>
									<i className="ri-user-location-line"></i>
								</div>
								<div className='gadgets-main'>
									<h1>Bimestral</h1>
									<p id='frequencia-counter' className='counter'>98,8%</p>
									<p id='frequencia-priority'className='priority normal'>Controlado</p>
								</div>
							</div>

							<div className='gadgets-container'>
								<div className='gadgets-icon'>
									<i className="ri-line-chart-line"></i>
								</div>
								<div className='gadgets-main'>
									<h1>Ocorrências</h1>
									<p id='frequencia-counter' className='counter'>0</p>
									<p id='frequencia-priority' className='priority normal'>Controlado</p>
								</div>
							</div>
						</div>

						<div className="tasks-area section">
							<TitleSection 
								title="Avaliações Previstas" 
								icon="ri-file-list-3-line" 
								navigateTo="tarefas"
							/>
						</div>

						<div className="teams-area section">
							<TitleSection 
								title="Equipes" 
								icon="ri-team-line" 
								navigateTo="equipes"
							/>
						</div>

						<div className="user-area section">4</div>
						
					</div>
                </G.Section>
			</G.Main>
		</G.Content>

	)
}
	
export default Inicio;