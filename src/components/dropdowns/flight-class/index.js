import React, { useState } from 'react';
import { flightClassData } from '../../../config';
import { useSelector, useDispatch } from 'react-redux';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { updateFlightClassType } from '../../../utils/slices/searchFlightSlice';
import AirlineSeatReclineExtraIcon from '@mui/icons-material/AirlineSeatReclineExtra';
import './style.css';

const FlightClass = () => {
  const dispatch = useDispatch();
  const { flightClassType } = useSelector(state => state.searchFlight);

  const [showFlightClassDropdown, setShowFlightClassDropdown] = useState(false);  
  const [flightClass, setFlightClass] = useState(flightClassType);

  const handleFlightClassType = (value) => {
    setFlightClass(value);
    dispatch(updateFlightClassType(value));
  };

  return (
    <div className='flight-class' onClick={() => setShowFlightClassDropdown(!showFlightClassDropdown)}>
      <div className='seat-icon'>
        <AirlineSeatReclineExtraIcon/>
      </div>
      <div className="flight-class-dropdown">
        <div className='dropdown-value'>{flightClass}</div>
        <KeyboardArrowDownIcon className='flight-class-dropdown-icon'/>
      </div>
      {
        showFlightClassDropdown && 
        <div className='flight-class-options-group'>
          {
            Object.entries(flightClassData).map(([key, value]) => {
              return <div className='flight-class-option' key={key} onClick={() => handleFlightClassType(value)}>
                <div className='option-text'>{value}</div>
              </div>;
            })
          }
        </div>
      }
    </div>
  );
};

export default FlightClass;