import React, { useContext } from "react";
import { AuthContext } from "../../contexts/auth";
import { BsFillPeopleFill, BsFillHouseDoorFill, BsBoxArrowRight, BsFillBoxFill } from "react-icons/bs";

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
                                    <label htmlFor="cpf" className="form-label">CPF / CNPJ</label>
                                    <input className="form-control mb-3" type="text" name="cpf" id="cpf" />

                                    <label htmlFor="social" className="form-label">Razão Social</label>
                                    <input className="form-control mb-3" type="text" name="social" id="social" />

                                    <label htmlFor="apelido" className="form-label">Apelido / Nome Fantasia</label>
                                    <input className="form-control mb-3" type="text" name="apelido" id="apelido" />

                                    <label htmlFor="contato" className="form-label">Contato</label>
                                    <input className="form-control mb-3" type="tel" name="contato" id="contato" />

                                    <label htmlFor="endereco" className="form-label">Endereço</label>
                                    <input className="form-control mb-3" type="text" name="endereco" id="endereco" />
                                    
                                    <div className="col-3">
                                        <label htmlFor="uf" className="form-label">UF</label>
                                        <input className="form-control mb-3" type="text" name="uf" id="uf" />                                    
                                    </div>
                                </div>    
                                <div className="col-6">
                                    <label htmlFor="licenca" className="form-label">Licença</label>
                                    <input className="form-control mb-3" type="text" name="licenca" id="licenca" />

                                    <label htmlFor="email" className="form-label">Email</label>
                                    <input className="form-control mb-3" type="email" name="email" id="email" />

                                    <label htmlFor="tel" className="form-label">Telefone Contato</label>
                                    <input className="form-control mb-3" type="tel" name="tel" id="tel" />

                                    <label htmlFor="cep" className="form-label">CEP</label>
                                    <input className="form-control mb-3" type="text" name="cep" id="cep" />

                                    <label htmlFor="cidade" className="form-label">Cidade</label>
                                    <input className="form-control mb-3" type="text" name="cidade" id="cidade" />
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
        </div> 
    )
}

export default CadastroLojaPage;