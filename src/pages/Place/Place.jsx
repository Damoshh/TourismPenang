import React from 'react'
import SearchPlace from './SearchPlace/SearchPlace'
import './Place.css'
import penangBg from '../../assets/imgPlace.webp';


const Place = () => {
  return (
    <>
    <div className='place-page'>
            <div 
              className="page-header"
              style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${penangBg})`
              }}
            >
              <h1>Discover Penang's Finest</h1>
              <p>Explore the best places to eat, stay, and experience in Penang. From local delicacies to cultural landmarks, find your next destination here.</p>
            </div>
      <SearchPlace/>
    </div>
    </>
  )
}

export default Place
