import React from "react";
import "./Signup.css"
import "./../../../src/index.css"

export function Signup () {
    return (
        <div className="signup">
           <div className="signup-container v-flex card">
                <div> <h1>Sign Up</h1> </div>
                <input type="email" name="email" placeholder="Enter your e-mail" />

                <input type="usename" name="usename" placeholder="Enter your Username" />

                <input type="password" name="password" placeholder="Enter your password" />

                <button className="signup-btn">Sign Up</button>
            </div>
        </div>
    )
    
}