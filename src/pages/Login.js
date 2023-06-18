import React from "react";
import "./Login.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FaFacebook, FaGoogle, FaTwitter, FaTwitterSquare } from "react-icons/fa";

const Login = () => {
  return (
    <div className="login-page">
      <div className="login-container">
        <div className="login-logo">Falmengo</div>
        <hr />
        <div className="login-input">
          <div className="input-credentials">
            <label htmlFor="Email">Email Id:</label>
            <input type="text" placeholder="Enter your Email Id" />
          </div>
          <div className="input-credentials">
            <label htmlFor="Password">Password:</label>
            <input type="password" placeholder="Enter your password" />
          </div>
          <div className="input-button">
            <button>LOGIN</button>
          </div>
        </div>
        <div className="login-options">
            <a href=""><FaGoogle size={20} /></a>
            <a href=""><FaTwitter size={20} /></a>
            <a href=""><FaFacebook size={20} /></a>
        </div>
      </div>
    </div>
  );
};

export default Login;
