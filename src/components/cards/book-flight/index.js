import React, { useState } from 'react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import airlinesImage from '../../../images/image 2.png';
import CheckPrice from '../check-price';
import plane from '../../../images/Line 20.png';
import aeroPlane from '../../../images/plane-line.png';
import clockImage from '../../../images/clock.png';
import luggageImage from '../../../images/luggage-01.png';
import divider from '../../../images/Line 22.png';
import infoCircle from '../../../images/info-circle.svg';
import Tippy from '@tippy.js/react';
import FlightDetails from '../../cards/flight-details';
import checkImage from '../../../images/Group 427319449.png';
import './style.css';
const BookFlight = () => {
  const [onhandleFlightDetail, setOnhandleFlightDetail] = useState(false);
  const [openCheckNow, setOpenCheckNow] = useState(false);

  const [checkPrice, setCheckPrice] = useState(false);
  const handleFlightDetail = () => {
    console.log('open dailog box');
    setOnhandleFlightDetail(!onhandleFlightDetail);
  };
  const handleCheckNow = () => {
    setOpenCheckNow(!openCheckNow);
  };
  const updateState = () => {
    setCheckPrice(!checkPrice);
  };

  const flightSelectionOptionToggle = (name) => {
    updateState(name);
  };
  return (
    <>
      <div className='overallFlight'>
        <div className={`filterFlightDetails${openCheckNow ? ' open' : ''}`}>
          <div className='Airlines'>
            <div className='airlineImage'>
              <img src={airlinesImage} alt='airlinesImage' />
            </div>
            <div className='airlinesDetail'>
              <div className='flightNameCode'>
                <p className='flightName'>Akasa Air</p>
                <p className='flightNameQP'>QP-1109</p>
              </div>
            </div>
          </div>
          <div className='departureDurationArrival1'>
            <div className='filterFlightDetailsDeparture'>
              <div className='time'>06:00 PM</div>
              <div className='place'>New Delhi</div>
            </div>
            <div className='duration'>
              <div className='timming'>
                <img src={clockImage} alt='' />
                <label className='timeHourMin'>1h 40m</label>
              </div>
              <div className='planeImage'>
                <img src={plane} alt='' />
                <label className='stoppage'>Direct</label>
                <img src={plane} alt='' />
                <img src={aeroPlane} alt='' />
              </div>
              <Tippy
                content={
                  <>
                    <div className='tooltipclassforBaggage'>
                      <label className='baggageAllowance'>
                            Baggage allowance
                      </label>
                      <div className='baggageAllowanceOption'>
                        <label className='baggageswithImage'>
                          <img src={checkImage} alt='' />
                              7kg cabin baggage
                        </label>
                        <label className='baggageswithImage'>
                          <img src={checkImage} alt='' />
                              Baggage options available
                        </label>
                        <label className='baggageswithImage'>
                          <img src={checkImage} alt='' />
                              Extra checked baggage can be purchased in the next
                              step
                        </label>
                      </div>
                    </div>
                  </>
                }
                placement='bottom'
                arrow={true}
                interactive={true}
                animation='shift-away'
              >
                <div className='Baggage'>
                  <img src={luggageImage} alt='' />
                  <label className='place'>Baggage Option Available</label>
                </div>
              </Tippy>
            </div>
            <div className='arrivalTime'>
              <div className='arrival'>
                <label className='time'>08:00 AM</label>
                <label className='place'>Bengaluru</label>
              </div>
              <div
                className='arrival'
                onClick={() => {
                  handleFlightDetail();
                }}
              >
                <label className='flightDetails'>Flight Details</label>
              </div>
            </div>
          </div>
          <div className='dividerImage'>
            <img src={divider} alt='' />
          </div>
          <div className='totalCheckPrice'>
            <div className='totalPrice'>
              <Tippy
                content={
                  <div className='tooltipclass'>
                    <div
                      className='tooltipclassFare'
                      style={{ borderBottom: '2px solid #667085' }}
                    >
                          Fare Details
                    </div>
                    <div className='chargesShow'>
                      <div className='fareCharges'>
                        <div className='charges'>
                          <label>Base Fare</label>
                          <label>₹ 4,687</label>
                        </div>
                        <div className='charges'>
                          <label>Surcharges</label>
                          <label>₹ 693</label>
                        </div>
                        <div className='charges'>
                          <label>Taxes & fees</label>
                          <label>₹ 0</label>
                        </div>
                        <div
                          style={{ borderBottom: '2px solid #667085' }}
                        >
                        </div>
                      </div>
                    </div>
                    <div className='chargesText'>
                          Taxes & fees include service fees, as well as third
                          party taxes and surcharges such as airport tax, fuel
                          surcharges and airline fees. For more info, please
                          view our T&Cs & FAQs.
                    </div>
                  </div>
                }
                arrow={true}
                placement='bottom-end'
                animation='shift-away'
              >
                <label className='total'>
                  Total (incl. tax)
                  <img src={infoCircle} alt='' className='tooltip' />
                </label>
              </Tippy>
              <label className='flightSeatPrice' id='myButton'>
                      ₹ 4,349
              </label>
            </div>
            <div
              className='bookFlight'
              onClick={() => handleCheckNow('checkPrice')}
            >
                  Check Price
              {openCheckNow ? (
                <ExpandLessIcon
                  onClick={() => flightSelectionOptionToggle('checkPrice')}
                />
              ) : (
                <ExpandMoreIcon
                  onClick={() => flightSelectionOptionToggle('checkPrice')}
                />
              )}{' '}
            </div>
          </div>
        </div>
        {openCheckNow && (
          <div>
            <CheckPrice />
          </div>
        )}{' '}
      </div>
      <FlightDetails
        title='Add Banner'
        onhandleFlightDetail={onhandleFlightDetail}
        setOnhandleFlightDetail={setOnhandleFlightDetail}
      />
    </>
  );
};

export default BookFlight;