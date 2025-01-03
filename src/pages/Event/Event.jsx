import React from 'react';
import './Event.css';
import img5 from '../../assets/penang.jpg';
import Header from '../../components/Header/Header.jsx';
import EventCard from './EventCard/EventCard.jsx';
import EventList from './EventList.js';

const Event = () => {
    const currentEvents = EventList.filter(event => event.status === "HAPPENING NOW");
    const upcomingEvents = EventList.filter(event => event.status === "COMING SOON");
    const endedEvents = EventList.filter(event => event.status === "ENDED");

    return (
        <div className='event-page'>
            <Header
                headerImg={img5}
                title="Upcoming Events in Penang"
                text="Experience the vibrant culture and festivities of Penang"
            />

            <div className="event-container">
                {currentEvents.length > 0 && (
                    <div className="events-section">
                        <div className="live-now-banner">
                            <i className="fas fa-broadcast-tower"></i>
                            {" Events Happening Now in Penang!"}
                        </div>
                        {currentEvents.map(event => (
                            <EventCard key={event.id} event={event} />
                        ))}
                    </div>
                )}

                {upcomingEvents.length > 0 && (
                    <div className="events-section">
                        <h2 className="section-title">
                            <span className="status-dot coming"></span>
                            Upcoming Events
                        </h2>
                        {upcomingEvents.map(event => (
                            <EventCard key={event.id} event={event} />
                        ))}
                    </div>
                )}

                {endedEvents.length > 0 && (
                    <div className="events-section ended-section">
                        <h2 className="section-title">
                            <span className="status-dot ended"></span>
                            Past Events
                        </h2>
                        {endedEvents.map(event => (
                            <EventCard key={event.id} event={event} />
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Event;