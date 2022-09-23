import { Fragment } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import Inicio from "../pages/Inicio";
import Signin from "../pages/Signin";
import Cadastrar from "../pages/Cadastrar";

const Private = ({ Item }) => {
    const { signed } = useAuth();
    return signed > 0 ? <Item /> : <Signin />;
}

const RoutesApp = () => {
    return (
        <BrowserRouter>
            <Fragment>
                <Routes>
                    <Route exact path="/inicio"        element={<Private Item={Inicio} />} />
                    <Route path="/"                 element={<Signin />} />
                    <Route exact path="/cadastrar"  element={<Cadastrar />} />
                    <Route path="/"                 element={<Signin />} />
                </Routes>
            </Fragment>
        </BrowserRouter>
    )
}

export default RoutesApp;