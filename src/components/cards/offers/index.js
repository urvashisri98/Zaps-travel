import React from 'react';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import { offersData } from '../../../config';
import './style.css';

const Offers = () => {
  return (
    <>
      <div className='header'>
        <div className='info'>
          <div className='title'>Exclusive <span className='text'>Offers</span></div>
          <div className='subheading'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod </div>
        </div>
        <div className='view-all-offers'>
          View All Offers
        </div>
      </div>
      <div className='back-arrow-offer'>
        <ArrowBackIcon className='back-arrow-offer-icon' />
      </div>
      <div className='forward-arrow-offer'>
        <ArrowForwardIcon className='forward-arrow-offer-icon' />
      </div>
      <div className='offer-cards'>
        {
          offersData && offersData.map((offer) => {
            const {id, couponCode, image, info, title, type, validDate} = offer;
            return (
              <div className='card' key={id}>
                <div className='image' style={{ backgroundImage: `url(${image})`}}></div>
                <div className='offer-details-box'>
                  <div className='offer-details'>
                    <div className='details'>
                      <div className='type'>{type}</div>
                      <div className='valid-date'>{validDate}</div>
                    </div>
                    <div className='title'>{title}</div>
                    <div className='info'>{info}</div>
                    <div className='offer-footer'>
                      <div className='coupon'>
                        <div className='coupon-code'>{couponCode}</div>
                        <div className='dashed-line'></div>
                        <div className='copy-icon'><ContentCopyIcon /></div>
                      </div>
                      <div className='view-details-button'>View Details </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })
        }
      </div>
    </>
  );
};

export default Offers;