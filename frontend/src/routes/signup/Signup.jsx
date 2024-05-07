import "./Signup.css"
import "./../../../src/index.css"
import { Link, useNavigate } from 'react-router-dom'
import { useRecoilState } from "recoil";
import { emailAtom, passwordAtom, usernameAtom } from "../../atoms/atoms.jsx";
import axios from "axios";

export function Signup () {
    const [email, setEmail] = useRecoilState(emailAtom);
    const [username, setUsername] = useRecoilState(usernameAtom)
    const [password, setPassword] = useRecoilState(passwordAtom);
    const navigate = useNavigate();

    const handleSignUp = async (e) => {
        e.preventDefault();
        await axios.post("http://localhost:3000/api/v1/register", {
            email, username, password
        })
        .then(function(response) {
            // console.log(response)
            if(response.data.msg === "user already exists") {
                alert(response.data.msg)
                navigate("/login")
            }
            alert(response.data.msg)
            setEmail("");
            setUsername("");
            setPassword("");
            navigate("/login")
        })
        .catch(function(error) {
            console.log('Error while Signin. Please Try Again', error)
        })
    }

    return (
        <div className="signup">
           <div className="signup-container v-flex card">
                <div> <h1>Sign Up</h1> </div>
                <input type="email" name="email" placeholder="Enter your e-mail" value={email} onChange={(e) => {setEmail(e.target.value)}}/>

                <input type="username" name="usename" placeholder="Enter your Username" value={username} onChange={(e) => {setUsername(e.target.value)}}/>

                <input type="password" name="password" placeholder="Enter your password" value={password} onChange={(e) => {setPassword(e.target.value)}}/>

                <button className="signup-btn" onClick={handleSignUp}>Sign Up</button>

                <div>
                    Already have an account? <span><Link to="/login">Login</Link></span>
                </div>
            </div>
        </div>
    )
    
}