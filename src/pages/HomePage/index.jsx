import React, { useContext } from "react";
import { AuthContext } from "../../contexts/auth";
import { BsFillPeopleFill, BsFillHouseDoorFill, BsBoxArrowRight, BsFillBoxFill } from "react-icons/bs";

function HomePage(){
    const {logout} = useContext(AuthContext) 

    function handleLogout() {
        logout()
    }

    const {grupo} = useContext(AuthContext) 

    function handleGrupo() {
        grupo()
    }

    const {loja} = useContext(AuthContext) 

    function handleLoja() {
        loja()
    }

    const {cadastrogrupo} = useContext(AuthContext) 

    function handleCadastroGrupo(){
        cadastrogrupo()
    }

    const {cadastroloja} = useContext(AuthContext) 

    function handleCadastroLoja(){
        cadastroloja()
    }
    
    const {cadastroproduto} = useContext(AuthContext)

    function handleCadastroProduto(){
        cadastroproduto()
    }

    return(
        <div>
            <div className="nav navbar bg-light ms-2">
                <h3>Controle de Licenças</h3>
                <button onClick={handleLogout} className="me-2 btn btn-danger">Sair <BsBoxArrowRight/></button>
            </div>
            <div className="w-100 vh-100">
                <div className="row align-items-start text-center text-uppercase">
                    <div className="col-sm-2">
                        <div className="list-group">
                            <button onClick={handleCadastroGrupo} className="list-group-item list-group-item-secondary"><BsFillPeopleFill/> Cadastrar Grupo</button>
                            <button onClick={handleCadastroLoja} className="list-group-item list-group-item-secondary"><BsFillHouseDoorFill/> Cadastrar Loja</button>
                            <button onClick={handleCadastroProduto} className="list-group-item list-group-item-secondary"><BsFillBoxFill/> Cadastrar Produto</button>
                        </div>
                    </div>
                    <div className="col-4">
                        <button onClick={handleLoja} type="button" className="m-5 p-5 btn btn-primary">Total de Lojas</button>
                        <button onClick={handleGrupo} type="button" className="m-5 p-5 btn btn-primary">Total de Grupos</button>
                        <button type="button" className="m-5 p-5 btn btn-success">Salvar</button>
                    </div>
                </div>      
            </div>
        </div> 
    )
}

export default HomePage;