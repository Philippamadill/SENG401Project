import React from "react";
import "../assets/styling/Login.css";
import { useState, useContext } from "react";
import useFetch from "../hooks/useFetch.js";
import { FaUser } from "react-icons/fa";
import { IoMdKey } from "react-icons/io";
import { useNavigate, Link } from "react-router-dom";
import { AuthenticationContext, UserContext } from "../context/UserContext.jsx";

export default function LoginPage() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [failText, setFailText] = useState("");

  const { userInfo, setUserInfo } = useContext(UserContext);
  const { authentication, setAuthentication } = useContext(
    AuthenticationContext
  );

  async function HandleLogin(event) {
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
      setFailText(response.statusText);
    } else if (response.status == 500) {
      setFailText(response.statusText);
    } else if (response.status == 401) {
      setFailText(response.statusText);
    } else if (response.status == 200) {
      console.log(
        response.json().then((resData) => {
          setAuthentication((prevState) => ({
            guest: false,
            isLoggedIn: true,
          }));
          setUserInfo(resData.user);
          navigate("/currentlyreading");
        })
      );
    }
  }

  const handleRegister = (event) => {
    event.preventDefault();
    navigate("/register");
  };

  return (
    <div className="login-page">
      <div className="wrapper">
        <form>
          <h1 className="login-text">Sign-in</h1>
          <div className="input-box">
            <input
              value={username}
              type="text"
              placeholder="Username"
              onChange={(event) => setUsername(event.target.value)}
            />
            <FaUser className="login-icon" />
          </div>
          <div className="input-box">
            <input
              value={password}
              type="text"
              placeholder="PASSWORD"
              onChange={(event) => setPassword(event.target.value)}
            />
            <IoMdKey className="login-icon" />
          </div>
          <div className="lr-buttons">
            <button className="submit-login" onClick={HandleLogin}>
              Login
            </button>
            <button className="submit-register" onClick={handleRegister}>
              Register
            </button>
          </div>
          <h2 className="on-fail">{failText}</h2>
        </form>
      </div>
    </div>
  );
}
