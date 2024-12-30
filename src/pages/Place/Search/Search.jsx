import React, { useState } from 'react';
import PlaceCard from '../../../components/Card/PlaceCard';
import beachPlaces from '../ListPlaces/beachPlaces'; 
import restaurantPlaces from '../ListPlaces/restaurantPlaces'; 
import restaurantPlaces from '../ListPlaces/restaurantPlaces'; 
import restaurantPlaces from '../ListPlaces/restaurantPlaces'; 
import './Search.css';

const SearchComponent = () => {
  const [placeQuery, setPlaceQuery] = useState('');
  const [locationQuery, setLocationQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [currentImageIndexes, setCurrentImageIndexes] = useState({});

  const categories = [
    { id: 'all', label: 'All' },
    { id: 'hotel', label: 'Hotel' },
    { id: 'restaurant', label: 'Restaurant' },
    { id: 'culture', label: 'Culture' },
    { id: 'beach', label: 'Beach' }
  ];

  const allPlaces = [...beachPlaces, ...restaurantPlaces];

  const filteredPlaces = allPlaces.filter(place => {
    const matchesPlace = !placeQuery || place.title.toLowerCase().includes(placeQuery.toLowerCase());
    const matchesLocation = !locationQuery || place.location.toLowerCase().includes(locationQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || place.category === selectedCategory;
    return matchesPlace && matchesLocation && matchesCategory;
  });

  const handleImageNav = (placeId, direction) => {
    setCurrentImageIndexes(prev => {
      const currentIndex = prev[placeId] || 0;
      const place = allPlaces.find(p => p.id === placeId);
      const maxIndex = place.images.length - 1;
      
      let newIndex;
      if (direction === 'next') {
        newIndex = currentIndex >= maxIndex ? 0 : currentIndex + 1;
      } else {
        newIndex = currentIndex <= 0 ? maxIndex : currentIndex - 1;
      }
      
      return { ...prev, [placeId]: newIndex };
    });
  };

  const handleSearch = (e) => {
    e.preventDefault();
  };

  return (
    <div className="search-container">
      <form onSubmit={handleSearch} className="search-inputs">
        <input
          type="text"
          placeholder="Search place..."
          value={placeQuery}
          onChange={(e) => setPlaceQuery(e.target.value)}
          className="search-input"
        />
        <input
          type="text"
          placeholder="Search location..."
          value={locationQuery}
          onChange={(e) => setLocationQuery(e.target.value)}
          className="search-input"
        />
        <button type="submit" className="search-button">
          🔍
        </button>
      </form>

      <div className="categories-container">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => setSelectedCategory(category.id)}
            className={`category-button ${selectedCategory === category.id ? 'active' : ''}`}
          >
            {category.label}
          </button>
        ))}
      </div>
      
      {filteredPlaces.length === 0 ? (
        <div className="no-results">No places found</div>
      ) : (
        <div className="cards-grid">
          {filteredPlaces.map(place => (
            <PlaceCard
              key={place.id}
              place={place}
              currentImageIndex={currentImageIndexes[place.id] || 0}
              onImageNav={handleImageNav}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchComponent;
