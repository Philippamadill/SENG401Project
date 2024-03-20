import React from "react";
import { useNavigate, Link } from "react-router-dom";
import { IconContext } from "react-icons";
import { IoHomeSharp } from "react-icons/io5";
import { BsEyeglasses } from "react-icons/bs";
import { MdOutlineClass } from "react-icons/md";
import { BiLogOut } from "react-icons/bi";
import { RiReservedFill } from "react-icons/ri";
import { GrUserAdmin } from "react-icons/gr";
import "../assets/styling/NavBar.css";
import Logo from "../assets/images/logo.jpg";
import ProfileImg from "../assets/images/profile-img.png";
import { UserContext, AuthenticationContext } from "../context/UserContext";
import { useContext } from "react";

export default function NavBar() {
  const { userInfo } = useContext(UserContext);
  const { setAuthentication } = useContext(AuthenticationContext);

  const navigate = useNavigate();

  const handleLogout = () => {
    setAuthentication({ guest: false, isLoggedIn: false });
    navigate("/");
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
        <IconContext.Provider value={{ className: "sidebar-logout" }}>
          <BiLogOut title="Sign Out" size={30} onClick={handleLogout} />
        </IconContext.Provider>
      </div>
    </nav>
  );
}
