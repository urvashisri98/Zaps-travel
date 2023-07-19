import React from 'react';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import './style.css';

const BookFlightHeader = () => {
  return (
    <>
      <div className='detailAboutFlights'>
        <div className='airlinesName'>Airlines</div>
        <div className='departureDurationArrival'>
          <div className='Departure'>Departure</div>
          <div className='Duration'>Duration</div>
          <div className='arrival'>Arrival</div>
        </div>
        <div className='Price'>
              Price
          <ArrowUpwardIcon
            sx={{
              color: '#0088FF',
              fontSize: 18,
            }}
          />
        </div>
      </div>
    </>
  );
};

export default BookFlightHeader;