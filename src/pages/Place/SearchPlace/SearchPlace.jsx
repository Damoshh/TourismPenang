import React, { useState, useEffect } from 'react';
import PlaceCard from '../PlaceCard/PlaceCard';
import allPlaces from '../ListPlaces/allPlaces';
import './SearchPlace.css';

const SearchPlace = () => {
  const [placeQuery, setPlaceQuery] = useState('');
  const [locationQuery, setLocationQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [currentImageIndexes, setCurrentImageIndexes] = useState({});

  const categories = [
    { id: 'all', label: 'All', icon: '🏠' },
    { id: 'hotel', label: 'Hotel', icon: '🏨' },
    { id: 'food', label: 'Food', icon: '🍽️' },
    { id: 'culture', label: 'Culture and Heritage', icon: '🏛️' },
    { id: 'beach', label: 'Beach', icon: '🏖️' },
    { id: 'entertainment', label: 'Entertainment', icon: '🎭' }
  ];

  
  const stats = {
    totalPlaces: allPlaces.length,
    totalCategories: categories.length - 1, 
    topRated: allPlaces.filter(place => place.rating >= 4).length,
    locations: new Set(allPlaces.map(place => place.location)).size
  };

  
  const filteredPlaces = allPlaces.filter(place => {
    const matchesPlace = !placeQuery || 
      place.title.toLowerCase().includes(placeQuery.toLowerCase());
    const matchesLocation = !locationQuery || 
      place.location.toLowerCase().includes(locationQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || 
      place.category === selectedCategory;
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

  useEffect(() => {
    document.title = 'Discover Penang - Find Places';
  }, []);

  return (
    <>
      <div className="stats-container">
        <div className="stat-card">
          <div className="stat-number">{stats.totalPlaces}</div>
          <div className="stat-label">Places to Explore</div>
        </div>
        <div className="stat-card">
          <div className="stat-number">{stats.totalCategories}</div>
          <div className="stat-label">Categories</div>
        </div>
        <div className="stat-card">
          <div className="stat-number">{stats.topRated}</div>
          <div className="stat-label">Top Rated Places</div>
        </div>
        <div className="stat-card">
          <div className="stat-number">{stats.locations}</div>
          <div className="stat-label">Unique Locations</div>
        </div>
      </div>

      <div className="filters-section">
        <h2 className="filters-title">Find Your Perfect Place</h2>
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
              {category.icon} {category.label}
            </button>
          ))}
        </div>
      </div>

      {filteredPlaces.length === 0 ? (
        <div className="no-results">
          <p>No places found in your searching</p>
          <button 
            onClick={() => {
              setPlaceQuery('');
              setLocationQuery('');
              setSelectedCategory('all');
            }}
            className="clear-button"
          >
            Clear Filters
          </button>
        </div>
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
    </>
  );
};

export default SearchPlace;