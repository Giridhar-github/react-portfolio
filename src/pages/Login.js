import React, { useState } from "react";
import "./Login.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  FaFacebook,
  FaGoogle,
  FaTwitter,
  FaTwitterSquare,
} from "react-icons/fa";

const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const[valid, setValid]=useState(false);
  const[errorMessage, setErrorMessage]=useState(false);
  let userEmail="giridharm555@gmail.com";
  let userPassword="123456789";
  const inputEmail = (e) => {
    setEmail(e.target.value);
  };
  const inputPassword = (e) => {
    setPassword(e.target.value);
  };
const formValidate=(e)=>{
  e.preventDefault();
  if(email===userEmail && password===userPassword){
    setValid(true);
    setErrorMessage(false);
  }else{
    setValid(false);
    setErrorMessage(true);
  }

}
  return (
    <div className="login-page">
      <form className="login-container" onSubmit={formValidate}>
        <div className="login-logo">Falmengo</div>
        <hr />
        <div className="login-input">
          <div className="input-credentials">
            <label htmlFor="Email">Email Id:</label>
            <input
              type="text"
              placeholder="Enter your Email Id"
              onChange={inputEmail}
            />
          </div>
          <div className="input-credentials">
            <label htmlFor="Password">Password:</label>
            <input
              type="password"
              placeholder="Enter your password"
              onChange={inputPassword}
            />
          </div>
          <div className="input-button">
            <button type="submit">LOGIN</button>
          </div>
          {errorMessage && <div className="errorBox"><center><p><i>*Invalid Credentials*</i></p></center></div>}
        </div>
        <div className="login-options">
          <a href="">
            <FaGoogle size={20} />
          </a>
          <a href="">
            <FaTwitter size={20} />
          </a>
          <a href="">
            <FaFacebook size={20} />
          </a>
        </div>
      </form>
    </div>
  );
};

export default Login;
