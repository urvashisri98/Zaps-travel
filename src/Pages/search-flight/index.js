import React from 'react';
import Newflightbooking from '../../components/book-flight-result';
import FlightResultHeader from '../../components/flight-result-header';

const SearchFlight = () => {
  return (
    <div>
      <FlightResultHeader />
      <Newflightbooking/>
    </div>
  );
};

export default SearchFlight;