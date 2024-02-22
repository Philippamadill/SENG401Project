import React from 'react';
import '../assets/styling/Login.css';
import {useState} from'react';
import { FaUser} from "react-icons/fa";
import { IoMdKey } from "react-icons/io";
import { useNavigate } from 'react-router-dom';

const EXAMPLE_USER = "student";
const EXAMPLE_PASS = "password";


export default function LoginPage(){

    const navigate = useNavigate();

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [failText, setFailText] = useState("");


    const handleLogin = (event) =>{
        if(username !== EXAMPLE_USER || password !== EXAMPLE_PASS){
            setFailText("Incorrect username or password");
        }
        else{
            navigate("/currentlyreading");
            
        }
        event.preventDefault();
    }


    return(
        <div className='login-page'>
            <div className='wrapper'>
            <form >
                <h1 className='login-text'>Sign-in</h1>
                <div className="input-box">
                    <input  value = {username} type="text" placeholder='E-MAIL' onChange={(event) => setUsername(event.target.value)} />
                    <FaUser className='login-icon'/>
                </div>
                <div className="input-box">
                    <input  value = {password} type="text" placeholder='PASSWORD' onChange={(event) => setPassword(event.target.value)}/>
                    <IoMdKey className='login-icon'/>
                </div>
                <div className='lr-buttons'>
                    <button className='submit-login' onClick={handleLogin}>Login</button>
                    <button className='submit-register'><a href='/register'>Register</a></button>
                </div>
                <h2 className='on-fail'>{failText}</h2>

            </form>
            </div>
        </div>
        
    );

}