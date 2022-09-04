import React from 'react';
import Music from '../assets/activity-1.jpeg';
import Orphanage from '../assets/activity.jpeg';

function Activities() {
  return (
    <div className="container">
      <h1 className="text-center mt-5 title">Get involved</h1>
      <div className="flex justify-center mb-4 hover:flex">
        <div className="w-1/2 mt-5">
          <div className="max-w-sm rounded overflow-hidden shadow-lg">
            <img className="w-full h-auto" src={Music} alt="Sunset in the mountains" />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2 text-center">Art and creativity</div>
              <p className="text-gray-700 text-base">
                Music lessons for children as after school program Monday-Friday at: 3:30 PM -5: PM
              </p>
            </div>
            <div className="px-6 pt-4 pb-2">
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#music</span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#children</span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#improvements</span>
            </div>
          </div>
        </div>
        <div className="w-1/2 mt-5">
          <div className="max-w-sm rounded overflow-hidden shadow-lg">
            <img className="w-full h-auto" src={Orphanage} alt="Sunset in the mountains" />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2 text-center">Art and creativity</div>
              <p className="text-gray-700 text-base">
                Music lessons for children as after school program Monday-Friday at: 3:30 PM -5: PM
              </p>
            </div>
            <div className="px-6 pt-4 pb-2">
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#orphange</span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#caring</span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#children</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Activities;
