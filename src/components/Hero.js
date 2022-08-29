import React, { useState, useEffect } from 'react';
import Api from '../utility/Api';
import Logo from '../assets/logo.png';

function Hero() {
  const [Verse, setVerse] = useState(null);

  useEffect(() => {
    Api(setVerse);
  }, []);

  return (
    <div className="flex justify-center card">
      <div className="flex flex-col md:flex-row md:max-w-xl rounded-lg bg-white shadow-lg">
        <img
          className=" w-full h-96 md:h-auto object-cover md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg"
          src={Logo}
          alt="Jasmin Ministries"
        />
        {Verse && Verse.map((vst) => (
          <div className="p-6 flex flex-col justify-start" key={vst.id}>
            <h5 className="text-gray-900 text-xl font-medium mb-2">Verse of the day</h5>
            <p className="text-gray-700 text-base mb-4">
              This is a wider card with supporting text below as a natural lead-in
              to additional content.
              This content is a little bit longer.
            </p>
            <p className="text-gray-600 text-xs">Last updated 3 mins ago</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Hero;
