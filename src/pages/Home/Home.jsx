import React from 'react';
import './Home.css';
import Header from '../../components/Header/Header.jsx';
import imgHome from '../../assets/home1.jpg'

const Home = () => {
  return (
    <>
      <Header
        headerImg = {imgHome}
        title="Welcome to Penang"
        text="Discover the Pearl of the Orient"
      />

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