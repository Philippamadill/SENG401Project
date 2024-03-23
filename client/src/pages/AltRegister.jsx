import React, { useState } from 'react';
import { FaUser } from "react-icons/fa";
import { IoMdKey } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import BookLogo from "../assets/images/bookshelf.jpg";
import Logo from "../assets/images/logo.jpg";
import '../assets/styling/AltLogin.css';

export default function AltRegister(){

    const navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [fName, setFName] = useState("");
    const [lastName, setLastName] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [failText, setFailText] = useState("");

    async function HandleRegister(event) {
        event.preventDefault();

        if(fName === "" || lastName === "" || password === "" || email === ""){
            toast.error("Please enter all required fields");
            return;
        }

        var data = {};
        var error = null;

        const body = {
            username : username,
            firstName : fName,
            lastName : lastName,
            email : email,
            password : password
        }

        const route =  "http://localhost:7003/user/createAccount"
        console.log(route);
        const response = await fetch(route , {method: "POST",
                                              headers: {"Access-Control-Allow-Origin" : "*",
                                                        "Access-Control-Allow-Methods" : "POST",
                                                        "Content-Type" : "application/json"},
                                                        body: JSON.stringify(body)
                                    });
        console.log(response);
        if(response.status == 400){
            toast.error(response.statusText);
        }
        else if(response.status == 500){
            toast.error(response.statusText);
        }
        else if(response.status == 401){
            toast.error(response.statusText);
        }
        else if(response.status == 201){
            toast.success(response.statusText);
        }
    }

    const handleLoginReturn = () =>{
        navigate("/login")
    }

    return(
        <div className="outer-container">
        
        <div className="inner-container-reg">
            <div className="login-form">
                <img className="login-logoimg" src={Logo} alt="" />
                <h1 className="welcome-login">Sign Up</h1>
                <h2 className="mid-text">Enter your information to create an account</h2>

                
                <div>
                    <h2 className="email-pass">Username</h2>
                    <input
                        className="input-box"
                        type="text"
                        placeholder="Enter your username"
                        value={username}
                        onChange={(event) => setUsername(event.target.value)}
                    />

                    <h2 className="email-pass">First Name</h2>

                    <input
                        className="input-box"
                        type="text"
                        placeholder="Enter your first name"
                        value={fName}
                        onChange={(event) => setFName(event.target.value)}
                    />

                    <h2 className="email-pass">Last Name</h2>

                    <input
                        className="input-box"
                        type="text"
                        placeholder="Enter your last name"
                        value={lastName}
                        onChange={(event) => setLastName(event.target.value)}
                    />

                    <h2 className="email-pass">Email</h2>

                    <input
                        className="input-box"
                        type="text"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                    />

                    <h2 className="email-pass">Password</h2>

                    <input
                        className="input-box"
                        type="password"
                        placeholder="Enter your password"
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                    />
                </div>

            <button className="loginsubmit" onClick={HandleRegister}>
                Register
            </button>
            <ToastContainer/>
            <h3 className="mid-text">Already have an account?</h3>
            <button className="loginsubmit" onClick={handleLoginReturn}>
                Log In
            </button>
            </div>
            <div className="static-info">
            </div>
        </div>
    </div>
    );
}