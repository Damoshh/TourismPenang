import React from 'react';
import './Header.css';

const Header = ({ headerImg, title, text }) => {
  return (
    <div className="home-container">
      <img className="home-background" src={headerImg} alt=""/>
      <div className="home-overlay">
        <h1 className="home-title">{title}</h1>
        <p className="home-subtitle">{text}</p>
      </div>
    </div>
  );
};

export default Header;