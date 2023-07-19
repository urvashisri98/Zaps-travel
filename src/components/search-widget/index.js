import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import FlightTakeoffIcon from '@mui/icons-material/FlightTakeoff';
import HotelIcon from '@mui/icons-material/Hotel';
import FlightSearchWidget from './components/flight-search-widget';
import HotelSearchWidget from './components/hotel-search-widget';
import { changeSearchWidgetType } from '../../utils/slices/globalSlice';
import './style.css';

const SearchWidget = () => {

  const dispatch = useDispatch();
  const [searchWidgetType, setSearchWidgetType] = useState(1);

  const handleSearchWidgetType = (value) => {
    setSearchWidgetType(value);
    dispatch(changeSearchWidgetType(value));
  };

  return (
    <>
      <div className='search-widget-container'>
        <div className={searchWidgetType === 1 ? 'card-component-flight' : 'card-component-hotel'}>
          <div className='section1'>
            <div className={searchWidgetType === 1 ? 'select-flight-active' : 'select-flight'} onClick={() => handleSearchWidgetType(1)}>
              <FlightTakeoffIcon className='select-flight-icon'/>
              <div className='text'>Flight</div>
            </div>
            <div className={searchWidgetType === 0 ? 'select-hotel-active' : 'select-hotel'} onClick={() => handleSearchWidgetType(0)}>
              <HotelIcon className='select-hotel-icon'/>
              <div className='text'>Hotel</div>
            </div>
          </div>
          { searchWidgetType === 1 ? <FlightSearchWidget /> : <HotelSearchWidget /> }
        </div>
      </div>
    </>
  );
};

export default SearchWidget;