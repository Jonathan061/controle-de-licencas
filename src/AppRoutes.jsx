import React, { useContext } from "react";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import GrupoPage from "./pages/GrupoPage";
import LojaPage from "./pages/LojaPage";
import CadastroGrupoPage from "./pages/CadastroGrupoPage";
import CadastroLojaPage from "./pages/CadastroLojaPage";
import { AuthProvider, AuthContext } from "./contexts/auth";
import {
    BrowserRouter as Router,
    Route,
    Routes,
    Navigate,
} from "react-router-dom";

    function AppRoutes(){
        function Private({children}){
            const { authenticated, loading } = useContext(AuthContext)

            if(loading){
                return <div className="loading">Carregando...</div>
            }

            if(!authenticated){
                return<Navigate to="/login"/> &&
                <div className="error text-danger">Usuário ou senha incorretos.</div>
            }
        return children
    }

    return(
        <Router>
            <AuthProvider>
                <Routes>
                    <Route exact path="/login" element={<LoginPage/>} />
                    <Route exact path="/" element={<Private><HomePage/></Private>} />
                    <Route exact path="/grupos" element={<Private><GrupoPage/></Private>} />
                    <Route exact path="/lojas" element={<Private><LojaPage/></Private>} />
                    <Route exact path="/cadastrogrupos" element={<Private><CadastroGrupoPage/></Private>} />    
                    <Route exact path="/cadastrolojas" element={<Private><CadastroLojaPage/></Private>} />
                </Routes>
            </AuthProvider>
        </Router>
    )
} 

export default AppRoutes;