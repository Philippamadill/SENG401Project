import React from 'react';
import '../assets/styling/Register.css';
import { useState } from 'react';
import { FaUser} from "react-icons/fa";
import { IoMdKey } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import {useNavigate, Link} from 'react-router-dom'

export default function RegisterPage(){

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
            setFailText("Missing field(s)");
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
            console.log(response);
            setFailText(response.statusText)
        }
        else if(response.status == 500){
            setFailText(response.statusText)
        }
        else if(response.status == 401){
            setFailText(response.statusText)
        }
        else if(response.status == 201){
            console.log(response.status)
            setFailText(response.statusText)
        }
    }


    return(
        <div className='register-page'>
        <div className='wrapper'>
        <form onSubmit={HandleRegister}>
            <h1 className='register-text'>Regsiter</h1>
            <div className="input-box">
                <input  value = {username} type="text" placeholder='USERNAME' onChange={(event) => setUsername(event.target.value)} />
                <FaUser className='login-icon'/>
            </div>
            <div className="input-box">
                <input  value = {fName} type="text" placeholder='FIRST NAME' onChange={(event) => setFName(event.target.value)} />
                <FaUser className='login-icon'/>
            </div>
            <div className="input-box">
                <input  value = {lastName} type="text" placeholder='LAST NAME' onChange={(event) => setLastName(event.target.value)}/>
                <FaUser className='login-icon'/>
            </div>
            <div className="input-box">
                <input  value = {email} type="text" placeholder='E-MAIL' onChange={(event) => setEmail(event.target.value)} />
                <MdEmail className='login-icon' />
            </div>
            <div className="input-box">
                <input  value = {password} type="text" placeholder='PASSWORD' onChange={(event) => setPassword(event.target.value)}/>
                <IoMdKey className='login-icon'/>
            </div>

            <div className='lr-buttons'>
                    <button className='submit-login' onClick={HandleRegister}>Sign Up</button>
                    <button className='submit-register'><Link to= "/">ALREADY HAVE AN ACCOUNT?</Link></button>
                </div>
            <h2 className='on-fail'>{failText}</h2>

        </form>
        </div>
    </div>
    );
}