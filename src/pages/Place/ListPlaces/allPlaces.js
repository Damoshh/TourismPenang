import naturePlaces from './naturePlaces'; 
import foodPlaces from './foodPlaces'; 
import heritagePlaces from './heritagePlaces'; 
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
    ...naturePlaces,
    ...foodPlaces,
    ...heritagePlaces,
    ...entertainmentPlaces,
    ...hotelPlaces
  ]);



export default allPlaces;
