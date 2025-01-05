import img1 from '../../assets/christmast.jpg';
import img2 from '../../assets/newyear.jpg';
import img3 from '../../assets/cny.jpg';
import img4 from '../../assets/raya.jpg';

const EventList = [
    {
        id: 1,
        title: "Christmas Food Market",
        img: img1,
        description: "Join us for festive treats and holiday cheer.",
        startDate: "2024-12-20", 
        endDate: "2025-01-10",    
        location: "Georgetown, Penang",
        locationLink: "https://maps.app.goo.gl/xawSgqgm45CU34jVA"
    },
    {
        id: 2,
        title: "New Year Heritage Walk",
        img: img2,
        description: "Explore Georgetown's historic streets.",
        startDate: "2024-01-15", 
        endDate: "2025-01-15",   
        location: "Georgetown Heritage Area",
        locationLink: "https://maps.app.goo.gl/vwrQpt7ek75qgwcy6"
    },

    {
        id: 3,
        title: "Chinese New Year Festival",
        img: img3,
        description: "Traditional celebrations and performances.",
        startDate: "2024-02-09",  
        endDate: "2024-02-24",
        location: "Armenian Street",
        locationLink: "https://maps.app.goo.gl/tcUg2VdqD5WvzoNb6"
    },
    {
        id: 4,
        title: "Hari Raya Open House",
        img: img4,
        description: "Experience Malaysian hospitality.",
        startDate: "2025-01-22", 
        endDate: "2025-04-23",
        location: "Various locations in Penang",
        locationLink: "https://maps.app.goo.gl/MhHT8p9vEpqi7AxD7"
    },

    {
        id: 5,
        title: "Mid-Autumn Festival",
        img: img1,
        description: "Lantern festival and mooncakes.",
        startDate: "2024-09-15",
        endDate: "2024-09-17",
        location: "Esplanade, Penang",
        locationLink: "https://maps.app.goo.gl/xGPi6TBCNzutbX3N9"
    },
    {
        id: 6,
        title: "Deepavali Celebration",
        img: img2,
        description: "Festival of lights celebration.",
        startDate: "2024-10-25",
        endDate: "2024-10-27",
        location: "Little India, Georgetown",
        locationLink: "https://maps.app.goo.gl/EgVirpFWX1a8pvTF8"
    },
    {
        id: 7,
        title: "Deepavali ",
        img: img2,
        description: "Festival of lights celebration.",
        startDate: "2025-10-25",
        endDate: "2025-10-27",
        location: "Little India, Georgetown",
        locationLink: "https://maps.app.goo.gl/EgVirpFWX1a8pvTF8"
    }
    ,
    {
        id: 7,
        title: "Deepavali ",
        img: img2,
        description: "Festival of lights celebration.",
        startDate: "2025-10-25",
        endDate: "2025-10-27",
        location: "Little India, Georgetown",
        locationLink: "https://maps.app.goo.gl/EgVirpFWX1a8pvTF8"
    }
    ,
    {
        id: 7,
        title: "Deepavali ",
        img: img2,
        description: "Festival of lights celebration.",
        startDate: "2025-10-25",
        endDate: "2025-10-27",
        location: "Little India, Georgetown",
        locationLink: "https://maps.app.goo.gl/EgVirpFWX1a8pvTF8"
    },
    {
        id: 8,
        title: "Deepavali ",
        img: img2,
        description: "Festival of lights celebration.",
        startDate: "2025-01-01",
        endDate: "2025-10-27",
        location: "Little India, Georgetown",
        locationLink: "https://maps.app.goo.gl/EgVirpFWX1a8pvTF8"
    },
    {
        id: 79,
        title: "Deepavali ",
        img: img2,
        description: "Festival of lights celebration.",
        startDate: "2025-01-01",
        endDate: "2025-10-27",
        location: "Little India, Georgetown",
        locationLink: "https://maps.app.goo.gl/EgVirpFWX1a8pvTF8"
    }
    ,    
    {
        id: 10,
        title: "Deepavali ",
        img: img2,
        description: "Festival of lights celebration.",
        startDate: "2025-01-01",
        endDate: "2025-10-27",
        location: "Little India, Georgetown",
        locationLink: "https://maps.app.goo.gl/EgVirpFWX1a8pvTF8"
    },
    {
        id: 11,
        title: "lalalla ",
        img: img2,
        description: "Festival of lights celebration.",
        startDate: "2025-05-01",
        endDate: "2025-10-27",
        location: "Little India, Georgetown",
        locationLink: "https://maps.app.goo.gl/EgVirpFWX1a8pvTF8"
    },    {
        id: 12,
        title: "ashiraa ",
        img: img2,
        description: "Festival of lights celebration.",
        startDate: "2025-05-01",
        endDate: "2025-10-27",
        location: "Little India, Georgetown",
        locationLink: "https://maps.app.goo.gl/EgVirpFWX1a8pvTF8"
    }
];

const determineEventStatus = (startDate, endDate) => {
    const now = new Date();
    const start = new Date(startDate);
    const end = new Date(endDate);
    
    const timeUntilStart = start - now;
    const timeUntilEnd = end - now;
    
    const formatTime = (milliseconds) => {
        const days = Math.floor(milliseconds / (1000 * 60 * 60 * 24));
        const hours = Math.floor((milliseconds % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((milliseconds % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((milliseconds % (1000 * 60)) / 1000);
        
        return `${days} day ${hours} hour ${minutes} minute ${seconds} second`;
    };
    
    if (start <= now && now <= end) {
        return {
            status: "LIVE NOW",
            timeLeft: timeUntilEnd,
            message: `Event will end in ${formatTime(timeUntilEnd)}`
        };
    } else if (now < start) {
        return {
            status: "COMING SOON",
            timeLeft: timeUntilStart,
            message: `Starts in ${formatTime(timeUntilStart)}`
        };
    } else {
        return {
            status: "ENDED",
            timeLeft: 0,
            message: "The event has ended"
        };
    }
};

const processedEventList = EventList.map(event => {
    const eventStatus = determineEventStatus(event.startDate, event.endDate);
    return {
        ...event,
        ...eventStatus,
        displayDate: `${new Date(event.startDate).toLocaleDateString('en-US', {
            month: 'long',
            day: 'numeric',
            year: 'numeric'
        })} - ${new Date(event.endDate).toLocaleDateString('en-US', {
            month: 'long',
            day: 'numeric',
            year: 'numeric'
        })}`
    };
});

export default processedEventList;  