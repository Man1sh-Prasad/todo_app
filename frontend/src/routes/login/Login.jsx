import React from "react";
import "./Login.css"
import "./../../../src/index.css"

export function Login () {
    return (
        <div className="login">
           <div className="login-container v-flex card">
                <div> <h1>Login</h1> </div>
                <input type="email" name="email" placeholder="Enter your e-mail" />

                <input type="password" name="password" placeholder="Enter your password" />

                <button className="login-btn">Login</button>
            </div>
        </div>
    )
    
}