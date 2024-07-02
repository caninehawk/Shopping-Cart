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
          Discover amazing deals and discounts on a wide range of products.
          Explore our collection and find something special just for you.
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
