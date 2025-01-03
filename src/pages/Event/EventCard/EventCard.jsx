import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './EventCard.css';

const EventCard = ({ event }) => {
    const [timeLeft, setTimeLeft] = useState({});

    const calculateTimeLeft = () => {
        const eventStart = new Date(event.startDate);
        const now = new Date();
        const difference = eventStart - now;

        if (difference > 0) {
            const days = Math.floor(difference / (1000 * 60 * 60 * 24));
            const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
            const minutes = Math.floor((difference / 1000 / 60) % 60);
            const seconds = Math.floor((difference / 1000) % 60);

            return { days, hours, minutes, seconds };
        }

        return null;
    };

    useEffect(() => {
        if (event.status === "COMING SOON") {
            const timer = setInterval(() => {
                setTimeLeft(calculateTimeLeft());
            }, 1000);

            return () => clearInterval(timer);
        }
    }, [event]);

    const getStatusIndicator = () => {
        switch(event.status) {
            case "HAPPENING NOW":
                return (
                    <div className="live-indicator">
                        <i className="fas fa-broadcast-tower"></i>
                        <span>Live Now</span>
                    </div>
                );
            case "COMING SOON":
                return timeLeft && (
                    <div className="countdown-container">
                        <div className="countdown-item">
                            <span className="countdown-number">{timeLeft.days}</span>
                            <span className="countdown-label">Days</span>
                        </div>
                        <div className="countdown-item">
                            <span className="countdown-number">{timeLeft.hours}</span>
                            <span className="countdown-label">Hours</span>
                        </div>
                        <div className="countdown-item">
                            <span className="countdown-number">{timeLeft.minutes}</span>
                            <span className="countdown-label">Minutes</span>
                        </div>
                        <div className="countdown-item">
                            <span className="countdown-number">{timeLeft.seconds}</span>
                            <span className="countdown-label">Seconds</span>
                        </div>
                    </div>
                );
            case "ENDED":
                return (
                    <div className="ended-indicator">
                        <i className="fas fa-check-circle"></i>
                        <span>Event Completed</span>
                    </div>
                );
            default:
                return null;
        }
    };

    return (
        <div className={`event-card ${event.status.toLowerCase().replace(' ', '-')}`}>
            <div className="event-image">
                <img src={event.img} alt={event.title} />
                {event.status === "ENDED" && <div className="ended-overlay"></div>}
            </div>
            
            <div className="event-content">
                <div>
                    <div className="event-header">
                        <h2 className="event-title">{event.title}</h2>
                        <span className={`event-status status-${event.status.toLowerCase().replace(' ', '-')}`}>
                            {event.status}
                        </span>
                    </div>

                    {getStatusIndicator()}

                    <div className="event-info">
                        <div className="info-item">
                            <i className="fas fa-calendar-alt"></i>
                            <span>{event.displayDate}</span>
                        </div>
                        <div className="info-item">
                            <i className="fas fa-map-marker-alt"></i>
                            <span>{event.location}</span>
                        </div>
                    </div>

                    <p className="event-description">{event.description}</p>
                </div>

                {event.status === "ENDED" ? (
                    <div className="recap-button">
                        <Link to="/Place" className="event-button ended">
                            View Recap
                            <i className="fas fa-photo-video"></i>
                        </Link>
                    </div>
                ) : (
                    <Link to="/Place" className="event-button">
                        Learn More
                        <i className="fas fa-arrow-right"></i>
                    </Link>
                )}
            </div>
        </div>
    );
};

export default EventCard;