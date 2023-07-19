import React, {useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { InfantsCountData, adultsCountData, childrenCountData } from '../../../../config';
import { updateTravellersCount } from '../../../../utils/slices/searchFlightSlice';
import './style.css';

const Passenger = ({ closePassengersComponent }) => {

  const dispatch = useDispatch();
  const { flightTotalTravellers: { flightAdultsCount, flightChildrenCount, flightInfantsCount }, flightTravelType} = useSelector(state => state.searchFlight);

  const [adultCount, setAdultCount] = useState(flightAdultsCount);
  const [childrenCount, setChildrenCount] = useState(flightChildrenCount);
  const [infantCount, setInfantCount] = useState(flightInfantsCount);

  const [maxAdultCount, setMaxAdultCount] = useState(9);
  const [maxInfantCount, setMaxInfantCount] = useState(4);
  const [maxChildrenCount, setMaxChildrenCount] = useState(6);

  const handleShowPassengerComponent = (e) => {
    e.stopPropagation();
    const totalTravellers = adultCount + childrenCount + infantCount;
    dispatch(updateTravellersCount({ totalTravellers, adultCount, childrenCount, infantCount }));
    closePassengersComponent();
  };

  const handleAdultCountValue = (value) => setAdultCount(value);
  const handleChildrenCountValue = (value) =>  setChildrenCount(value);
  const handleInfantCountValue = (value) =>  setInfantCount(value);

  useEffect(() => {
    const count = adultCount + childrenCount + infantCount;
    setMaxAdultCount(9 - count + adultCount);
    setMaxChildrenCount(9 - count + childrenCount);
    const validInfantCount = Math.min(9 - count + infantCount, adultCount < 5 ? adultCount : 4);
    setMaxInfantCount(validInfantCount);
    if(validInfantCount < infantCount) setInfantCount(validInfantCount);
  }, [adultCount, childrenCount, infantCount]);
  
  return (
    <div className={flightTravelType === 'multiCity' ? 'card-passenger-enlarge' :'card-passenger'} >
      <div className='card-content'>
        <div className='section-1'>
          <div className='text'>
            Adults (12y +) On the day of travel
          </div>
          <div className='list-numbers'>
            {
              adultsCountData.map((count) => {
                return (
                  <div className='number' key={count} onClick={() => count <= maxAdultCount && handleAdultCountValue(count)}>
                    { adultCount === count ? 
                      <div className='active'>{count}</div> : 
                      <div className={count <= maxAdultCount ? 'non-active-valid' : 'non-active-invalid'}>{count}</div> }
                  </div>
                );
              })
            }
          </div>
        </div>
        <div className='section-2'>
          <div className='content-1'>
            <div className='text'>
            Children (2y - 12y) On the day of travel
            </div>
            <div className='list-numbers'>
              {
                childrenCountData.map((count) => {
                  return (
                    <div className='number' key={count} onClick={() => count <= maxChildrenCount && handleChildrenCountValue(count)}>
                      { childrenCount === count ?
                        <div className='active'>{count}</div> :
                        <div className={count <= maxChildrenCount ? 'non-active-valid' : 'non-active-invalid'}>{count}</div> }
                    </div>
                  );
                })
              }
            </div>
          </div>
          <div className='content-2'>
            <div className='text'>
              Infants (Below 2y) On the day of travel
            </div>
            <div className='list-numbers'>
              {
                InfantsCountData.map((count) => {
                  return (
                    <div className='number' key={count} onClick={() => count <= maxInfantCount && handleInfantCountValue(count)}>
                      { infantCount === count ? 
                        <div className='active'>{count}</div> : 
                        <div className={count <= maxInfantCount ? 'non-active-valid' : 'non-active-invalid'}>{count}</div> }
                    </div>
                  );
                })
              }
            </div>
          </div>
        </div>
        <div className='section-3'>
          <div className='button'>
            <div className='text' onClick={(e) => handleShowPassengerComponent(e)}>Apply</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Passenger;

Passenger.propTypes = {
  closePassengersComponent: PropTypes.func,
};
