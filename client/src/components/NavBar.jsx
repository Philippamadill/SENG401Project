import React from 'react'
import {useNavigate} from 'react-router-dom'
import { IconContext } from "react-icons";
import { IoHomeSharp } from "react-icons/io5";
import { BsEyeglasses } from "react-icons/bs";
import { MdOutlineClass } from "react-icons/md";
import { BiLogOut } from "react-icons/bi";
import { RiReservedFill } from "react-icons/ri";
import { GrUserAdmin } from "react-icons/gr";
import '../assets/styling/NavBar.css';
import Logo from "../assets/images/logo.jpg";
import ProfileImg from "../assets/images/profile-img.png";



export default function NavBar(){
    

    const navigate = useNavigate();

    const handleLogout = () => {
        navigate("/");
    }


    return(
        <nav className='sidebar'>
            <div className='logo-sidebar'>
                <img className='logo-img' src= {Logo} alt=''/>
                <h1 className='logo-txt'>BookBook</h1>
            </div>

            <div>
                <ul>
                        <li className='sidebar-links'>
                            <a href='/currentlyreading'>Currently reading</a>
                        </li>
                        <li className='sidebar-links'>
                            <a href='/wanttoread'>Want to read</a>
                        </li>
                        <li className='sidebar-links'>
                            <a href='/alreadyread'>Already read</a>
                        </li>
                        <li className='sidebar-links'>
                            <a href='/toppicks'>Top picks of the week</a>
                        </li>
                </ul>
            </div>
            
            <div className='sidebar-profile'>
                <img className='profile-img' src = {ProfileImg} alt='' />
                <div className='profile-content'>
                    <h2>username</h2>
                </div>
                <IconContext.Provider value={{ className: "sidebar-logout" }}>
                    <BiLogOut title='Sign Out' size={30} onClick={handleLogout}/>
                </IconContext.Provider>
            </div>

        </nav>
    );

}
