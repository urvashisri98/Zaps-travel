import React from 'react';
import SearchWidget from '../../components/search-widget';
import RecentSearches from '../../components/cards/recent-searches';
import Packages from '../../components/cards/packages';
import Offers from '../../components/cards/offers';
import RecentArticlesAndBlogs from '../../components/cards/recent-articles';
import Footer from '../../components/footer';
import FindTravelPerfection from '../../components/cards/travel-perfection';
import Newsletter from '../../components/newsletter';
import Advertisement from '../../components/ads';
import { useSelector } from 'react-redux';
import './style.css';


const HomePage = () => {
  const { flightTravelType, addAnotherCity } = useSelector((state) => state.searchFlight);
  return (
    <>
      <div className='home-container'>
        <div className='banner'>
          <div className='banner-image'>
            <div className='linear-gradient'></div>
          </div>
          <div className='text-header'>
            <div className='header1'>Helping Others</div>
            <div className='header2'>Live & Travel</div>
            <div className='header3'>Special offers to suit your plan</div>
          </div>
        </div>
        <div className='search-widget'>
          <SearchWidget />
        </div>
        <div className={flightTravelType === 'multiCity' && addAnotherCity ? 'home-content-enlarge' : flightTravelType === 'multiCity' ? 'home-content' : ''}>
          <div className='gradient1'></div>
          <div className='recent-searches'>
            <RecentSearches />
          </div>
          <div className='advertisement'>
            <Advertisement />
          </div>
          <div className='offers'>
            <Offers />
          </div>
          <div className='gradient2'></div>
          <div className='packages'>
            <Packages />
          </div>
          <div className='gradient3'></div>
          <div className='travel-perfection-background'></div>
          <div className='find-travel-perfection'>
            <FindTravelPerfection />
          </div>
          <div className='newsletter'>
            <Newsletter />
          </div>
          <div className='recent-articles-and-blogs'>
            <RecentArticlesAndBlogs />
          </div>
        </div>
        <div className='gradient4'></div>
        <div className='footer'>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default HomePage;