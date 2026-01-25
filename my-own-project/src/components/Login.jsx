import React from "react";
import { Link } from "react-router-dom";
import "./App.css";
const Login = () => {
    return (
        <>
            <div classname="login-page">
                <h1>Login</h1>
                <input classname="input" type="text" placeholder="Email" />
                <input classname="input" type="password" placeholder="Password" />
                <button classname="button">Login</button>

            </div>

        </>
    )
}


export default Login;   