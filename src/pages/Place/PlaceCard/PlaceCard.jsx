import React from 'react';
import './PlaceCard.css'

const PlaceCard = ({ place, currentImageIndex = 0, onImageNav }) => {
  return (
    <div className="card">
      <div className="card-image-container">
        <img 
          src={place.images[currentImageIndex]} 
          alt=''
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
          <a 
            href={place.locationLink}
            target="_blank"
            className='card-location-a'
          >
            <i className='fa-solid fa-map-pin'/>
            <span>{place.location}</span>
          </a>
        </div>
        <div className="card-info-row">
          <span className="card-category">{place.category}</span>
          {place.rating && (
            <div className="card-rating">
              {'★'.repeat(place.rating)}{'☆'.repeat(5-place.rating)}
            </div>
          )}
        </div>
        {place.review && (
          <div className="card-review">{place.review}</div>
        )}
      </div>
    </div>
  );
};

export default PlaceCard;