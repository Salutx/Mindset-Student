import { useNavigate } from "react-router-dom";
import useAuth from '../../hooks/useAuth';
import * as C from "./styles.js";

const Navbar = () => {

    function urlNameCheck () {
        const valor = window.location.href.split('/')[3].replace(/[&\/\\#, +()$~%.'":*?<>{}]/g, '');
        return valor.charAt(0).toUpperCase() + valor.slice(1);
    }

    const { signout } = useAuth();
	const navigate = useNavigate();

    return (
        <C.Header>
            <C.Container>
                <C.Navbar>
                    <C.Breadcrumb>
                        <p>Você está em:</p>
                        <p>{urlNameCheck()}</p>
                    </C.Breadcrumb>
                    
                    <C.SearchContainer>
                        <C.NavbarSearch>
                            <a>
                                <i className="ri-search-2-line"></i>
                            </a>
                            <input type="text" placeholder="Pesquisar por nome, grupo, assunto..."/>
                            
                            <a>
                                <i className="ri-arrow-down-s-line"></i>
                            </a>
                        </C.NavbarSearch>
                        <C.NavbarTools>
                            <a>
                                <i className="ri-notification-2-line"></i>
                            </a>
                            <a>
                                <i className="ri-moon-line"></i>
                            </a>
                        </C.NavbarTools>
                    </C.SearchContainer>

                    <C.NavbarLogout>
                        <a onClick={() => [signout(), navigate("/")]}>
                            Sair
                            <i className="ri-arrow-right-line"></i>
                        </a>
                    </C.NavbarLogout>
                </C.Navbar>
            </C.Container>
        </C.Header>
    )
}

export default Navbar;