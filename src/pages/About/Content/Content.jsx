import React from 'react'
import './Content.css'

const Content = () => {
  return (
    <>
      <div className="content-section">
        <h2 className="section-title">Geography</h2>
        <p className="section-text">
          Located in the northwest corner of Peninsular Malaysia, Penang comprises two main areas: 
          Penang Island, where the capital city, George Town, is situated, and Seberang Perai, 
          the mainland area connected to the island by the Penang Bridge and the Sultan Abdul 
          Halim Muadzam Shah Bridge. Penang's strategic location along the Strait of Malacca 
          has historically made it a bustling hub of trade and culture.
        </p>
        <img className="section-image" src="src/assets/geo-penangg.jpg" alt="Penang Geography" />
        
        <h2 className="section-title">Area and Climate</h2>
        <p className="section-text">
          Penang spans an area of approximately 1,048 square kilometers, with Penang Island 
          covering about 293 square kilometers and Seberang Perai making up the rest. The state 
          experiences a warm tropical climate, with temperatures ranging from 23°C to 32°C, 
          making it an inviting destination year-round for both tourists and locals.
        </p>

        <h2 className="section-title">People and Culture</h2>
        <p className="section-text">
          Penang's population reflects Malaysia's multicultural fabric, with a blend of Malays, 
          Chinese, Indians, and other ethnic groups. The Chinese community makes up a significant 
          portion of the state's population, followed by Malays and Indians.
        </p>
        <img className="section-image" src="src/assets/culture.jpg" alt="Penang Culture" />
      </div>

      <div className="content-section">
        <h2 className="section-title">Official Religion</h2>
        <p className="section-text">
          Islam is the official religion in Penang, as it is in Malaysia, but other religions, 
          such as Buddhism, Hinduism, and Christianity, are practiced freely, reflecting the 
          state's cultural harmony.
        </p>

        <h2 className="section-title">National Language</h2>
        <p className="section-text">
          The national language, Bahasa Melayu (Malay), is widely spoken in Penang. However, 
          English is commonly used, particularly in business and tourism. Penang's Chinese 
          community speaks various dialects, including Hokkien, Cantonese, and Mandarin, while 
          the Indian community often speaks Tamil. This multilingualism is a defining 
          characteristic of the state's vibrant identity.
        </p>
        <img className="section-image" src="src/assets/religion.webp" alt="Religious Diversity" />
      </div>
    </>
  )
}

export default Content
