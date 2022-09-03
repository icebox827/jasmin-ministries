import React from 'react';
import Worship from '../assets/pexels-luis-quintero-2774570.jpg';

function Services() {
  return (
    <div className="flex mb-4">
      <div className="w-1/2">
        <img
          className="worship"
          src={Worship}
          alt="Jasmin Ministries"
        />
      </div>
      <div className="w-1/2 bg-gray-200">
        <h1 className="text-center mt-5 title">Come and Worship with us</h1>
        <hr />
        <h2 className="text-center mt-5 sub-title">
          Maranatha Evangelical Church
          <br />
          631 S. Richard Allen Ct. Spokane WA 99202
          <br />
          <br />
          Sundays at: 10:30AM
        </h2>
        <h3 className="text-center mt-5 sub-title">
          For Prayer request:
          <br />
          509-389-4539
        </h3>
      </div>
    </div>
  );
}

export default Services;
