import React from 'react';
import AirplanemodeActiveIcon from '@mui/icons-material/AirplanemodeActive';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

import './style.css';

const RecentSearches = () => {
  return (
    <>
      <div className='title'>Your Recent <span className='text'>Searches</span></div>
      <div className='recent-search-cards'>
        { [1,2,3,4].map((i) => {
          return (
            <div className='recent-search-card' key={i}>
              <div className='recent-search-time'>1hour ago</div>
              <div className='recent-search-content'>
                <div className='recent-search-details'>
                  <div className='recent-search-trip-type'>One Way Trip</div>
                  <div className='recent-search-city-details'>
                    <AirplanemodeActiveIcon className='recent-search-flight-icon'/>
                    <div className='recent-search-from-city'>Bangalore</div>
                    <ArrowForwardIcon className='recent-search-arrow-icon' />
                    <div className='recent-search-to-city'>Mumbai</div>
                  </div>
                  <div className='recent-search-date'>Wed, 29 June</div>
                  <div className='recent-search-flight-details'>Economy - 1 Traveler</div>
                </div>
                <div className='recent-search-flight-side-card'>
                  <AirplanemodeActiveIcon className='recent-search-flight-icon'/>
                </div>
              </div>
              <div className='recent-search-button'>Search</div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default RecentSearches;