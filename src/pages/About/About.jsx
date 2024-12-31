import React from "react";
import "./About.css";

const About = () => {
  return (
    <>
    <div className="about-content">
      {/* Background Image */}
      <img
        className="Background-Photo"
        src="src/assets/penang-about.jpg"
        alt="Penang Try"
      />

      {/* Text Overlay */}
      <div className="Sentence">
        <h1>ABOUT PENANG</h1>
        <p>Our Mission: To promote the rich heritage, culture, and beauty of Penang.</p>
      </div>
    </div>
    

      {/*Description */}
      <div className ="Geography">
        <h2>Geography </h2>
        <p2>
        Located in the northwest corner of Peninsular Malaysia, Penang comprises two main areas: Penang Island, where the capital city, George Town, 
        is situated, and Seberang Perai, the mainland area connected to the island by the Penang Bridge and the Sultan Abdul Halim Muadzam Shah Bridge.
        Penang's strategic location along the Strait of Malacca has historically made it a bustling hub of trade and culture.
        </p2>
        <img className="Geo" src="src/assets/geo-penangg.jpg" alt="hehe" />
        <h3>Area and Climate</h3>
        <p3>
          Penang spans an area of approximately 1,048 square kilometers, with Penang Island covering about 293 square kilometers 
          and Seberang Perai making up the rest. The state experiences a warm tropical climate, with temperatures ranging from 23°C to 32°C, 
          making it an inviting destination year-round for both tourists and locals.
        </p3>
        <h4>People And Culture</h4>
        <p4>
        Penang's population reflects Malaysia's multicultural fabric, with a blend of Malays, Chinese, Indians, and other ethnic groups. 
        The Chinese community makes up a significant portion of the state's population, followed by Malays and Indians.

        Penang's rich cultural diversity is evident in its vibrant festivals, historic landmarks, and culinary scene. 
        Known as Malaysia's food capital, Penang offers an incredible mix of dishes influenced by Malay, Chinese, Indian, Peranakan, and European cuisines. Char Kway Teow, Penang Laksa, and Nasi Kandar are among the must-try dishes.

        The state's unique heritage is further enriched by its art and music scenes, as well as its traditional crafts, such as batik 
        </p4>
      </div>

        <div>
            <img className="Culture" src="src/assets/culture.jpg" alt="culture" />
            <div className="Religion">
              <h1>
                Official Religion
              </h1>
              <p1>
              Islam is the official religion in Penang, as it is in Malaysia, but other religions, such as Buddhism, Hinduism, and Christianity, are practiced freely, reflecting the state's cultural harmony.
              </p1>
              <h2>
                National Language
              </h2>
              <p2>
              The national language, Bahasa Melayu (Malay), is widely spoken in Penang. However, English is commonly used, particularly in business and tourism. 
              Penang's Chinese community speaks various dialects, including Hokkien, Cantonese, and Mandarin, while the Indian community often speaks Tamil. This multilingualism is a defining characteristic of the state's vibrant identity.
              </p2>
              <img className="language" src="src/assets/religion.webp" alt="religion" />
            </div>

        </div>
      </>
 
  );
};

export default About;