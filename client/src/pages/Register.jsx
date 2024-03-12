import React from 'react';
import '../assets/styling/Register.css';
import { useState } from 'react';
import { FaUser} from "react-icons/fa";
import { IoMdKey } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import {useNavigate} from 'react-router-dom'

export default function RegisterPage(){

    const navigate = useNavigate();
    const [fName, setFName] = useState("");
    const [lastName, setLastName] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [successText, setSuccessText] = useState("");

    const handleSubmit = (event) =>{
        if(fName === "" || lastName === "" || password === "" || email === ""){
            setSuccessText("Missing field(s)");
        }
        else{
            navigate("/");
            
        }

        event.preventDefault();
    }


    return(
        <div className='register-page'>
        <div className='wrapper'>
        <form onSubmit={handleSubmit}>
            <h1 className='register-text'>Register</h1>
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
                    <button className='submit-login' onClick={handleSubmit}>Sign Up</button>
                    <button className='submit-register'><a href='/'>ALREADY HAVE AN ACCOUNT?</a></button>
                </div>
            <h2 className='on-fail'>{successText}</h2>

        </form>
        </div>
    </div>
    );
}