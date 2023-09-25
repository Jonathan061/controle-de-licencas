import { useState, useContext} from "react"
import { AuthContext } from "../../contexts/auth"

function LoginPage() {
    const {login} = useContext(AuthContext)
    const [user, setUser] = useState("")
    const [password, setPassword] = useState("")

    function handleSubmit(event){
        event.preventDefault()
        login(user, password)
    }

    return (
        <div className="text-center login template d-flex justify-content-center align-items-center w-100 vh-100">
            <div className="bg-body-tertiary shadow p-5 rounded">
                <form onSubmit={handleSubmit}>
                    <h3 className="mb-4">Login</h3>
                    <div className="mb-3">
                        <input className="form-control" placeholder="Usuário" type="text" name="user" id="user" onChange={(event) => setUser(event.target.value)}/>
                    </div>
                    <div className="mb-3">
                        <input className="form-control" placeholder="Senha" type="password" name="password" id="password" onChange={(event) => setPassword(event.target.value)}/>
                    </div>
                    <div>
                        <button type="submit" className="btn btn-success">Entrar</button>
                    </div>
                </form>
            </div>                          
        </div>
    )
}

export default LoginPage