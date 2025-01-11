import React from 'react';
import { Link } from 'react-router-dom';
import './HomeCard.css';

function Card({ imgSrc, title, text, link }) {
  return (
    <div className="home-card">
      <img className="card-img" src={imgSrc} alt={title} />
      <h2 className="card-title">{title}</h2>
      <p className="card-text">{text}</p>
      {link && (
        <Link to={link} className="card-btn">
          Learn More
        </Link>
      )}
    </div>
  );
}

export default Card;