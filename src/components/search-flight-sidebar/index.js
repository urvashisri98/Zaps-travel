import React from 'react';
import PropTypes from 'prop-types';
import crossImage from '../../images/close-circle.png';
import BookFlightHeader from '../book-flight-header';
import BookFlight from '../cards/book-flight';

const SearchFlightSidebar = ({
  helperFilters,
  handleSelectedFlight,
  clearSelectedFilter,
}) => {
  return (
    <>
      <div className='flightBookingDivider2'>
        <div className='selectedItems'>
          <div className='flightBookingDivider0'>
            <label>Quickly filter your results :</label>
          </div>

          <div className='flightBookingDetail'>
            <div className='flightBookingDetailLeftCorner'>
              {helperFilters.map((item) => (
                <div
                  className={
                    item.isSelected
                      ? 'selectedOption selectedOptionSelected'
                      : 'selectedOption'
                  }
                  key={item.id}
                  onClick={(event) => handleSelectedFlight(item, event)}
                >
                  {item.filterName}
                  {item.isSelected && (
                    <div className='crossImage' key={item.id}>
                      <img
                        src={crossImage}
                        alt='crossImage'
                        onClick={(event) => handleSelectedFlight(item, event)}
                      />
                    </div>
                  )}
                </div>
              ))}
            </div>
            <div
              className='flightBookingDetailRightCorner'
              onClick={() => clearSelectedFilter()}
            >
                Clear All
            </div>
          </div>
        </div>
        <BookFlightHeader/>
        <BookFlight />
      </div>
    </>
  );
};

export default SearchFlightSidebar;

SearchFlightSidebar.propTypes = {
  helperFilters: PropTypes.array.isRequired,
  handleSelectedFlight: PropTypes.func.isRequired,
  clearSelectedFilter: PropTypes.func.isRequired,
};