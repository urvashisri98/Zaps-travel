import React from 'react';
import { checkPrice } from '../../../utils/constants';
import ticket from '../../../images/ticket-discount.png';
import './style.css';

const CheckPrice = () => {
  return (
    <div className='openBox'>
      <div className='ticketSuitableFlight'>
        <img src={ticket} alt='ticket'/>
        <label className='suitableFlight'>
          Compare and select your most suitable flight option
        </label>
      </div>
      <div className='cardsContainer'>
        {checkPrice.map((item, index) => (
          <div
            className='cards'
            style={{ borderTop: '2px solid ' + item.footer.buttonTextColor }}
            key={index}
          >
            <div className='lightMoney'>
              <div className='light'>
                <label>{item.headername}</label>
                <label
                  className='priceCss'
                  style={{
                    color: item.footer.buttonTextColor,
                  }}
                >
                  {item.headerPrice}
                </label>
              </div>
              <hr className='Dashed' />
            </div>
            <div className='flightContentCardBody'>
              {item.body.map((bodyItem, bodyIndex) => (
                <div key={bodyIndex} className='allHeader'>
                  <label className='subHeader'>{bodyItem.subHeaderName}</label>
                  {bodyItem.children.map((child, childIndex) => (
                    <label key={childIndex}>{child.key}</label>
                  ))}{' '}
                </div>
              ))}{' '}
            </div>
            <button
              className='select'
              style={{
                backgroundColor: item.footer.buttonBackgroundColor,
                color: item.footer.buttonTextColor,
                cursor: 'pointer',
              }}
            >
              {item.footer.buttonLabel}{' '}
            </button>
          </div>
        ))}{' '}
      </div>
    </div>
  );
};

export default CheckPrice;
