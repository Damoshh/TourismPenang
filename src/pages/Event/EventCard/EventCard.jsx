import React, { useState, useEffect } from 'react';
import './EventCard.css';

const EventCard = ({ event }) => {
    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
    });

    useEffect(() => {
        if (event.status === "ENDED") return;

        const timer = setInterval(() => {
            const now = new Date();
            const target = new Date(event.status === "LIVE NOW" ? event.endDate : event.startDate);
            const difference = target - now;

            setTimeLeft({
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
                minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
                seconds: Math.floor((difference % (1000 * 60)) / 1000)
            });
        }, 1000);

        return () => clearInterval(timer);
    }, [event]);

    return (
        <div className="event-card">
            <div className="event-image">
                <img src={event.img} alt={event.title} />
            </div>
            
            <div className="event-content">
                <h2 className="event-title">{event.title}</h2>
                
                <div className="status-container">
                    <span className={`event-status status-${event.status.toLowerCase().replace(/\s+/g, '-')}`}>
                        {event.status}
                    </span>
                        
                    {event.status !== "ENDED" && (
                        <div className="countdown-display">
                            <div className="countdown-item">
                                <span className="countdown-value">{timeLeft.days}</span>
                                <span className="countdown-label">Day</span>
                            </div>
                            <div className="countdown-item">
                                <span className="countdown-value">{String(timeLeft.hours).padStart(2, '0')}</span>
                                <span className="countdown-label">Hour</span>
                            </div>
                            <div className="countdown-item">
                                <span className="countdown-value">{String(timeLeft.minutes).padStart(2, '0')}</span>
                                <span className="countdown-label">Min</span>
                            </div>
                            <div className="countdown-item">
                                <span className="countdown-value">{String(timeLeft.seconds).padStart(2, '0')}</span>
                                <span className="countdown-label">Sec</span>
                            </div>
                        </div>
                    )}
                </div>

                <div className="event-info">
                    <div className="info-item">
                        <i className="fas fa-calendar-alt"></i>
                        <span>{event.displayDate}</span>
                    </div>
                    <a 
                        href={event.locationLink} 
                        target="_blank" 
                        className='event-location'
                    >
                        <i className="fas fa-map-marker-alt"></i>
                        <span>{event.location}</span>
                    </a>
                </div>

                <p className="event-description">{event.description}</p>
            </div>
        </div>
    );
};

export default EventCard;