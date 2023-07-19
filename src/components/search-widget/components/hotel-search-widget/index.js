import React from 'react';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import SearchIcon from '@mui/icons-material/Search';
import './style.css';

const HotelSearchWidget = () => {

  return (
    <>
      <div className='section2'>
        <div className='search-hotel'>
          <div className='title'>Destination</div>
          <div className='input-search-hotel'>
            <input type='text' className='text' placeholder='Where are you going?'/>
          </div>
          <div className='country'>Where are you going?</div>
        </div>
        <div className='check-in'>
          <div className='check-in-title'>
            <span className='text'>Check In</span>
            <span className='calendar-icon'><CalendarMonthIcon /></span>
          </div>
          <div className='check-in-date'>8 <span className='text'>June, 2023</span></div>
          <div className='check-in-day'>Friday</div>
        </div>
        <div className='check-out'>
          <div className='check-out-title'>
            <span className='text'>Check Out</span>
            <span className='calendar-icon'><CalendarMonthIcon /></span>
          </div>
          <div className='check-out-date'>8 <span className='text'>June, 2023</span></div>
          <div className='check-out-day'>Friday</div>
        </div>
        <div className='user-info'>
          <div className='dropdown'>
            <div className='content1'>
              <label className='dropdown-title'>Rooms & Guests</label>
              <KeyboardArrowDownIcon className='dropdown-icon'/>
            </div>
            <div className='content2'>
              1 <span className='text'>Room</span> 1 <span className='text'> Adult</span>
            </div>
          </div>
        </div>
        <div className='search-hotel-button'>
          <SearchIcon className='search-icon'/>
        </div>
      </div>
    </>
  );
};

export default HotelSearchWidget;