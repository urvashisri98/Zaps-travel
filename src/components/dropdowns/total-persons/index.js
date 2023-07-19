import React, { useEffect, useState } from 'react';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Passenger from '../../search-widget/components/passenger';
import { useSelector } from 'react-redux';
import './style.css';

const TotalTravellers = () => {
  const { flightTotalTravellers: { totalCount } } = useSelector(state => state.searchFlight);

  const [showPassengersComponent, setShowPassengersComponent] = useState(false);
  const closePassengersComponent = () => {
    setShowPassengersComponent(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (showPassengersComponent && !event.target.closest('.passenger-component')) {
        setShowPassengersComponent(false);
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [showPassengersComponent]);

  return (
    <div className='total-persons passenger-component' onClick={() => setShowPassengersComponent(true)}>
      <div className='total-persons-icon'>
        <PermIdentityIcon/>
      </div>
      <div className="total-persons-dropdown">
        <label className='total-persons-dropdown-label'>{totalCount > 1 ? <span>{totalCount} Travellers</span> : <span>{totalCount} Traveller</span>}</label>
        <KeyboardArrowDownIcon className='total-persons-dropdown-icon'/>
      </div>
      { showPassengersComponent && <Passenger closePassengersComponent={closePassengersComponent}/>}
    </div>
  );
};

export default TotalTravellers;