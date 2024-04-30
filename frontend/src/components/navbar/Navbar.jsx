import "./../../../src/index.css"
import "./Navbar.css"
import logo from "../../assets/todos-logo-dark.png"
import { useRecoilState } from "recoil"
import { clickedStateAtom } from "../../atoms/atoms"
import { Link } from 'react-router-dom'

export function Navbar() {
  const [clicked, setClicked] = useRecoilState(clickedStateAtom);

  const handleClick = () => {
    setClicked(!clicked);
  }

    return (
      <>
        <div className="navbar">
          <div className="h-flex">
           <Link to="/">
           <img className="logo" src={logo} alt="Logo" />
           </Link>
          </div>

          <div>
          <ul className={`h-flex nav-links-container ${clicked ? "show" : ""}`}>
               <li><Link to="/">Home</Link></li>
               <li><Link to="/addTodo">Add Todo</Link></li>
               <li><Link to="/about">About Us</Link></li>
               <li><Link to="/login">Login</Link></li>
               <li><Link to="/signup">
                      <button className="signup-button">Sign Up</button>
                   </Link>
                </li>
            </ul>
          </div>

          <div className="mobile">
            <i id="bar" className={clicked ? "fa-solid fa-xmark" : "fa-solid fa-bars"} onClick={handleClick}></i>
          </div>
        </div>
      </>
    )
   
}