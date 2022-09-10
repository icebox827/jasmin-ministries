/* eslint-disable import/no-named-as-default */
/* eslint-disable import/no-named-as-default-member */
import React from 'react';
import Hero from '../components/Hero';
import Services from '../components/Services';

function Home() {
  return (
    <div
      className="container mx-auto home"
      sm
      md
      lg
      xl
      xxl
      xxxl
    >
      <div className="hero">
        <Hero
          sm
          md
          lg
          xl
          xxl
          xxxl
        />
      </div>
      <div className="services">
        <Services
          sm
          md
          lg
          xl
          xxl
          xxxl
        />
      </div>
    </div>
  );
}

export default Home;
