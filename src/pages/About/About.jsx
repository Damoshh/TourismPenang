import React from "react";
import Content from './Content/Content'
import Header from '../../components/Header/Header'
import imgAbout from '../../assets/about0.jpg'
import './About.css'

const About = () => {
  return (
      <div className="about-page">
        <Header        
        headerImg = {imgAbout}
        title="ABOUT PENANG"
        text="Our Mission: To promote the rich heritage, culture, and beauty of Penang."/>
        <Content/>
      </div>
  );
};

export default About;