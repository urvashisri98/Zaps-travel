import React from 'react';
import { ReactSVG } from 'react-svg';
import { domesticSearchFlightData } from '../../../config';
import BaggageSvg from '../../../images/baggage.svg';
import InfoSvg from '../../../images/info-circle.svg';
import ClockSvg from '../../../images/clock.svg';
import DashedSvg from '../../../images/dashed-line.svg';
import PlanelineSvg from '../../../images/plane-line.svg';
import './style.css';

const DomesticSearchFlight = () => {
  return (
    domesticSearchFlightData && domesticSearchFlightData.map((flight) => {
      const { id, image, airlineCode, airlineName, departureCityOrCountry, departureTime, arrivalCityOrCountry, arrivalTime, flightType, price, totalTimeTaken} = flight;
      return (
        <div className='domestic-search-card' key={id}>
          <div className='domestic-search-details'>
            <div className='content1'>
              <div style={{ backgroundImage: `url(${image})`}} className='domestic-search-airline-icon'/>
              <div className='domestic-search-airline-name'>{airlineName}</div>
              <div className='domestic-search-airline-code'>{airlineCode}</div>
            </div>
            <div className='content2'>
              <div className='domestic-search-time'>{departureTime}</div>
              <div className='domestic-search-city'>{departureCityOrCountry}</div>
            </div>
            <div className='content3'>
              <div className='domestic-search-time-taken'>
                <ReactSVG src={ClockSvg} />
                {totalTimeTaken}
              </div>
              <div className='domestic-search-way'>
                <ReactSVG src={DashedSvg} />
                <div className='domestic-search-way-text'>{flightType}</div>
                <ReactSVG src={DashedSvg} />
                <ReactSVG src={PlanelineSvg} className='domestic-search-plane-line-icon'/>
              </div>
            </div>
            <div className='content4'>
              <div className='domestic-search-time'>{arrivalTime}</div>
              <div className='domestic-search-city'>{arrivalCityOrCountry}</div>
            </div>
          </div>
          <div className='domestic-search-bottom'>
            <div className='domestic-search-options'>
              <div className='domestic-search-baggage-options'>
                <ReactSVG src={BaggageSvg} className='domestic-search-baggage-icon'/>
                Baggage options 
              </div>
              <div className='domestic-search-details-bottom'>
                Flight Details
              </div>
            </div>
            <div className='domestic-search-price-details'>
              <div className='domestic-search-price-info'>
                Total (incl. tax)
                <ReactSVG src={InfoSvg} className='domestic-search-info-icon'/>
              </div>
              <div className='domestic-search-price'>
                {price}
              </div>
            </div>
          </div>
        </div>
      );
    })
  );
};

export default DomesticSearchFlight;