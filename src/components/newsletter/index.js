import React, { useState } from 'react';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import './style.css';

const Newsletter = () => {
  const [isError, setIsError] = useState(false);
  const [email, setEmail] = useState('');

  const handleEmailChange = (value) => {
    setEmail(value);
  };

  const handleSubscribe = () => {
    if(!email.match(/[a-z0-9]+@[a-z]+\.[a-z]{2,3}/)) {
      setIsError(true);
    } else {
      setIsError(false);
    }
  };

  return (
    <div className='newsletter-container'>
      <div className='newsletter-header'>
        Get the latest news and offers
        <span className='highlight'>Subscribe to our newsletter</span>
      </div>
      <div className='user-input'>
        <div className={isError ? 'email-input-error': 'email-input' }>
          <MailOutlineIcon className='email-icon'/>
          <input type='text' placeholder='Enter Email Address' pattern='[a-z0-9]+@[a-z]+\.[a-z]{2,3}' value={email} onChange={(e) => handleEmailChange(e.target.value)}/>
        </div>
        <div className='subscribe-button' onClick={handleSubscribe}>
          <span className='text'>Subscribe</span>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;