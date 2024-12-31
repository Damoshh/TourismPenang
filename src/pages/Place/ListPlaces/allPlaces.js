import beachPlaces from './beachPlaces'; 
import foodPlaces from './foodPlaces'; 
import culturePlaces from './culturePlaces'; 
import entertainmentPlaces from './entertainmentPlaces'; 
import hotelPlaces from './hotelPlaces'; 

  const shuffleArray = (array) => {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  }
  
const allPlaces = shuffleArray([
    ...beachPlaces,
    ...foodPlaces,
    ...culturePlaces,
    ...entertainmentPlaces,
    ...hotelPlaces
  ]);



export default allPlaces;
