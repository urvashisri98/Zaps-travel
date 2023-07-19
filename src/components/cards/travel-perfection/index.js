import React from 'react';
import { travelPerfectionData } from '../../../config';
import { ReactSVG } from 'react-svg';
import './style.css';

const FindTravelPerfection = () => {
  return (
    <>
      <div className='header-travel-perfection'>
        <div className='info'>
          <div className='title'>Find Travel <span className='text'>Perfection</span></div>
          <div className='subheading'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
            tempor incididunt ut labore.
          </div>
        </div>
      </div>
      <div className='travel-perfection-cards'>
        {
          travelPerfectionData && travelPerfectionData.map((data) => {
            const {id, info, title, svg} = data;
            return (
              <div className='card' key={id}>
                <div className='details'>
                  <div className='icon'>
                    <ReactSVG src={svg} className='svg-icon'/>
                  </div>
                  <div className='text'>{title}</div>
                  <div className='info'>{info}</div>
                </div>
              </div>
            );
          })
        }
      </div>
    </>
  );
};

export default FindTravelPerfection;