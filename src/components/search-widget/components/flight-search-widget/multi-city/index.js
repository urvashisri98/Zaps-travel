import React, { useState } from 'react';
import { ReactSVG } from 'react-svg';
import { useDispatch, useSelector } from 'react-redux';
import TravelDate from '../../../../cards/travel-date';
import closeSvg from '../../../../../images/x-close.svg';
import SearchAirport from '../../../../dropdowns/search-airport';
import { addAnotherCity, updateFlightFrom, updateFlightTo } from '../../../../../utils/slices/searchFlightSlice';
import './style.css';

const MultiCity = () => {
  const title = 'Departure Date';
  const metaTitle = 'Select a departure date';

  const { flightTo } = useSelector((state) => state.searchFlight);

  const dispatch = useDispatch();
  const [multiCity, setMultiCity] = useState([1]);

  return (
    <>
      {
        multiCity.map((key) => {
          return (
            <div className='multi-city-content2' key={key}>
              <SearchAirport searchAirportId={key}/>
              <TravelDate title={title} metaTitle={metaTitle}/>
              { key === 1 ?
                <div className='multi-city-add-another-city' onClick={() => {
                  setMultiCity([1,2]);
                  dispatch(addAnotherCity(true));
                  flightTo.length > key && dispatch(updateFlightFrom({ id: 2, data: flightTo[1]}));
                }}>
                  <div className='another-city-text'><span className='plus-icon'>+</span> Add Another City</div>
                </div> :  
                <>
                  <div className='multi-city-divider'></div>
                  <div className='multi-city-cross-icon' onClick={() => {
                    setMultiCity([1]);
                    dispatch(addAnotherCity(false));
                    dispatch(updateFlightFrom({ id: 2, data: {}}));
                    dispatch(updateFlightTo({ id: 2, data: {}}));
                  }}>
                    <ReactSVG src={closeSvg} />
                  </div>
                </>
              }
            </div>
          );
        })
      }
    </>
  );
};

export default MultiCity;