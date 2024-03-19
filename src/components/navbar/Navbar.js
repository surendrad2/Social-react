import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { AppContext } from "../../context/appContext";
export default function Navbar() {
  const {  user, setUser, setFlag } = useContext(AppContext);
  const PATH = process.env.REACT_APP_PATH;
  const handleLogout = () => {
    setUser((prev) => ({ ...prev, ...{ name: "", email: "", pass: "" } }));
    setFlag((prev) => 0);
  };
  return (
    <div className="navbar">
      <div className="title">Social Media</div>
      <div>
        <h3>Hi {user.name}!</h3>
      </div>
      <div className="links">
        <Link to={`${PATH}/`}> Home </Link>
        <Link to={`${PATH}/post`}> Post </Link>
        <Link to={`${PATH}/album`}> Album </Link>
        <Link to={`${PATH}/`} onClick={handleLogout}>
          Logout
        </Link>
      </div>
    </div>
  );
}
