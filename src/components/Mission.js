import React from 'react';
import MissionChurch from '../assets/pexels-luis-quintero-2019331.jpg';

function Mission() {
  return (
    <div>
      <hr />
      <h2 className="text-center mt-5 title">Mission</h2>
      <div className="flex mb-4">
        <div className="w-1/2 mt-5">
          <p className="mt-5 text-justify pl-5">
            The church mission is to help children to grow in fear of the Lord and become
            better citizens of the world tomorrow. To help and serve the people in our area
            fighting against homelessness and lack of care. Bring forefront human rights and
            preserve dignity and decency for the members of our community and mostly to
            proclaim the love.
            The gospel of Jesus Christ.
          </p>
        </div>
        <div className="w-1/2 mt-5">
          <img
            src={MissionChurch}
            alt="Maranatha Evangelical Church"
            className="image-1"
          />
        </div>
      </div>
    </div>
  );
}

export default Mission;
