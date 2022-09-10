import React from 'react';
import Logo from '../assets/logo.png';

function Hero() {
  return (
    <div className="flex justify-center align-center">
      <div className="flex flex-col md:flex-row md:max-w-xl rounded-lg bg-transparent h-96 shadow-lg mt-8">
        <img
          className=" w-full h-96 md:h-auto object-cover md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg"
          src={Logo}
          alt="Jasmin Ministries"
        />
        <div className="p-6 flex flex-col justify-start">
          <h3 className="text-gray-900 text-xl font-medium mb-2">Words of the Lord</h3>
          <h4 className="text-gray-700 text-base mb-4">
            A new commandment I give to you, that you love one another:
            just as I have loved you, you also are to love one another.
          </h4>
          <p className="text-gray-600 text-s">John 13:34</p>
          <br />
          <h2 className="text-white text-xl">Welcome to the House of the Lord</h2>
        </div>
      </div>
    </div>
  );
}

export default Hero;
