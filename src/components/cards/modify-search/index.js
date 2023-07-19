import React from 'react';
import { ReactSVG } from 'react-svg';
import FlightSearchWidget from '../../search-widget/components/flight-search-widget';
import CrossSvg from '../../../images/x-close.svg';
import './style.css';

const ModifySearch = () => {
  return (
    <div className='modify-search-container'>
      <div className='modify-search-header'>
        <div className='modify-search-title'>Modify Search</div>
        <ReactSVG src={CrossSvg} className='modify-search-close-icon'/>
      </div> 
      <FlightSearchWidget />
    </div>
  );
};

export default ModifySearch;