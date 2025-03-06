import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
    return (
        <nav className="navbar">
            {/* REMOVED: <Link to="/" className="nav-button">Home</Link> */}
            <Link to="/menu" className="nav-button">Menu</Link>
            <Link to="/order" className="nav-button">Order</Link>
            {/* NEW: Login button */}
            <Link to="/login" className="nav-button">Login</Link>
        </nav>
    );
};

export default Navbar;
