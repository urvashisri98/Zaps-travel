import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Dialog, DialogContent } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Divider from '../../../images/Divider.svg';
import ticket from '../../../images/check.svg';
import border from '../../../images/Line 33.svg';
import flightImage from '../../../images/flight.svg';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ArrowForwardIcon from '../../../images/Line arrow-right.svg';
import './style.css';

const FlightDetails = ({ onhandleFlightDetail, setOnhandleFlightDetail }) => {
  const [state, setState] = useState(false);
  const clickIconChange = () => {
    return (
      <div>
        {!state ? (
          <div>
            <ExpandMoreIcon
              onClick={() => flightSelectionOptionToggle()}
              sx={{ color: 'black' }}
            />
          </div>
        ) : (
          <ExpandLessIcon
            onClick={() => flightSelectionOptionToggle()}
            sx={{ color: '#0088ff' }}
          />
        )}
      </div>
    );
  };
  const flightSelectionOptionToggle = () => {
    setState(!state);
  };

  return (
    <Dialog
      open={onhandleFlightDetail}
      onClose={() => setOnhandleFlightDetail(false)}
    >
      <DialogContent sx={{ padding: 0 }}>
        <div className='DailogBoxContainer'>
          <div className='dailogBox'>
            {/* first div */}
            <div
              className='dailogFirstDivider'
              style={{ borderBottom: '1px solid #D0D5DD' }}
            >
              <div className='DailogBoxFlightDetails'>
                <label className='flightDetailsHeading'>Flight Details</label>
                <CloseIcon onClick={() => setOnhandleFlightDetail(false)} />
              </div>
              <div className='departureArrivalTime'>
                <div className='departureArrival'>
                  <section className='fromTo'>
                    <label>New Delhi</label>
                    <img src={ArrowForwardIcon} alt='' />
                    <label>Bangluru</label>
                  </section>
                  <section className='totalduration'>
                    <label className='duration'>Total Duration</label>
                    <label className='durationtime'>04 h 20 m</label>
                  </section>
                </div>
                <div className='partiallyRefundable'>
                  <label>Partially Refundable</label>
                  <label className='dayTime'>Fri,30 Jun 2023</label>
                </div>
              </div>
            </div>
            {/* second div */}
            <div className='changeFlight'>
              <div className='flightRoot'>
                <div className='fromAirportToAirportWith'>
                  <div className='timeWithDate'>
                    <section
                      style={{ display: 'flex', flexDirection: 'column' }}
                    >
                      <label className='timepop'>04:00 PM</label>
                      <label className='datepop'>Fri,30 Jun 23</label>
                    </section>
                    <div className='timeTaken'>01 h 55 m</div>
                    <section
                      style={{ display: 'flex', flexDirection: 'column' }}
                    >
                      <label className='timepop'>05:55 PM</label>
                      <label className='datepop'>Fri,30 Jun 23</label>
                    </section>
                  </div>
                  <div className='divider'>
                    <img src={Divider} alt='' />
                  </div>
                  <div className='airportName'>
                    <div className='airportWithPlace'>
                      <label className='departureAirportName'>
                        Indira Gandhi International Airport
                      </label>
                      <label className='arrivalAirportName'>
                        New Delhi,India
                      </label>
                    </div>
                    <div className='flightNameWithClass'>
                      <div>
                        <img src={flightImage} alt='' />
                      </div>
                      <section className='flightNameWithCode'>
                        <section className='flightCode'>
                          <label className='airplaneName'>IndiGo</label>
                          <div className='blockerflightPopup'></div>
                          <label style={{ color: '#667085' }}>QP-1109</label>
                        </section>
                        <label className='className'>Economy Class</label>
                      </section>
                    </div>
                    <div className='airportWithPlace'>
                      <label className='departureAirportName'>
                        Pune International Airport
                      </label>
                      <label className='arrivalAirportName'>Pune,India</label>
                    </div>
                  </div>
                </div>
                <div className='baggages'>
                  <div className='baggageWithImage'>
                    <section>
                      <img src={ticket} alt='' />
                    </section>
                    <section className='baggageWithWeight'>
                      <label>Check-in baggage</label>
                      <label>15kg/adult</label>
                    </section>
                  </div>
                  <div className='baggageWithImage'>
                    <section>
                      <img src={ticket} alt='' />
                    </section>
                    <section className='baggageWithWeight'>
                      <label>Check-in baggage</label>
                      <label>15kg/adult</label>
                    </section>
                  </div>
                </div>
                <div className='layover'>
                  <div className='border'>
                    <img src={border} alt='' />
                  </div>
                  <div className='arrivalLayover'>
                    <label className='changePlanes'>Changes of planes</label>
                    <div style={{ color: '#FFA400' }}> &#9679;</div>
                    <label>1 h Layover in Pune</label>
                  </div>
                  <div className='border'>
                    <img src={border} alt='' />
                  </div>
                </div>
                <div className='fromAirportToAirportWith'>
                  <div className='timeWithDate'>
                    <section
                      style={{ display: 'flex', flexDirection: 'column' }}
                    >
                      <label className='timepop'>04:00 PM</label>
                      <label className='datepop'>Fri,30 Jun 23</label>
                    </section>
                    <div className='timeTaken'>01 h 55 m</div>
                    <section
                      style={{ display: 'flex', flexDirection: 'column' }}
                    >
                      <label className='timepop'>05:55 PM</label>
                      <label className='datepop'>Fri,30 Jun 23</label>
                    </section>
                  </div>
                  <div className='divider'>
                    <img src={Divider} alt='' />
                  </div>
                  <div className='airportName'>
                    <div className='airportWithPlace'>
                      <label className='departureAirportName'>
                        Pune International Airport
                      </label>
                      <label className='arrivalAirportName'>Pune,India</label>
                    </div>
                    <div className='flightNameWithClass'>
                      <div>
                        <img src={flightImage} alt='' />
                      </div>
                      <section className='flightNameWithCode'>
                        <section className='flightCode'>
                          <label className='airplaneName'>IndiGo</label>
                          <div className='blockerflightPopup'></div>
                          <label style={{ color: '#667085' }}>LP-1109</label>
                        </section>
                        <label className='className'>Economy Class</label>
                      </section>
                    </div>
                    <div className='airportWithPlace'>
                      <label className='departureAirportName'>
                        Bangluru International Airport
                      </label>

                      <label className='arrivalAirportName'>
                        Banglore,India
                      </label>
                    </div>
                  </div>
                </div>
                <div className='baggages'>
                  <div className='baggageWithImage'>
                    <section>
                      <img src={ticket} alt='' />
                    </section>
                    <section className='baggageWithWeight'>
                      <label>Check-in baggage</label>
                      <label>15kg/adult</label>
                    </section>
                  </div>
                  <div className='baggageWithImage'>
                    <section>
                      <img src={ticket} alt='' />
                    </section>
                    <section className='baggageWithWeight'>
                      <label>Check-in baggage</label>
                      <label>15kg/adult</label>
                    </section>
                  </div>
                </div>
              </div>
            </div>
            {/* third div */}
            <div
              className='priceButton'
              style={{ borderTop: '1px solid #D0D5DD' }}
            >
              <div className='PriceWithButton'>
                <label className='totalPriceIcon'>
                  Total Price(incl. tax)
                  {clickIconChange()}
                </label>
                <label className='price'>₹ 5,345</label>
              </div>
              <div className='continueButton'>Continue</div>
            </div>
            {state && (
              <div className='fareDetails'>
                <div
                  className='fareDetailsPrices'
                  style={{ borderBottom: '1px solid #D0D5DD' }}
                >
                  Fare details
                </div>
                <div className='charges'>
                  <section className='fareMoney'>
                    <label style={{ fontWeight: '400' }}>Base Fare</label>
                    <label style={{ fontWeight: '700' }}>₹ 3,456</label>
                  </section>
                  <section className='fareMoney'>
                    <label style={{ fontWeight: '400' }}>Surcharges</label>
                    <label style={{ fontWeight: '700' }}>₹ 456</label>
                  </section>
                  <section className='fareMoney'>
                    <label style={{ fontWeight: '400' }}>Taxes & fees</label>
                    <label style={{ fontWeight: '700' }}>₹ 0</label>
                  </section>
                </div>
                <div
                  className='taxesFeesText'
                  style={{ borderTop: '1px solid #D0D5DD' }}
                >
                  Taxes & fees include service fees, as well as third party
                  taxes and surcharges such as airport tax, fuel surcharges and
                  airline fees. For more info, please view our T&Cs & FAQs.
                </div>
              </div>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default FlightDetails;


FlightDetails.propTypes = {
  onhandleFlightDetail: PropTypes.bool,
  setOnhandleFlightDetail: PropTypes.bool,
};