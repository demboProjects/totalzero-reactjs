import React, { useContext } from "react";
import "./styles.css";
import { AuthContext } from "../context/AuthContext"


function Header() {

    const { auth } = useContext(AuthContext);
    console.log(auth);
    return (
        <header>
            <nav>
                <a href="/login">Login</a>
                <a href="/">Home</a>
                <a href="/register">cadastre-se</a>
            </nav>
            {auth.user && <strong>seja bemvindo(a)! {auth.user?.name}</strong>}
        </header>
    )
}

export default Header;