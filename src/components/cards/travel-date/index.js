import React from 'react';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import PropTypes from 'prop-types';
import './style.css';

const TravelDate = ({ title, date = '', day = '', metaTitle}) => {
  return (
    <>
      <div className='travel-date'>
        <div className='travel-date-content1'>
          <div className='travel-date-title'>{title}</div>
          <CalendarMonthIcon className='travel-date-calendar-icon'/>
        </div>
        {
          date.length ? (
            <div className='travel-date-content2'>
              {date.substring(0,2)}<span className='travel-date-text'>{date.substring(2, date.length)}</span>
            </div>
          ) : (
            <div className='travel-date-meta-title'>
              <span className='travel-date-text-normal'>{metaTitle}</span>
            </div>
          )
        }
        { date.length > 0 && <div className='travel-date-day'>{day}</div> }
      </div>        
    </>
  );
};

export default TravelDate;

TravelDate.propTypes = {
  title: PropTypes.string,
  date: PropTypes.string,
  day: PropTypes.string,
  metaTitle: PropTypes.string
};
