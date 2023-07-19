import React, { useState } from 'react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import morningSun from '../../images/morningSun.png';
import Afternoonsun from '../../images/Afternoonsun.png';
import Eveningsun from '../../images/Eveningsun.png';
import sunset from '../../images/sunset.png';
import { flightFilters } from '../../utils/constants';
import FilterFlightquickly from '../flight-filter-quickly';
import SearchFlightSidebar from '../search-flight-sidebar';
import 'react-tooltip/dist/react-tooltip.css';
import './style.css';
import 'tippy.js/dist/tippy.css';


const Newflightbooking = () => {
  const departure = [
    {
      dayImage: morningSun,
      time: 'Before 6AM',
      price: '₹500',
    },
    {
      dayImage: Afternoonsun,
      time: '6AM-12PM',
      price: '₹700',
    },
  ];
  const departureEvening = [
    {
      dayImage: Eveningsun,
      time: '12PM-6PM',
      price: '₹800',
    },
    {
      dayImage: sunset,
      time: 'After 6PM',
      price: '₹1000',
    },
  ];

  // state
  const [state, setState] = useState({
    showOptions: false,
    showAirlines: false,
    showRefundStatus: false,
    showDepartureOptions: false,
    showOneWayPrice: false,
    showTripDuration: false,
    display: false,
    checkPrice: false,
  });

  
  const [checkboxOptions, setCheckboxOptions] = useState({});
  

  const [helperFilters, setHelperFilters] = useState(flightFilters);

  //   // functions
  const updateState = (key) => {
    setState((prevState) => ({
      ...prevState,
      [key]: !prevState[key],
    }));
  };

  const flightSelectionOptionToggle = (name) => {
    updateState(name);
  };

  const handleSelectedFlight = (item, e) => {
    // Perform actions when a flight is selected
    console.log(`Selected flight ID: ${item.id}`);
    const updatedCheckboxOptions = [...helperFilters];
    const findItem = updatedCheckboxOptions.find((ele) => ele.id == item.id);
    console.log(findItem);
    if (findItem) {
      findItem.isSelected = !findItem.isSelected;
      setHelperFilters(updatedCheckboxOptions);

      setCheckboxOptions((prevState) => ({
        ...prevState,
        [findItem.key]: findItem.isSelected,
      }));
    }
    e.stopPropagation();
  };

  const handleCheckboxClick = (event, option) => {
    const { checked } = event.target;
    setCheckboxOptions((prevState) => ({
      ...prevState,
      [option]: checked,
    }));
    console.log(option);
    const helperFiltersArray = [...helperFilters];
    const findItem = helperFiltersArray.find((ele) => ele.key == option);
    if (findItem) {
      findItem.isSelected = !findItem.isSelected;
      setHelperFilters(helperFiltersArray);
    }
  };

  const clearSelectedFilter = () => {
    const selectedDeleted = [...helperFilters];
    const selected = selectedDeleted.filter((ele) => ele.isSelected);
    for (const ele of selected) {
      ele.isSelected = false;
      setCheckboxOptions((prevState) => ({
        ...prevState,
        [ele.key]: false,
      }));
    }
    setHelperFilters(selectedDeleted);
  };

 

  const clickIconChange = (name) => {
    return (
      <div>
        {!state[name] ? (
          <div>
            <ExpandMoreIcon
              onClick={() => flightSelectionOptionToggle(name)}
              sx={{ color: 'black' }}
            />
          </div>
        ) : (
          <ExpandLessIcon
            onClick={() => flightSelectionOptionToggle(name)}
            sx={{ color: 'black' }}
          />
        )}{' '}
      </div>
    );
  };

 

  return (
    <>
      <div className='flightBookingContainer'>
        <FilterFlightquickly
          clickIconChange={clickIconChange}
          state={state}
          checkboxOptions={checkboxOptions}
          handleCheckboxClick={handleCheckboxClick}
          departure={departure}
          departureEvening={departureEvening}
        />
        <SearchFlightSidebar
          helperFilters={helperFilters}
          handleSelectedFlight={handleSelectedFlight}
          clearSelectedFilter={clearSelectedFilter}
        />
       
      </div>
    </>
  );
};

export default Newflightbooking;
