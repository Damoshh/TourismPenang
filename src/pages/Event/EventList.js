import img1 from '../../assets/christmast.jpg';
import img2 from '../../assets/img2.jpg';
import img3 from '../../assets/img3.jpg';
import img4 from '../../assets/img4.jpg';
import img5 from '../../assets/img5.jpg';
import img7 from '../../assets/img7.jpg';
import img8 from '../../assets/img8.jpg';
import img9 from '../../assets/img9.jpg';
import img10 from '../../assets/img10.jpg';
import img11 from '../../assets/img11.jpg';
import img12 from '../../assets/img12.jpg';


const EventList = [
    {
        id: 1,
        title: "Christmas Food Market",
        img: img1,
        description: "Join us for festive treats and holiday cheer.",
        startDate: "2024-12-20", 
        endDate: "2025-03-10",    
        location: "Georgetown, Penang",
        locationLink: "https://maps.app.goo.gl/xawSgqgm45CU34jVA"
      },
      {
        id: 3,
        title: "The Return of Raja Durian",
        img: img3,
        description: "Join us for treating yourself with eating the king of fruit",
        startDate: "2024-11-16", 
        endDate: "2025-03-09",    
        location: "Georgetown, Penang",
        locationLink: "https://maps.app.goo.gl/iU3P8VPj6DsoBBJz7"
      },
      {
        id: 4,
        title: "New Year Countdown Party",
        img: img4,
        description: "Join us for celebrating the new year and enjoying some party.",
        startDate: "2024-12-31", 
        endDate: "2025-01-01",    
        location: "Tanjung Bungah, Penang",
        locationLink: "https://maps.app.goo.gl/WW7dQwMzCE8Q1Y8Z6"
      },
  
      {
        id: 5,
        title: "KBJ Bazar Ramadan",
        img: img5,
        description: "the Bazaar Ramadan sells everything from traditional kuih-muih, Malay and international cuisine, to make your “Hari Raya” festive a memorable one.",
        startDate: "2025-03-02", 
        endDate: "2025-03-30",    
        location: "Bayan lepas, Penang",
        locationLink: "https://maps.app.goo.gl/YJnk5jEq9pH6LHYj9"
      },
  
      {
        id: 7,
        title: "Malaysia International Show",
        img: img7,
        description: "Featuring global manufacturers and top professionals, it offers hobbyists a chance to learn, compete, and connect. Don't miss this premier event for model enthusiasts!",
        startDate: "2025-06-14", 
        endDate: "2025-06-15",    
        location: "Georgetown, Penang",
        locationLink: "https://maps.app.goo.gl/mZQxR39BGowMJ43o7"
      },
  
      {
        id: 8,
        title: "Penang Bridge Anniversary",
        img: img8,
        description: "Honor the historical significance of the Penang Bridge as a cornerstone of Penang’s development.",
        startDate: "2025-08-01", 
        endDate: "2025-08-03",    
        location: "Georgetown, Penang",
        locationLink: "https://maps.app.goo.gl/6Fv6DqPaQr1nQBDk9"
      },
  
      {
        id: 9,
        title: "Malaysia Day celebration",
        img: img9,
        description: "Join us for an unforgettable celebration filled with joy, culture, and community spirit, as we honor Malaysia’s heritage together!",
        startDate: "2025-09-06", 
        endDate: "2025-09-06",    
        location: "Bayan Lepas, Penang",
        locationLink: "https://maps.app.goo.gl/YJnk5jEq9pH6LHYj9"
      },

      {
        id: 10,
        title: "Penang Marathon (PBIM)",
        img: img10,
        description: "The run is held annually on the Penang Bridge, the iconic bridge that connects Penang Island to Penang Mainland.",
        startDate: "2024-12-15", 
        endDate: "2024-12-16",    
        location: "Simpang Ampat, Penang",
        locationLink: "https://maps.app.goo.gl/Yyig3jCTnPmKF75H6"
      },

      {
        id: 11,
        title: "Literary festival",
        img: img11,
        description: " It illustrates the importance of literature in expressing the spirit of urban experiences.",
        startDate: "2024-11-29", 
        endDate: "2024-12-01",    
        location: "George Town, Penang",
        locationLink: "https://maps.app.goo.gl/q2vdua39puYqVMHd7"
      },

      {
        id: 12,
        title: "Pesta Pulau Pinang ",
        img: img12,
        description: "Join us for enjoying the night in Penang.",
        startDate: "2024-12-20", 
        endDate: "2025-03-01",    
        location: "Bayan Lepas, Penang",
        locationLink: "https://maps.app.goo.gl/KFSQ7eUAr3Pdb8in9"
      },



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