import React from 'react';
import './HomeCard.css';

function Card({ imgSrc, title, text, link }) {
  return (
    <div className="home-card">
      <img className="card-img" src={imgSrc} alt={title} />
      <h2 className="card-title">{title}</h2>
      <p className="card-text">{text}</p>
      {link && (
        <a href={link} className="card-btn">
          Learn More
        </a>
      )}
    </div>
  );
}

export default Card;