import React, { useState } from "react";
import api from "../../services/api"
import "./styles.css"

/**
 *  name: String,
    email: String,
    username: String,
    password: String,
    phone: String,
 */

function Register() {

    const [usuario, setUsuario] = useState({});

    function handleForm(e) {
        e.preventDefault();
        console.log(usuario);
    }

    return (
        <div className="container">
            <form onSubmit={handleForm}>
                <h2>Cadastro de Usuários</h2>
                <div className="row">
                    <span>Nome</span>
                    <input type="text" onChange={(e) => setUsuario({ ...usuario, name: e.target.value })} ></input>
                </div>
                <div className="row">
                    <span>Email</span>
                    <input type="text" onChange={(e) => setUsuario({ ...usuario, email: e.target.value })}></input>
                </div>
                <div className="row">
                    <span>Usuario</span>
                    <input type="text" onChange={(e) => setUsuario({ ...usuario, username: e.target.value })}></input>
                </div>
                <div className="row">
                    <span>Senha</span>
                    <input type="text" onChange={(e) => setUsuario({ ...usuario, password: e.target.value })}></input>
                </div>
                <div className="row">
                    <span>Telefone</span>
                    <input type="text" onChange={(e) => setUsuario({ ...usuario, phone: e.target.value })}></input>
                </div>
                <div className="row">
                    <button>cadastrar</button>
                </div>
            </form>
        </div>
    )

}

export default Register;