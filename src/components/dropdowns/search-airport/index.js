import React, { useEffect, useState } from 'react';
import Error from '../../error';
import { ReactSVG } from 'react-svg';
import PropTypes from 'prop-types';
import swapSvg from '.././../../images/swap.svg';
import { useDispatch, useSelector } from 'react-redux';
import FlightLandIcon from '@mui/icons-material/FlightLand';
import FlightTakeoffIcon from '@mui/icons-material/FlightTakeoff';
import { flightSourceCitiesData, flightdestinationCitiesData } from '../../../config';
import { addError, removeError, updateFlightFrom, updateFlightTo } from '../../../utils/slices/searchFlightSlice';
import './style.css';

const SearchAirport = ({ searchAirportId }) => {
  const { flightFrom, flightTo, errors } = useSelector(state => state.searchFlight);
  
  const [source, setSource] = useState('');
  const [sourceOptionsid, setSourceOptionsId] = useState();
  const [showSourceOptions, setShowSourceOptions] = useState(false);
  const [destination, setDestination] = useState('');
  const [destinationOptionsid, setDestinationOptionsId] = useState();
  const [showDestinationOptions, setShowDestinationOptions] = useState(false);
  const [showErrors, setShowErrors] = useState(errors);

  const dispatch = useDispatch(); 

  const handleSourceValue = (id) => {
    if(destinationOptionsid === id) { 
      dispatch(addError({ id: searchAirportId, errorMessage: 'Departure must be different from arrival'}));
    } else {
      dispatch(removeError({ id: searchAirportId }));
    }

    setSourceOptionsId(id);
    setSource('');
    const [sourceCity] = flightSourceCitiesData.filter((city) => city.id === id);
    dispatch(updateFlightFrom({id: searchAirportId, data: sourceCity}));
  };

  const handleDestinationValue = (id) => {
    if(sourceOptionsid === id) {
      dispatch(addError({ id: searchAirportId, errorMessage: 'Departure must be different from arrival'}));
    } else {
      dispatch(removeError({ id: searchAirportId }));
    }

    setDestinationOptionsId(id);
    setDestination('');
    const [destinationCity] = flightdestinationCitiesData.filter((city) => city.id === id);
    dispatch(updateFlightTo({id: searchAirportId, data: destinationCity}));
  };

  const handleSwap = () => {
    if(flightFrom.length > searchAirportId && flightTo.length > searchAirportId && Object.keys(flightFrom[searchAirportId]).length && Object.keys(flightTo[searchAirportId]).length) {
      const temp = flightTo[searchAirportId];
      dispatch(updateFlightTo({id: searchAirportId, data: flightFrom[searchAirportId]}));
      dispatch(updateFlightFrom({id: searchAirportId, data: temp}));
    }
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if ((showSourceOptions && !event.target.closest('.source-component')) || source) {
        setSource('');
        setShowSourceOptions(false);
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [showSourceOptions, source]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if ((showDestinationOptions && !event.target.closest('.destination-component')) || destination) {
        setDestination('');
        setShowDestinationOptions(false);
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [showDestinationOptions, destination]);

  useEffect(() => {
    setShowErrors(errors);
  }, [errors]);

  useEffect(() => {
    const sourceId = flightFrom[searchAirportId] && flightFrom[searchAirportId].id;
    setSourceOptionsId(sourceId);
  },[flightFrom, searchAirportId]);

  return (
    <div className='search-flight-field'>
      <div className='from'>
        <FlightTakeoffIcon className='from-flight-icon'/>
        <input type='text' className='text source-component' placeholder='From' 
          value={flightFrom && flightFrom.length > searchAirportId && Object.keys(flightFrom[searchAirportId]).length ? flightFrom[searchAirportId].airportCode + ' - ' + flightFrom[searchAirportId].name : source} 
          onFocus={() =>  setShowSourceOptions(true)} 
          onChange={(e) =>{
            setSource(e.target.value);
            setSourceOptionsId();
            dispatch(updateFlightFrom({id: searchAirportId, data: {}}));
          }}/>
        { 
          showSourceOptions && 
          <div className='from-class-options-group'>
            <div className='from-class-option-group-card'>
              <label>Suggestions</label>
              {
                source ? 
                  flightSourceCitiesData.filter((city) => city.slug.includes(source.toLowerCase())).map((city) => {
                    const {id, airportCode, name, airportName} = city;
                    return (
                      <div className='from-class-option' key={id} onClick={() => handleSourceValue(id)}>
                        <FlightTakeoffIcon className='from-flight-icon'/>
                        <div className='from-text-box'>
                          <div>{name}</div>
                          <div>{airportName}</div>
                        </div>
                        <div className='from-code'>
                          <div>{airportCode}</div>
                        </div>
                      </div>
                    );
                  },)
                  : flightSourceCitiesData.map((city) => {
                    const {id, airportCode, name, airportName} = city;
                    return (
                      <div className='from-class-option' key={id} onClick={() => handleSourceValue(id)}>
                        <FlightTakeoffIcon className='from-flight-icon'/>
                        <div className='from-text-box'>
                          <div>{name}</div>
                          <div>{airportName}</div>
                        </div>
                        <div className='from-code'>
                          <div>{airportCode}</div>
                        </div>
                      </div>
                    );
                  },)
              }
            </div>
          </div>
        }
      </div>
      <div className='swap-icon'>
        <ReactSVG src={swapSvg} className='swap-horiz-icon' onClick={handleSwap}/>
      </div>
      <div className='to'>
        <FlightLandIcon className='to-flight-icon'/>
        <input type='text' className='text destination-component' placeholder='To' 
          value={Object.keys(flightTo.length > searchAirportId && flightTo[searchAirportId]).length ? flightTo[searchAirportId].airportCode + ' - ' + flightTo[searchAirportId].name : destination}
          onFocus={() =>  setShowDestinationOptions(true)}
          onChange={(e) => {
            setDestination(e.target.value);
            setDestinationOptionsId();
            dispatch(updateFlightTo({id: searchAirportId, data: {}}));
          }}/>
        {
          showDestinationOptions && 
            <div className='to-class-options-group'>
              <div className='to-class-option-group-card'>
                <label>Suggestions</label>
                {
                  destination ? 
                    flightdestinationCitiesData.filter((city) => city.slug.includes(destination.toLowerCase())).map((city) => {
                      const {id, airportCode, name, airportName} = city;
                      return (
                        <div className='to-class-option' key={id} onClick={() => handleDestinationValue(id)}>
                          <FlightTakeoffIcon className='to-flight-icon'/>
                          <div className='to-text-box'>
                            <div>{name}</div>
                            <div>{airportName}</div>
                          </div>
                          <div className='to-code'>
                            <div>{airportCode}</div>
                          </div>
                        </div>
                      );
                    },)
                    : flightdestinationCitiesData.map((city) => {
                      const {id, airportCode, name, airportName} = city;
                      return (
                        <div className='to-class-option' key={id} onClick={() => handleDestinationValue(id)}>
                          <FlightTakeoffIcon className='to-flight-icon'/>
                          <div className='to-text-box'>
                            <div>{name}</div>
                            <div>{airportName}</div>
                          </div>
                          <div className='to-code'>
                            <div>{airportCode}</div>
                          </div>
                        </div>
                      );
                    },)
                }
              </div>
            </div>
        }
      </div>
      {showErrors.length > 0 && showErrors.map((error) => {
        const {id, errorMessage} = error;
        return (
          <>
            {id === searchAirportId && <div className='source-destination-error' key={id}>
              <Error key={id} errorMessage={errorMessage}/>
            </div>}
          </>
        );
      })}
    </div>
  );
};

export default SearchAirport;


SearchAirport.propTypes = {
  searchAirportId: PropTypes.number,
};
