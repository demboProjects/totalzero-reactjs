import React, { useState, useContext } from "react";
import "../Register/styles.css";
import { AuthContext } from "../context/AuthContext";
import { useHistory } from "react-router";



export default function Login() {
    const history = useHistory();
    const contexto = useContext(AuthContext);
    const { authentication } = contexto;


    const [usuario, setUsuario] = useState({});

    function handleChangeLogin(e) {
        setUsuario({
            ...usuario, [e.target.name]: e.target.value
        });
    }

    function handleFormLogin(e) {
        e.preventDefault();

        authentication(usuario);
        history.push("/");
    }

    return (
        <div className="container">
            <form onSubmit={handleFormLogin}>
                <h2>Fazer Login</h2>
                <div className="row">
                    <span>Usuario</span>
                    <input type="text" name="username" onChange={handleChangeLogin} ></input>
                </div>
                <div className="row">
                    <span>Senha</span>
                    <input type="password" name="password" onChange={handleChangeLogin} ></input>
                </div>
                <div className="row">
                    <button>Entrar</button>
                </div>
            </form>

        </div>
    )
}
