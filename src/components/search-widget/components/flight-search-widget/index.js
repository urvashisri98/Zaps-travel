import React, { useState } from 'react';
import MultiCity from './multi-city';
import SearchIcon from '@mui/icons-material/Search';
import TravelDate from '../../../cards/travel-date';
import { useDispatch, useSelector } from 'react-redux';
import FlightClass from '../../../dropdowns/flight-class';
import SearchAirport from '../../../dropdowns/search-airport';
import TotalTravellers from '../../../dropdowns/total-persons';
import { flightTravelTypeData, flightTypeData } from '../../../../config';
import { updateFlightFrom, updateFlightTravelType, updateFlightType } from '../../../../utils/slices/searchFlightSlice';
import './style.css';

const FlightSearchWidget = () => {

  const { flightTravelType, flightType, flightTo, errors } = useSelector(state => state.searchFlight);

  const [travelType, setTravelType] = useState(flightTravelType);
  const [type, setType] = useState(flightType);
  const [isNonStopTrue, setIsNonStopTrue] = useState(false);

  const dispatch = useDispatch();

  const handleFlightTravelType = (e) => {
    const value = e.target.value;
    setTravelType(value);
    dispatch(updateFlightTravelType(value));
    value === 'multiCity' && dispatch(updateFlightFrom({ id: 1, data: flightTo[0]}));
  };

  const handleFlightType = (e) => {
    const nonStop = isNonStopTrue ? false : true;
    setIsNonStopTrue(nonStop);
    const value = nonStop ? e.target.value : '';
    setType(value);
    dispatch(updateFlightType(value));
  };

  const handleSearchClick = () => {
    if(errors.length <= 0) {
      console.log('Searching flights...');
    }
  };

  return (
    <div className='section2-flight'>
      <div className='content1'>
        <div className='radio-button-group'>
          {
            flightTravelTypeData && Object.entries(flightTravelTypeData).map(([key, value]) => {
              return (
                <div className='radio-label-background' key={key} style={{ backgroundColor: travelType === key ? '#fff' : '#B8BEC4'}}>
                  <label className='radio-group'> 
                    <span className='radio-text'>{value}</span>
                    <input type="radio" id={key} name={key} value={key} checked={key === travelType} onChange={(e) => handleFlightTravelType(e)}/>
                    <span htmlFor={key} className='radio-icon'></span>
                  </label>
                </div>
              );
            })
          }
        </div>
        <div>
          {
            flightTypeData && Object.entries(flightTypeData).map(([key, value]) => {
              return (
                <label className='checkbox-group' key={key}> 
                  <span className='checkbox-text'>{value}</span>
                  <input type="checkbox" id={key} name={key} value={key} checked={key === type} onChange={(e) => handleFlightType(e)}/>
                  <span htmlFor={key} className='checkbox-icon'></span>
                </label>
              );
            })
          }
        </div>
      </div>
      <div className='content2'>
        <SearchAirport searchAirportId={0}/>
        <TravelDate title='Departure Date' metaTitle='Select a departure date' />
        { travelType !== 'multiCity' && <TravelDate title='Return Date' metaTitle='Book a round trip to save more' /> }
        <div className={travelType === 'multiCity' ? 'user-info-enlarge' : 'user-info'}>
          <FlightClass />
          <TotalTravellers />
        </div>
        <div className='search-flight-button' onClick={handleSearchClick}>
          <SearchIcon className='search-icon'/>
        </div>
      </div>
      { travelType === 'multiCity' && <MultiCity /> }
    </div>  
  );
};

export default FlightSearchWidget;