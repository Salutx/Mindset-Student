import React from 'react';
import Logo from '../../assets/images/Logo.svg';
import AvatarExample from '../../assets/images/avatarexample.png';
import * as C from "./styles.js";

const VerticalMenu = () => {

	const userName = JSON.parse(localStorage.getItem("users_db"));
	console.log(userName[0]);

  	return (
		<C.VerticalMenu>
			<C.NavLogo>
				<img src={ Logo } alt="" />
				<p>Mindset Student</p>
			</C.NavLogo>

			<C.NavDivider></C.NavDivider>

			<C.JustifySpacebetween>
				<C.NavContainer>
					<C.NavSection>
						<C.NavHeader>Navegação</C.NavHeader>
						<C.NavMenu>
							<C.NavItem status="actived">
								<a href="#">
									<i className="ri-home-2-line"></i>
									<p>Início</p>
								</a>
							</C.NavItem>
							<C.NavItem>
								<a href="#">
									<i className="ri-file-list-3-line"></i>
									<p>Tarefas</p>
								</a>
							</C.NavItem>
							<C.NavItem>
								<a href="#">
									<i className="ri-calendar-todo-line"></i>
									<p>Agenda</p>
								</a>
							</C.NavItem>
							<C.NavItem>
								<a href="#">
									<i className="ri-pie-chart-2-line"></i>
									<p>Boletim</p>
								</a>
							</C.NavItem>

							<C.NavItem>
								<a href="#">
									<i className="ri-inbox-line"></i>
									<p>Avisos</p>
								</a>
							</C.NavItem>
						</C.NavMenu>
					</C.NavSection>

					<C.NavSection>
						<C.NavHeader>Área do Usuário</C.NavHeader>
						<C.NavMenu>
							<C.NavItem>
								<a href="#">
									<i className="ri-community-line"></i>
									<p>Organização</p>
								</a>
							</C.NavItem>
							<C.NavItem>
								<a href="#">
									<i className="ri-user-line"></i>
									<p>Perfil</p>
								</a>
							</C.NavItem>
						</C.NavMenu>
					</C.NavSection>
				</C.NavContainer>

				<C.NavUser>
					<img src={ AvatarExample } alt="" />
					<C.UserDetails>
						<p><b>{userName[0].nome}</b></p>
						<p>Aluno</p>
					</C.UserDetails>
				</C.NavUser>
			</C.JustifySpacebetween>
		</C.VerticalMenu>
  	)
}

export default VerticalMenu;