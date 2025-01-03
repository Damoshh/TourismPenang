import React from 'react';
import './Home.css';
import Header from '../../components/Header/Header.jsx';
import imgHome from '../../assets/home1.jpg';
import Card from '../../components/Card/Card.jsx';
import imgCard1 from '../../assets/card1.jpg';
import imgCard2 from '../../assets/card2.jpg';
import imgCard3 from '../../assets/card3.jpg';
import imgCard4 from '../../assets/card4.jpg';
import imgCard5 from '../../assets/card5.jpg';
import imgCard6 from '../../assets/card6.jpg';
import imgCard7 from '../../assets/card7.jpg';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
      partialVisibilityGutter: 30,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      partialVisibilityGutter: 30,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      partialVisibilityGutter: 20,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      partialVisibilityGutter: 10,
    },  
};

const Home = () => {
  return (
    <>
      <Header
        headerImg={imgHome}
        title="Explore Penang"
        text="Discover the culture, cuisine, and beauty of Penang."
      />

      <div className="about-penang">
        <h2>About Penang</h2>
        <p>
          Penang, known as the "Pearl of the Orient," is a vibrant Malaysian state famous for its rich cultural heritage,
          delicious street food, and stunning landscapes. From the historic streets of George Town to the serene beaches of Batu Ferringhi,
          Penang offers an unforgettable experience for travelers.
        </p>
      </div>
      <div className="carousel-container">
        <h2 className='rec-penang'>Recommendations</h2>
        <Carousel 
          responsive={responsive}
          centerMode={true}
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={3000}>
          <Card
            imgSrc={imgCard1}
            title="Heritage"
            text="Explore the historic streets of George Town, a UNESCO World Heritage site."
            link="/place"
          />
          <Card
            imgSrc={imgCard2}
            title="Beaches"
            text="Relax at the serene beaches of Batu Ferringhi, known for its beautiful coastline."
            link="/place"
          />
          <Card
            imgSrc={imgCard3}
            title="Hills"
            text="Enjoy panoramic views of Penang from the summit of Penang Hill."
            link="/place"
          />
          <Card
            imgSrc={imgCard4}
            title="Culture"
            text="Visit Kek Lok Si, one of Southeast Asia's largest Buddhist temples."
            link="/place"
          />
          <Card
            imgSrc={imgCard5}
            title="Nature"
            text="Explore Penang National Park, home to lush greenery and wildlife."
            link="/place"
          />
          <Card
            imgSrc={imgCard6}
            title="Entertainment"
            text="Fill in your trip with some entertainment in Penang."
            link="/place"
          />
          <Card
            imgSrc={imgCard7}
            title="Food"
            text="Feast on the famous Nasi Kandar, a must-try meal if you are visiting."
            link="/place"
          />
        </Carousel>
      </div>
    </>
  );
};

export default Home;