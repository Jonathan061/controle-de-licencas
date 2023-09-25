import React, { useState, useEffect, createContext} from "react";

import { useNavigate } from "react-router-dom";

export const AuthContext = createContext();

export function AuthProvider ({children}){
    const navigate = useNavigate()
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(function(){
        const recoveredUser = localStorage.getItem("user")
        if(recoveredUser){
            setUser(JSON.parse(recoveredUser))
        }
        setLoading(false)
    },[])

    function login(user, password){
        console.log("login auth", { user, password })
        const loggedUser = {
            id: "123",
            user,
        }
        
        localStorage.setItem("user", JSON.stringify(loggedUser))

        if(password === "secret"){
            setUser(loggedUser)
            navigate("/")
        }
    }

    function logout(){
        localStorage.removeItem("user")
        setUser(null)
        navigate("/login")
    }
    
    function loja(){
        navigate("/lojas")
    }
    
    function grupo(){
        navigate("/grupos")
    }

    function cadastrogrupo(){
        navigate("/cadastrogrupos")
    }

    function cadastroloja(){
        navigate("/cadastrolojas")
    }

    function cancel(){
        navigate("/")
    }

    function save(){
        navigate("/")
    }

    return(
        <AuthContext.Provider value={{authenticated: !!user, user, loading, login, logout, loja, grupo, cadastrogrupo, cadastroloja, cancel, save}}>
            {children}
        </AuthContext.Provider>
    )
}