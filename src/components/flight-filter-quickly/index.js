import React from 'react';
import Slider from '@mui/material/Slider';
import  PropTypes  from 'prop-types';
import { Link } from '@mui/material';

const FilterFlightquickly = ({
  clickIconChange,
  state,
  checkboxOptions,
  handleCheckboxClick,
  departure,
  departureEvening,
}) => {
  return (
    <>
      <div className='flightBookingDivider1'>
        <div className='TotalFlight'>
          <p>102 of 108 flights</p>
          <Link href='#' underline='none'>
            <p className='showAll'>Clear all</p>
          </Link>
        </div>
        <div className='stops'>
          <div className='stopsIcon'>
              STOPS
            {clickIconChange('showOptions')}
          </div>
          {state.showOptions && (
            <div className='optionsContainer'>
              <label className='checkBoxOptions'>
                <input
                  type='checkbox'
                  name='nonStop'
                  id='nonStop'
                  key='nonStop'
                  checked={checkboxOptions['nonStop']}
                  onChange={(event) => handleCheckboxClick(event, 'nonStop')}
                />
                  Non-stop
              </label>
              <label className='checkBoxOptions'>
                <input
                  type='checkbox'
                  name='stop1'
                  id='stop1'
                  key='stop1'
                  checked={checkboxOptions.stop1}
                  onChange={(event) => handleCheckboxClick(event, 'stop1')}
                />
                  1 stop
              </label>
              <label className='checkBoxOptions'>
                <input
                  type='checkbox'
                  name='stop2'
                  id='stop2'
                  key='stop2'
                  checked={checkboxOptions.stop2}
                  onChange={(event) => handleCheckboxClick(event, 'stop2')}
                />
                  2 stop
              </label>
            </div>
          )}
        </div>
        <div style={{ borderTop: '1px solid #D0D5DD' }}></div>
        <div className='departure'>
          <div className='stopsIcon'>DEPARTURE FROM DELHI</div>
          <div className='departuredTime'>
            <div className='flightsOnTime'>
              {departure.map((items) => {
                return (
                  <div className='morningFlight' key={items.time}>
                    <img src={items.dayImage} alt='' />
                    <label className='flightTimming'>{items.time}</label>
                    <label className='flightTimmingPrice'>
                      {items.price}
                    </label>
                  </div>
                );
              })}
            </div>
            <div className='flightsOnTime'>
              {departureEvening.map((items) => {
                return (
                  <div className='morningFlight' key={items.time}>
                    <img src={items.dayImage} alt='' />
                    <label className='flightTimming'>{items.time}</label>
                    <label className='flightTimmingPrice'>
                      {items.price}
                    </label>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div style={{ borderTop: '1px solid #D0D5DD' }}></div>
        <div className='departure'>
          <div className='stopsIcon'>ARRIVAL AT BENGALURU</div>
          <div className='departuredTime'>
            <div className='flightsOnTime'>
              {departure.map((items) => {
                return (
                  <div className='morningFlight' key={items.time}>
                    <img src={items.dayImage} alt='' />
                    <label className='flightTimming'>{items.time}</label>
                    <label className='flightTimmingPrice'>
                      {items.price}
                    </label>
                  </div>
                );
              })}
            </div>
            <div className='flightsOnTime'>
              {departureEvening.map((items) => {
                return (
                  <div className='morningFlight' key={items.time}>
                    <img src={items.dayImage} alt='' />
                    <label className='flightTimming'>{items.time}</label>
                    <label className='flightTimmingPrice'>
                      {items.price}
                    </label>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div style={{ borderTop: '1px solid #D0D5DD' }}></div>
        <div className='refundStatus'>
          <div className='stopsIcon'>
            REFUND STATUS
            {clickIconChange('showRefundStatus')}{' '}
          </div>
          {state.showRefundStatus && (
            <div className='optionsContainer'>
              <label className='checkBoxOptions'>
                <input
                  type='checkbox'
                  name='nonrefundable'
                  id='nonrefundable'
                  key='nonrefundable'
                />
                  Non-Refundable
              </label>
              <label className='checkBoxOptions'>
                <input
                  type='checkbox'
                  name='refundable'
                  id='refundable'
                  key='refundable'
                  checked={checkboxOptions['refundable']}
                  onChange={(event) =>
                    handleCheckboxClick(event, 'refundable')
                  }
                />
                  Refundable
              </label>
              <label className='checkBoxOptions'>
                <input
                  type='checkbox'
                  name='partiallyrefundable'
                  id='partiallyrefundable'
                  key='partiallyrefundable'
                />
                  Partially Refundable
              </label>
            </div>
          )}
        </div>
        <div style={{ borderTop: '1px solid #D0D5DD' }}></div>
        <div className='oneWayPrice'>
          <div className='stopsIcon'>
              ONE-WAY PRICE
            {clickIconChange('showOneWayPrice')}
          </div>
          {state.showOneWayPrice && (
            <div className='showDetailsOneWay'>
              <div>Up to ₹50,000</div>
              <Slider
                defaultValue={50}
                aria-label='Default'
                valueLabelDisplay='auto'
              />
              <div className='startEnd'>
                <p>₹ 3,426</p>
                <p>₹ 50,000</p>
              </div>
            </div>
          )}
        </div>
        <div style={{ borderTop: '1px solid #D0D5DD' }}></div>
        <div className='airlinesOptions'>
          <div className='stopsIcon'>
              AIRLINES
            {clickIconChange('showAirlines')}{' '}
          </div>
          {state.showAirlines && (
            <div className='optionsContainer'>
              <label className='checkBoxOptions'>
                <input
                  type='checkbox'
                  name='airAsia'
                  id='airAsia'
                  key='airAsia'
                  checked={checkboxOptions['airAsia']}
                  onChange={(event) => handleCheckboxClick(event, 'airAsia')}
                />
                  Air Asia(9)
              </label>
              <label className='checkBoxOptions'>
                <input
                  type='checkbox'
                  name='indiGo'
                  id='indiGo'
                  key='indiGo'
                  checked={checkboxOptions['indiGo']}
                  onChange={(event) => handleCheckboxClick(event, 'indiGo')}
                />
                  IndiGo
              </label>
              <label className='checkBoxOptions'>
                <input
                  type='checkbox'
                  name='indigo'
                  id='indigo'
                  key='indigo'
                  checked={checkboxOptions['indigo']}
                  onClick={(event) => handleCheckboxClick(event, 'indigo')}
                />
                  Indigo
              </label>
              <label className='checkBoxOptions'>
                <input
                  type='checkbox'
                  name='vistara'
                  id='vistara'
                  key='vistara'
                  checked={checkboxOptions['vistara']}
                  onClick={(event) => handleCheckboxClick(event, 'vistara')}
                />
                  Vistara(12)
              </label>
            </div>
          )}
        </div>
        <div style={{ borderTop: '1px solid #D0D5DD' }}></div>
        <div className='tripDuration'>
          <div className='stopsIcon'>
              TRIP DURATION
            {clickIconChange('showTripDuration')}{' '}
          </div>
          {state.showTripDuration && (
            <div className='showDetailsOneWay'>
              <div className='startEnd'>
                <p>1 hour</p>
                <p>27 hours</p>
              </div>
              <Slider
                getAriaLabel={() => 'Temperature range'}
                valueLabelDisplay='auto'
              />
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default FilterFlightquickly;

FilterFlightquickly.propTypes = {
  clickIconChange: PropTypes.func.isRequired,
  state: PropTypes.object.isRequired,
  checkboxOptions: PropTypes.object.isRequired,
  handleCheckboxClick: PropTypes.func.isRequired,
  departure: PropTypes.array.isRequired,
  departureEvening: PropTypes.array.isRequired,
};
  
