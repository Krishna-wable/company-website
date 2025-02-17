import React from 'react';
import './Intro.css';
import banner_top from '../Assets/banner_top.jpg';

const Intro = () => {
  return (
    <div className="Intro">
      <img src={banner_top} alt="Banner" className="banner" />
      
      
      <section className="values">
        <h2>Our Values</h2>
        <h4>eTechno Lab is a Software Services company, 
          provides IT solutions to our clients with our 
          core values Collaborative spirit, Integrity, and Serenity.</h4>
        <div className="value-list">
          <div className="value-item">
            <h3>Collaborative Spirit</h3>
            <p>Talent wins games, but teamwork and intelligence win championships.</p>
          </div>
          <div className="value-item">
            <h3>Expert Thinking</h3>
            <p>Our expert and experienced team provides the ultimate solution for the client's query.</p>
          </div>
          <div className="value-item">
            <h3>Integrity</h3>
            <p>To give real service, we add something that cannot be bought or measured with money—integrity.</p>
          </div>
          <div className="value-item">
            <h3>Client Serenity</h3>
            <p>We do everything with clarity because clarity brings serenity.</p>
          </div>
        </div>
      </section>

      
      <section className="services">
        <h2>Our Services</h2>
        <p>Think Big. We make IT possible! As a top-notch custom software development company, we help bridge the gap between you and success.</p>
        <div className="service-list">
          <span>App Development</span>
          <span>Web Development</span>
          <span>AWS</span>
          <span>DevOps</span>
          <span>Digital Marketing</span>
          <span>Translation</span>
          <span>IoT Development</span>
        </div>
      </section>

      
      <section className="skills">
        <h2>Our Skills</h2>
        <div className="skill-list">
          <span>React.js</span>
          <span>AWS</span>
          <span>Python</span>
          <span>Node.js</span>
        </div>
      </section>
    </div>
  );
};

export default Intro;
