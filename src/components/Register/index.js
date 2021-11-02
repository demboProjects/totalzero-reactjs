import React, { useState } from "react";
import api from "../../services/api"
import "./styles.css"
import { useHistory } from "react-router-dom"

function Register() {
    const history = useHistory();

    const [usuario, setUsuario] = useState({});

    function handleChange(e) {
        setUsuario({
            ...usuario, [e.target.name]: e.target.value
        });
    }

    function handleForm(e) {
        e.preventDefault();

        api.post("/users", usuario).then(response => {
            console.log(response);
            history.push("/")
            alert("cadastro feito com sucesso");
        }).catch(error => {
            console.log(error);
            alert("Erro ao cadastrar novo usuario")
        });
    }

    return (
        <div className="container">
            <form onSubmit={handleForm}>
                <h2>Cadastro de Usuários</h2>
                <div className="row">
                    <span>Nome</span>
                    <input type="text" name="name" onChange={handleChange} ></input>
                </div>
                <div className="row">
                    <span>Email</span>
                    <input type="text" name="email" onChange={handleChange}></input>
                </div>
                <div className="row">
                    <span>Usuario</span>
                    <input type="text" name="username" onChange={handleChange}></input>
                </div>
                <div className="row">
                    <span>Senha</span>
                    <input type="password" name="password" onChange={handleChange}></input>
                </div>
                <div className="row">
                    <span>Telefone</span>
                    <input type="text" name="phone" onChange={handleChange}></input>
                </div>
                <div className="row">
                    <button>cadastrar</button>
                </div>
            </form>

        </div>
    )

}

export default Register;