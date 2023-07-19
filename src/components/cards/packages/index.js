import React from 'react';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { packagesData } from '../../../config';
import { ReactSVG } from 'react-svg';
import FlightSvg from '../../../images/airplane-package.svg';
import HotelSvg from '../../../images/hotel-package.svg';
import ActivitySvg from '../../../images/activity-package.svg';
import TransferSvg from '../../../images/truck-package.svg';
import './style.css';

const Packages = () => {
  return (
    <>
      <div className='header'>
        <div className='info'>
          <div className='title'>Best Tour <span className='text'>Packages</span></div>
          <div className='subheading'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod </div>
        </div>
        <div className='view-all-packages'>
          View All Packages
        </div>
      </div>
      <div className='back-arrow-package'>
        <ArrowBackIcon className='back-arrow-package-icon' />
      </div>
      <div className='forward-arrow-package'>
        <ArrowForwardIcon className='forward-arrow-package-icon' />
      </div>
      <div className='packages-cards'>
        {
          packagesData.map((item) => {
            const {id, image, place, content, price, info: {
              highlights, itinerary, metaTitle, offeredPrice, prevPrice, title, totalActivities, totalFlights, totalHotels, totalTransfers
            } } = item;
            return (
              <div className='flip-package-card' key={id}>
                <div className='flip-package-card-inner'>
                  <div className='package-card-front' style={{ backgroundImage: `url(${image})`}}>
                    <div className='place-button'>
                      <span className='text'>{place}</span>
                    </div>
                    <div className='itinerary'>{content}</div>
                    <div className='price'>{price}</div>
                  </div>
                  <div className='package-card-back'>
                    <div className='package-card-back-container'>
                      <div className='back-title'>{title}</div>
                      <div className='back-description'>{metaTitle}</div>
                      <div className='package-info'>
                        <div className='total-flights'>
                          <ReactSVG src={FlightSvg} className='total-flights-icon'/>
                          <div className='total-flights-number'>{totalFlights} Flights</div>
                        </div>
                        <span className='back-divider'></span>
                        <div className='total-hotels'>
                          <ReactSVG src={HotelSvg} className='total-hotels-icon'/>
                          <div className='total-hotels-number'>{totalHotels} Hotels</div>
                        </div>
                        <span className='back-divider'></span>
                        <div className='total-activities'>
                          <ReactSVG src={ActivitySvg} className='total-activity-icon'/>
                          <div className='total-activity-number'>{totalActivities} Activities</div>
                        </div>
                        <span className='back-divider'></span>
                        <div className='total-transfers'>
                          <ReactSVG src={TransferSvg} className='total-transfer-icon'/>
                          <div className='total-transfer-number'>{totalTransfers} Transfers</div>
                        </div>
                      </div>
                      <div className='package-itinerary'>
                        {
                          itinerary && itinerary.map((destination) => {
                            const {days, id, place} = destination;
                            return (
                              <div className='itinerary-content' key={id}>{days}N {place}</div>
                            );
                          })
                        }
                      </div>
                      <div className='package-highlights'>
                        {
                          highlights.map((highlight, i) => {
                            return (
                              <li className='package-highlights-data' key={i}>{highlight}</li>
                            );
                          })
                        }
                      </div>
                      <div className='package-price'>
                        <span className='prev-price'>{prevPrice}</span> 
                        <span className='offered-price'>{offeredPrice}</span>
                        <div className='person-text'>per person</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </>
  );
};

export default Packages;