import React from "react";

import { Link } from "react-router-dom";
import "./HomePage.css";
import heroImage from "../assets/hero.jpg"; // Ensure correct file path

const HomePage = () => {
    return (
        <div className="homepage">
            {/* Header */}
            <header className="header">
                <div className="logo">Gourmet 2 Go</div>
                <nav className="nav-menu">
                    <Link to="/" className="nav-link">Home</Link>
                    <Link to="/menu" className="nav-link">Menu</Link>
                    <Link to="/order" className="nav-link">Order</Link>
                </nav>
            </header>

            {/* Hero Section */}
            <section className="hero">
                <img src={heroImage} alt="hero" className="hero-img" />
                <div className="overlay"></div>
                <div className="hero-content">
                    <h1>Delicious Meals Delivered</h1>
                    <p>Catering for all occasions. Fresh, local, and made to order.</p>
                    <div className="hero-buttons">
                        <Link to="/menu" className="btn primary-btn">View Menu</Link>
                    </div>
                </div>
            </section>

            {/* Info Section */}
            <section className="info-section">
                <h2>Why Choose Gourmet 2 Go?</h2>
                <p>We provide freshly prepared gourmet meals, delivered fast and easy.</p>
            </section>

            {/* Footer */}
            <footer className="footer">
                <p>© 2023 Gourmet 2 Go. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default HomePage;
