import React, { useContext, useState } from "react";
import { FaUser } from "react-icons/fa";
import { IoMdKey } from "react-icons/io";
import { IoEye } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import BookLogo from "../assets/images/bookshelf.jpg";
import Logo from "../assets/images/logo.jpg";
import "../assets/styling/AltLogin.css";
import { AuthenticationContext, UserContext } from "../context/UserContext.jsx";
import useFetch from "../hooks/useFetch.js";

export default function AltLogin() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [failText, setFailText] = useState("");

  const { userInfo, setUserInfo } = useContext(UserContext);
  const { authentication, setAuthentication } = useContext(
    AuthenticationContext
  );

  async function HandleLogin(event) {

    if(password === "" || username === ""){
        toast.error("Please enter all required fields");
        return;
    }
    event.preventDefault();
    var data = {};
    var error = null;
    const route =
      "http://localhost:7003/user/getAccount?username=" +
      username +
      "&password=" +
      password;
    console.log(route);
    const response = await fetch(route, {
      method: "GET",
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(),
    });

    if (response.status == 400) {
        toast.error(response.statusText);  
    } else if (response.status == 500) {
        toast.error(response.statusText);
    } else if (response.status == 401) {
        toast.error(response.statusText);
    } else if (response.status == 200) {
      console.log(
        response.json().then((resData) => {
          setAuthentication((prevState) => ({
            guest: false,
            isLoggedIn: true,
          }));
          setUserInfo(resData.user);
          navigate("/search");
        })
      );
    }
  }

  const handleRegister = (event) => {
    event.preventDefault();
    navigate("/register");
  };

  const handleGuest = (event) => {
    event.preventDefault();
    setAuthentication((prevState) => ({
      guest: true,
      isLoggedIn: false,
    }));
    setUserInfo({first_name: "GUEST" , last_name : ""});
    navigate("/search");
  };

  const handleShowPass = () =>{
    const pass = document.getElementById("pass-input")
    const passicon = document.getElementById("pass-toggle-icon");

    if(pass.type == "password"){
      pass.type = "text";
    }
    else{
      pass.type = "password";
    }
  }

  return (
    <div className="outer-container">
        
        <div className="inner-container">
            <div className="login-form">
                <img className="login-logoimg" src={Logo} alt="" />
                <h1 className="welcome-login">Welcome Back!</h1>
                <h2 className="mid-text">Login or continue as guest to get access</h2>

                <h2 className="email-pass">Username</h2>
                <form>
                    <input
                        className="input-box"
                        
                        type="text"
                        placeholder="Enter your username"
                        value={username}
                        onChange={(event) => setUsername(event.target.value)}
                        
                    />

                    <h2 className="email-pass">Password</h2>
                  <div className="pass-box">
                  

                    <input
                            className="passinput-box"
                            type="password"
                            id = "pass-input"
                            placeholder="Enter your password"
                            value={password}
                            onChange={(event) => setPassword(event.target.value)}
                        />
                        <div id="pass-toggle-icon"  onClick={handleShowPass}>
                          <IoEye className="password-eye"/>
                        </div>
                        
                  </div>
                  
                </form>

            <button className="loginsubmit" onClick={HandleLogin}>
             Log In
            </button>
            <ToastContainer/>
            <h3 className="mid-text">Or, Continue as Guest</h3>
            <button className="loginsubmit" onClick={handleGuest} >
             Continue as Guest
            </button>
            <h3 className="mid-text">Don't have an account? <Link className="login-reg" to = '/register'>Register Here</Link></h3>

            </div>
            <div className="static-info">
            </div>
        </div>
    </div>
  );
}
