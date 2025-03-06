import React from "react";
import { Link } from "react-router-dom";
import "./HomePage.css";
import heroImage from "../assets/Hero.jpg"; 

const HomePage = () => {
  return (
    <div className="homepage">
   
      <header className="header">
        <div className="logo">Gourmet 2 Go</div>
        <nav className="nav-menu">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/menu" className="nav-link">Menu</Link>
          <Link to="/order" className="nav-link">Order</Link>
        </nav>
      </header>

     
      <section 
        className="hero" 
       
      >
     
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

  
      <section className="info-section">
        <h2>Why Choose Gourmet 2 Go?</h2>
        <p>We provide freshly prepared gourmet meals, delivered fast and easy.</p>
      </section>


      <footer className="footer">
      <p>© {currentYear} Gourmet 2 Go. All rights reserved.</p>
    </footer>
    </div>
  );
};

export default HomePage;
