import React from 'react';
import EastIcon from '@mui/icons-material/East';
import './style.css';

const FlightResultHeader = () => {
  return (
    <div className='flightResultHeader'>
      <div className='flightResultHeaderContainer'>
        <div className='flightResultHeaderDivider1'>
          <div className='flightStartToEnd'>
            <div className='flightStart'>
              <label className='bLR'>BLR</label>
              <label>Banglore,IN</label>
            </div>
            <EastIcon />
            <div className='flightEnd'>
              <label className='bLR'>BOM</label>
              <label>Banglore,IN</label>
            </div>
          </div>
          <div className='border'></div>
          <div className='departurePassengersCabin'>
            <div className='departures'>
              <label className='flightdeparture'>Departure</label>
              <label className='flightDate'>Wed,28/06</label>
            </div>
            <div className='passenger'>
              <label className='flightdeparture'>Passengers</label>
              <label className='flightDate'>1</label>
            </div>
            <div className='cabin'>
              <label className='flightdeparture'>Cabin</label>
              <label className='flightDate'>Economy</label>
            </div>
          </div>
        </div>
        <div className='flightResultHeaderDivider2'>
          <div className='modifySearch'>Modify Search</div>
        </div>
      </div>
    </div>
  );
};

export default FlightResultHeader;
