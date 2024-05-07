import "./../../../src/index.css"
import "./Navbar.css"
import logo from "../../assets/todos-logo-dark.png"
import { useRecoilState } from "recoil"
import { clickedStateAtom } from "../../atoms/atoms"
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux"
import { authActions } from "../../store/store"

export function Navbar() {
  const isLoggedIn = useSelector((state) => state.isLoggedIn);
  
  const [clicked, setClicked] = useRecoilState(clickedStateAtom);
  const dispatch = useDispatch();

  const handleClick = () => {
    setClicked(!clicked);
  }

  const hanldeLogout = () => {
    sessionStorage.clear("id");
    dispatch(authActions.logout());
    handleClick()
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
               <li><Link to="/" onClick={handleClick}>Home</Link></li>
               <li><Link to="/addTodo" onClick={handleClick}>Add Todo</Link></li>
               <li><Link to="/about" onClick={handleClick}>About Us</Link></li>
               { !isLoggedIn && <>
                <li><Link to="/login" onClick={handleClick}>Login</Link></li>
                <li><Link to="/signup" onClick={handleClick}>
                      <button className="signup-button">Sign Up</button>
                   </Link>
                </li>
               </>} 
               { isLoggedIn && <li>
                      <button className="signup-button" onClick={hanldeLogout}>Log Out</button>
                </li>}
            </ul>
          </div>

          <div className="mobile">
            <i id="bar" className={clicked ? "fa-solid fa-xmark" : "fa-solid fa-bars"} onClick={handleClick}></i>
          </div>
        </div>
      </>
    )
   
}