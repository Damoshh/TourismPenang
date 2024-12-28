import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <>
      <div className="home-container">
        <img className="home-background" src="src/assets/hans8.jpg" alt="Penang Landscape" />
        <div className="home-overlay">
          <h1 className="home-title">EXPLORE PENANG</h1>
          <p className="home-subtitle">Discover the culture, cuisine, and beauty of Penang.</p>
        </div>
      </div>

      <div className="about-penang">
        <h2>About Penang</h2>
        <p>
          Penang, known as the "Pearl of the Orient," is a vibrant Malaysian state famous for its rich cultural heritage, 
          delicious street food, and stunning landscapes. From the historic streets of George Town to the serene beaches of Batu Ferringhi, 
          Penang offers an unforgettable experience for travelers.
        </p>
      </div>
    </>
  );
};

export default Home;