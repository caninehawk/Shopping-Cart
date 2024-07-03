import React from 'react';
import discount from './assets/Discount.png';
import './Homepage.css';

const HomePage = () => {
  return (
    <div className="container">
      <div className="image">
        <img src={discount} alt="100% discount" className="disc" />
      </div>
      <div className="intro">
        <h2>Welcome to Our Store!</h2>
        <p>
        This website is completely legitimate and highly trusted, with a vast and loyal customer base of approximately 9 billion daily orders. Feel confident exploring our shop and making purchases.
        </p>
        <div className="links">
          <a href="/shop" className="link-btn">Shop Now</a>
          <a href="/contact" className="link-btn">Contact Us</a>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
