import img1 from '../../assets/christmast.jpg';
import img2 from '../../assets/newyear.jpg';
import img3 from '../../assets/cny.jpg';
import img4 from '../../assets/raya.jpg';

const EventList = [
    {
        id: 1,
        title: "Penang Food Festival",
        img: img1,
        description: "Experience the best of Penang's culinary delights at this amazing food festival. Sample local delicacies and international cuisine.",
        startDate: "2025-01-01",
        endDate: "2025-01-03",
        location: "Georgetown, Penang",
        highlights: [
            "Local Street Food",
            "Cooking Demonstrations",
            "Chef Competitions",
            "Food Workshops"
        ]
    },
    {
        id: 2,
        title: "Heritage Walking Tour",
        img: img2,
        description: "Join our daily heritage walking tours through the historic streets of Georgetown. Learn about the rich history and culture of Penang.",
        startDate: "2024-12-15",
        endDate: "2025-02-15",
        location: "Georgetown Heritage Area",
        highlights: [
            "Professional Guide",
            "Historical Sites",
            "Cultural Stories",
            "Photo Opportunities"
        ]
    },
    {
        id: 3,
        title: "Chinese New Year Festival",
        img: img3,
        description: "Immerse yourself in the vibrant traditions of Chinese New Year. Experience the rich cultural celebrations with lion dances, temple visits, and traditional performances.",
        startDate: "2025-02-09",
        endDate: "2025-02-24",
        location: "Armenian Street & Heritage Zone",
        highlights: [
            "Lion Dance Performances",
            "Traditional Market",
            "Cultural Shows",
            "Temple Fair"
        ]
    },
    {
        id: 4,
        title: "Hari Raya Aidilfitri",
        img: img4,
        description: "Celebrate the joyous occasion of Hari Raya with the community. Experience the warmth of Malaysian hospitality with open houses and cultural festivities.",
        startDate: "2025-04-22",
        endDate: "2025-04-23",
        location: "Various locations in Penang",
        highlights: [
            "Open House Celebrations",
            "Traditional Cuisine",
            "Cultural Performances",
            "Community Gatherings"
        ]
    }
];

// Helper function to determine event status
const determineEventStatus = (startDate, endDate) => {
    const now = new Date();
    const start = new Date(startDate);
    const end = new Date(endDate);
    
    // For demo purposes, let's make the Heritage Walking Tour appear as happening now
    if (start <= now && now <= end) {
        return "HAPPENING NOW";
    } else if (now < start) {
        return "COMING SOON";
    } else {
        return "ENDED";
    }
};

// Add status and formatted dates to each event
const processedEventList = EventList.map(event => {
    const status = determineEventStatus(event.startDate, event.endDate);
    return {
        ...event,
        status,
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