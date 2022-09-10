import React from 'react';
import Music from '../assets/activity-1.jpeg';
import Orphanage from '../assets/activity.jpeg';

function Activities() {
  return (
    <div className="container">
      <h1 className="text-center mt-5 title">Get involved</h1>
      <div className="flex mb-4 justify-center involved">
        <div className="sm:w-full md:w-full lg:w-1/2 xl:w-1/2 xxl:w-1/2 xxxl:w-1/2 mt-5">
          <div className="max-w-md rounded overflow-hidden shadow-lg card">
            <img className="w-full h-auto" src={Music} alt="Sunset in the mountains" />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2 text-center">Art and creativity</div>
              <p className="text-gray-700 text-base">
                Music lessons for children as after school program Monday-Friday at: 3:30 PM -5: PM
              </p>
            </div>
            <div className="px-6 pt-4 pb-2">
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 text-center">#music</span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 text-center">#children</span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 text-center">#improvements</span>
            </div>
          </div>
        </div>
        <div className="sm:w-full md:w-full lg:w-1/2 xl:w-1/2 xxl:w-1/2 xxxl:w-1/2 mt-5">
          <div className="max-w-md rounded overflow-hidden shadow-lg card">
            <img className="w-full h-auto" src={Orphanage} alt="Sunset in the mountains" />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2 text-center">Art and creativity</div>
              <p className="text-gray-700 text-base">
                Music lessons for children as after school program Monday-Friday at: 3:30 PM -5: PM
              </p>
            </div>
            <div className="px-6 pt-4 pb-2">
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 text-center">#orphange</span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 text-center">#caring</span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 text-center">#children</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Activities;
