import React, { useEffect, useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext"
import "./styles.css"
import api from "../../services/api"

export default function Header() {

    const context = useContext(AuthContext);
    const [usuarios, setUsuarios] = useState([]);
    const { auth } = context;

    useEffect(() => {
        console.log(auth.token);
        if (auth.token) {
            api.get("/users", {
                headers: {
                    Authorization: `Bearer ${auth.token}`
                }
            }
            ).then(response => {
                setUsuarios(response.data);
            });

        }
    }, [auth.token]);
    return (
        <div className="container">
            <table>
                <thead>
                    <tr>
                        <th>Email</th>
                        <th>Nome</th>
                        <th>Usuário</th>
                        <th>Telefone</th>
                    </tr>
                </thead>
                <tbody>
                    {usuarios.map((usuario) => {
                        return (
                            <tr key={usuario._id}>
                                <td>{usuario.email}</td>
                                <td>{usuario.name}</td>
                                <td>{usuario.username}</td>
                                <td>{usuario.phone}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    )
}