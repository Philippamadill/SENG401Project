import React, { useContext } from "react";
import { IconContext } from "react-icons";
import { BiLogOut } from "react-icons/bi";
import { BsEyeglasses } from "react-icons/bs";
import { GrUserAdmin } from "react-icons/gr";
import { IoHomeSharp } from "react-icons/io5";
import { MdOutlineClass } from "react-icons/md";
import { RiReservedFill } from "react-icons/ri";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../assets/images/logo.jpg";
import ProfileImg from "../assets/images/profile-img.png";
import "../assets/styling/NavBar.css";
import { AuthenticationContext, UserContext } from "../context/UserContext";

export default function NavBar() {
  const { userInfo, setUserInfo } = useContext(UserContext);
  const { authentication, setAuthentication } = useContext(AuthenticationContext);

  const navigate = useNavigate();

  const handleLogout = () => {
    setAuthentication({ guest: true, isLoggedIn: false });
    setUserInfo({first_name: "GUEST" , last_name : ""});
    navigate("/login");
  };

  const handleLogin = (event) => {
    event.preventDefault();
    navigate("/login");
  };

  return (
    <nav className="sidebar">
      <div className="logo-sidebar">
        <img className="logo-img" src={Logo} alt="" />
        <h1 className="logo-txt">BookBook</h1>
      </div>

      <div>
        <ul>
          <li className="sidebar-links">
            <Link to="/search">Search</Link>
          </li>
          <li className="sidebar-links">
            <Link to="/currentlyreading">Currently reading</Link>
          </li>
          <li className="sidebar-links">
            <Link to="/wanttoread">Want to read</Link>
          </li>
          <li className="sidebar-links">
            <Link to="/alreadyread">Already read</Link>
          </li>
          <li className="sidebar-links">
            <Link to="/reviews">Reviews</Link>
          </li>
          <li className="sidebar-links">
            <Link to="/toppicks">Top picks of the week</Link>
          </li>
        </ul>
      </div>

      <div className="sidebar-profile">
        <img className="profile-img" src={ProfileImg} alt="" />
        <div className="profile-content">
          <h2>
            {userInfo.first_name} {userInfo.last_name}
          </h2>
        </div>
        {
          authentication.isLoggedIn &&
          <IconContext.Provider value={{ className: "sidebar-logout" }}>
            <BiLogOut title="Sign Out" size={30} onClick={handleLogout} />      
          </IconContext.Provider>
        }
        {
          authentication.guest &&
          <button className="sidebar-login" onClick={handleLogin}>
            Login
          </button>
        }
      </div>
    </nav>
  );
}
