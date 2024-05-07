import React from "react";
import "./Login.css"
import "./../../../src/index.css"
import { emailAtom, passwordAtom } from "../../atoms/atoms";
import { useRecoilState } from 'recoil'
import axios from "axios";
import { useNavigate } from "react-router-dom";

export function Login () {
    const [email, setEmail] = useRecoilState(emailAtom)
    const [password, setPassword] = useRecoilState(passwordAtom)
    const navigate = useNavigate()

    const handleLogin = async (e) => {
        e.preventDefault();
        await axios.post("http://localhost:3000/api/v1/signin", {
            email, password
        })
        .then(function(response) {
            if(response.data._id) {
                setEmail('');
                setPassword('');
                navigate('/addTodo')
            }
        })
        .catch(function(error) {
            alert(error.response.data.msg)
        })
    }

    return (
        <div className="login">
           <div className="login-container v-flex card">
                <div> <h1>Login</h1> </div>
                <input type="email" name="email" placeholder="Enter your e-mail" value={email} onChange={(e) => {setEmail(e.target.value)}}/>

                <input type="password" name="password" placeholder="Enter your password" value={password} onChange={(e) => {setPassword(e.target.value)}}/>

                <button className="login-btn" onClick={handleLogin}>Login</button>
            </div>
        </div>
    )
    
}