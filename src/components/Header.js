import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [btnNamereact, setBtnNameReact] = useState("Login");
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvSnrKDj1mVXJ9kyyj-ecCnJBIPl8uhMmbQ_8dohxY&s"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
          <li>Cart</li>
          <button
            className="login"
            onClick={() => {
              btnNamereact == "Login"
                ? setBtnNameReact("Logout")
                : setBtnNameReact("Login");
            }}
          >
            {btnNamereact}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
