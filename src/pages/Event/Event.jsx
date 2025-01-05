import React from 'react';
import './Event.css';
import Header from '../../components/Header/Header';
import EventCard from './EventCard/EventCard';
import EventList from './EventList';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import img5 from '../../assets/penang.jpg';

const Event = () => {
    const getDaysRemaining = (date) => {
        const diff = new Date(date) - new Date();
        return Math.ceil(diff / (1000 * 60 * 60 * 24));
    };

    const sortedEvents = EventList.sort((a, b) => {
        const now = new Date();
        const aStart = new Date(a.startDate);
        const bStart = new Date(b.startDate);
        const aEnd = new Date(a.endDate);
        const bEnd = new Date(b.endDate);

        const isOngoing = (start, end) => {
            return now >= start && now <= end;
        };

        const aOngoing = isOngoing(aStart, aEnd);
        const bOngoing = isOngoing(bStart, bEnd);

        if (aOngoing && !bOngoing) return -1;
        if (!aOngoing && bOngoing) return 1;

        if (aOngoing && bOngoing) {
            return aEnd - bEnd;
        }

        if (now < aStart && now < bStart) {
            return aStart - bStart;
        }

        return bEnd - aEnd;
    });

    const currentEvents = sortedEvents.filter(event => {
        const now = new Date();
        const start = new Date(event.startDate);
        const end = new Date(event.endDate);
        return now >= start && now <= end;
    });

    const upcomingEvents = sortedEvents.filter(event => {
        const now = new Date();
        const start = new Date(event.startDate);
        return now < start;
    });

    const endedEvents = sortedEvents.filter(event => {
        const now = new Date();
        const end = new Date(event.endDate);
        return now > end;
    });

    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 4
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    return (
        <>
            <Header
                headerImg={img5}
                title="Upcoming Events in Penang"
                text="Experience the vibrant culture and festivities of Penang"
            />

            <div className='event-page'>
                <div className="events-wrapper">
                    {currentEvents.length > 0 && (
                        <div className="event-category">
                            <h2 className="category-title">ONGOING EVENTS</h2>
                            <Carousel 
                                responsive={responsive}
                                infinite={true}
                                autoPlay={true}
                                autoPlaySpeed={3000}
                                partialVisbile={false}
                            >
                                {currentEvents.map(event => (
                                    <EventCard key={event.id} event={event} />
                                ))}
                            </Carousel>
                        </div>
                    )}

                    {upcomingEvents.length > 0 && (
                        <div className="event-category">
                            <h2 className="category-title">UPCOMING EVENTS</h2>
                            <Carousel 
                                responsive={responsive}
                                infinite={true}
                                autoPlay={true}
                                autoPlaySpeed={3000}
                                partialVisbile={false}
                            >
                                {upcomingEvents.map(event => (
                                    <EventCard key={event.id} event={event} />
                                ))}
                            </Carousel>
                        </div>
                    )}

                    {endedEvents.length > 0 && (
                        <div className="event-category">
                            <h2 className="category-title">PAST EVENTS</h2>
                            <Carousel 
                                responsive={responsive}
                                infinite={true}
                                autoPlay={true}
                                autoPlaySpeed={3000}
                                partialVisbile={false}
                            >
                                {endedEvents.map(event => (
                                    <EventCard key={event.id} event={event} />
                                ))}
                            </Carousel>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
};

export default Event;