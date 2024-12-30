import React from 'react';

const PlaceCard = ({ place, currentImageIndex = 0, onImageNav }) => {
  return (
    <div className="card">
      <div className="card-image-container">
        <img 
          src={place.images[currentImageIndex]} 
          alt={place.title} 
          className="card-image" 
        />
        <button 
          className="prev-button"
          onClick={() => onImageNav(place.id, 'prev')}
        >
          ←
        </button>
        <button 
          className="next-button"
          onClick={() => onImageNav(place.id, 'next')}
        >
          →
        </button>
      </div>
      
      <div className="card-content">
        <h3 className="card-title">{place.title}</h3>
        <div className="card-location">
        <span className="location-icon">📍</span>
          <a 
            href={place.locationLink || `https://www.google.com/maps/search/${encodeURIComponent(place.location)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500 transition-colors"
          >
            {place.location}
          </a>
        </div>
        <span className="card-category">{place.category}</span>
        {place.rating && (
          <div className="card-rating">
            {'★'.repeat(place.rating)}{'☆'.repeat(5-place.rating)}
          </div>
        )}
        {place.review && (
          <div className="card-review">{place.review}</div>
        )}
      </div>
    </div>
  );
};

export default PlaceCard;