import React from 'react';
import './Event.css';
import img1 from '../../events/christmast.jpg';
import img2 from '../../events/newyear.jpg';
import img3 from '../../events/cny.jpg';
import img4 from '../../events/raya.jpg';
import img5 from '../../events/penang.jpg';
import Header from '../../components/Header/Header.jsx';
import { Link } from 'react-router-dom';

const Event = () => {
  const events = [
    {
      title: "Christmas",
      img: img1,
      description: "Celebrate the joyous Christmas season with vibrant decorations, carols, and festive cheer in Penang.",
      date: "25 December 2024",
    },
    {
      title: "New Year",
      img: img2,
      description: "Ring in the New Year with spectacular fireworks, parties, and celebrations across the island.",
      date: "1 January 2025",
    },
    {
      title: "Chinese New Year",
      img: img3,
      description: "Experience the colorful traditions and festive spirit of the Chinese New Year in Penang.",
      date: "10 February 2025",
    },
    {
      title: "Hari Raya Puasa",
      img: img4,
      description: "Join the Hari Raya celebrations with delicious food, open houses, and cultural events.",
      date: "22 April 2025",
    },
  ];

  return (
    <>
      <Header
        headerImg={img5}
        title="The Upcoming Events in Penang"
        text="Come and Enjoy Your Holidays Staycation in Penang."
      />

      <div className="event-content">
        <div className="timeline"></div>
        {events.map((event, index) => (
          <div key={index} className="event-item">
            <div className="event-details">
              <h2>{event.title}</h2>
              <p className="event-date">{event.date}</p>
              <p>{event.description}</p>
              <Link to="/Place">
                <button>Explore More</button>
              </Link>
            </div>
            <img src={event.img} alt={event.title} />
          </div>
        ))}
      </div>
    </>
  );
};

export default Event;
