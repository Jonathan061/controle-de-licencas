import React, { useContext } from "react";
import { AuthContext } from "../../contexts/auth";

function CadastroLojaPage(){
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
    
    return(
        <div>
            <div className="nav navbar bg-light ms-2">
                <h3>Controle de Licenças</h3>
                <button onClick={handleLogout} className="me-2 btn btn-danger">Sair</button>
            </div>
            <div className="w-100 vh-100">
                <div className="row align-items-start">
                    <div className="col-sm-2">
                        <div className="list-group">
                            <button onClick={handleCadastroGrupo} className="list-group-item list-group-item-secondary">Cadastrar Grupo</button>
                            <button onClick={handleCadastroLoja} className="list-group-item list-group-item-secondary">Cadastrar Loja</button>
                        </div>
                    </div>
                    <div className="col-5 m-3 bg-black text-white rounded p-3">
                        <h4>Cadastro de Grupo de Lojas</h4>
                        <div className="row">
                            <div className="col-5">
                                <label htmlFor="grupo" className="form-label">Grupo de Loja</label>
                                <select className="form-select mb-3" name="grupo" id="grupo">
                                    <option value="1">Grupo 1</option>
                                    <option value="2">Grupo 2</option>
                                    <option value="3">Grupo 3</option>
                                </select>    
                            </div>
                            <div className="row">
                                <div className="col-6">
                                    <label htmlFor="descgrupo" className="form-label">CPF / CNPJ</label>
                                    <input className="form-control mb-3" type="text-area" name="descgrupo" id="descgrupo" />

                                    <label htmlFor="descgrupo" className="form-label">Razão Social</label>
                                    <input className="form-control mb-3" type="text-area" name="descgrupo" id="descgrupo" />

                                    <label htmlFor="descgrupo" className="form-label">Apelido / Nome Fantasia</label>
                                    <input className="form-control mb-3" type="text-area" name="descgrupo" id="descgrupo" />

                                    <label htmlFor="descgrupo" className="form-label">Contato</label>
                                    <input className="form-control mb-3" type="text-area" name="descgrupo" id="descgrupo" />

                                    <label htmlFor="descgrupo" className="form-label">Endereço</label>
                                    <input className="form-control mb-3" type="text-area" name="descgrupo" id="descgrupo" />

                                    <label htmlFor="descgrupo" className="form-label">UF</label>
                                    <input className="form-control mb-3" type="text-area" name="descgrupo" id="descgrupo" />
                                </div>    
                                <div className="col-6">
                                    <label htmlFor="descgrupo" className="form-label">Licença</label>
                                    <input className="form-control mb-3" type="text-area" name="descgrupo" id="descgrupo" />

                                    <label htmlFor="descgrupo" className="form-label">Email</label>
                                    <input className="form-control mb-3" type="text-area" name="descgrupo" id="descgrupo" />

                                    <label htmlFor="descgrupo" className="form-label">Telefone Contato</label>
                                    <input className="form-control mb-3" type="text-area" name="descgrupo" id="descgrupo" />

                                    <label htmlFor="descgrupo" className="form-label">Contato</label>
                                    <input className="form-control mb-3" type="text-area" name="descgrupo" id="descgrupo" />

                                    <label htmlFor="descgrupo" className="form-label">CEP</label>
                                    <input className="form-control mb-3" type="text-area" name="descgrupo" id="descgrupo" />

                                    <label htmlFor="descgrupo" className="form-label">Cidade</label>
                                    <input className="form-control mb-3" type="text-area" name="descgrupo" id="descgrupo" />
                                </div>
                            </div>
                        </div>
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

export default CadastroLojaPage;