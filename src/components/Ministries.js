/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import Luc from '../assets/lucjasmin.jpg';

function Ministries() {
  return (
    <div>
      <h1 className="text-center mt-5 title">In the service of the Lord</h1>
      <div className="flex mb-4">
        <div className="w-1/2 mt-5">
          <img
            src={Luc}
            alt="Luc Jasmin"
            className="image"
          />
        </div>
        <div className="w-1/2 mt-5">
          <h2 className="text-center mt-5 sub-title">Pastor leads multilingual worship</h2>
          <h5 className="text-justify pr-5">
            Luc Jasmin started the multilingual, multicultural Jasmin Evangelical Ministries/Eglise
            Evangelique Maranatha in 2019, gathering English, French, Swahili and Creole speakers
            for worship and to minister to needs of the Haitian and African refugee community in
            Spokane, as well as support an orphanage and clinic in Haiti.
            <br />
            <br />
            "God has always been there for me along the way. Haiti has always had a place in my
            heart, because I always went back and forth," he said.

            Luc lived in Haiti through secondary school. At 16, he received a scholarship to
            study at New York University. Unable to understand classes, he went to Thomas
            Jefferson High School for a year and returned to NYU.
            <br />
            <br />
            After five years, he returned to Haiti to work for the Bank of Nova Scotia a few years.
            After marrying, he went to Northeastern University in Boston and earned a bachelor's in
            accounting.

            He lived there 35 years, teaching English, starting an accounting business, becoming
            regional vice president for Primerica Financial Services and teaching people about
            personal finance.

            His four children are Luc III who recently ran for City Council, plus an engineer,
            school teacher and police officer in Boston.
          </h5>
          <br />
          <h6><em>By Marijke Fakasiieiki</em></h6>
          <h6>
            <i>
              Source and full article:
              {' '}
              <a
                href="https://www.thefigtree.org/oct21/100121jasminhaiti.html"
                target="_blank"
                rel="noreferrer"
                className="credits"
              >
                The Fig Tree
              </a>
            </i>
          </h6>
        </div>
      </div>
    </div>
  );
}

export default Ministries;
