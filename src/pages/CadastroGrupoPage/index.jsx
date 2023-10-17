import React, { useContext } from "react";
import { AuthContext } from "../../contexts/auth";
import { BsFillPeopleFill, BsFillHouseDoorFill, BsBoxArrowRight, BsFillBoxFill } from "react-icons/bs";

function CadastroGrupoPage(){
    const {logout} = useContext(AuthContext) 

    function handleLogout() {
        logout()
    }
    
    const {cancel} = useContext(AuthContext)

    function handleCancel(){
        cancel()
    }
    
    const {save} = useContext(AuthContext)

    function handleSave(){
        save()
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
                <div className="row align-items-start">
                    <div className="col-sm-2">
                        <div className="list-group">
                            <button onClick={handleCadastroGrupo} className="list-group-item list-group-item-secondary"><BsFillPeopleFill/> Cadastrar Grupo</button>
                            <button onClick={handleCadastroLoja} className="list-group-item list-group-item-secondary"><BsFillHouseDoorFill/> Cadastrar Loja</button>
                            <button onClick={handleCadastroProduto} className="list-group-item list-group-item-secondary"><BsFillBoxFill/> Cadastrar Produto</button>
                        </div>
                    </div>
                    <div className="col-3 m-3 bg-black text-white rounded p-3">
                        <h4>Cadastro de Grupo de Lojas</h4>
                        <label htmlFor="grupo" className="form-label">ID do Grupo</label>
                        <input className="form-control mb-3" type="text" name="grupo" id="grupo" />
                        <label htmlFor="descgrupo" className="form-label">Descrição do Grupo de Lojas</label>
                        <textarea className="form-control" rows={3} name="descgrupo" id="descgrupo" />
                        <div className="text-center">
                            <button onClick={handleSave} type="button" className="btn m-3 btn-success">Salvar</button>
                            <button onClick={handleCancel} type="button" className="btn m-3 btn-danger">Cancelar</button>
                        </div>               
                    </div>
                </div>      
            </div>
        </div> 
    )
}

export default CadastroGrupoPage;