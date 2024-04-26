import "./../../../src/index.css"
import "./Navbar.css"
import logo from "../../assets/todos-logo-dark.png"
import { useRecoilState } from "recoil"
import { clickedStateAtom } from "../../atoms/atoms"

export function Navbar() {
  const [clicked, setClicked] = useRecoilState(clickedStateAtom);

  const handleClick = () => {
    setClicked(!clicked);
  }

    return (
      <>
        <div className="navbar">
          <div className="h-flex">
           <a href="">
           <img className="logo" src={logo} alt="Logo" />
           </a>
          </div>

          <div>
          <ul className={`h-flex nav-links-container ${clicked ? "show" : ""}`}>
               <li><a href="">Home</a></li>
               <li><a href="">About Us</a></li>
               <li><a href="">Login</a></li>
               <li><a href="">
                      <button className="signup-btn">Sign Up</button>
                   </a>
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