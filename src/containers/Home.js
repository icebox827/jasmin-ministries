/* eslint-disable import/no-named-as-default */
/* eslint-disable import/no-named-as-default-member */
import React from 'react';
import Hero from '../components/Hero';
import Services from '../components/Services';

function Home() {
  return (
    <div className="container mx-auto">
      <div className="hero">
        <Hero />
      </div>
      <div className="services">
        <Services />
      </div>
    </div>
  );
}

export default Home;
