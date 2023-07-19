import React from 'react';
import Logo from '../../images/logo.png';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import { useNavigate } from 'react-router-dom';
import './style.css';

const Footer = () => {
  const navigate = useNavigate();

  return (
    <div className='footer-container'>
      <div className='content'>
        <div className='logo'>
          <div className='logo-icon' style={{ backgroundImage: `url(${Logo})`}} onClick={() => navigate('/')}></div>
        </div>
        <div className='need-help'>
          <div className='heading'>Need any help?</div>
          <div className='contact-list'>
            <div className='contact'>
              Call 24/7 for any help <br/><span className='highlight'>+00 123 456 789</span>
            </div>
            <div className='contact'>
            Mail to our support team <br/><span className='highlight'>support@domain.com</span>
            </div>
          </div>
        </div>
        <div className='our-services'>
          <div className='heading'>Our Services</div>
          <div className='services-list'>
            <div className='service'>FAQ</div>
            <div className='service'>Customer Support</div>
          </div>
        </div>
        <div className='follow-us-on'>
          <div className='heading'>Follow us on</div>  
          <div className='social-icons'>
            <FacebookRoundedIcon className='social-icon'/>
            <TwitterIcon className='social-icon' />
            <YouTubeIcon className='social-icon' />
            <InstagramIcon className='social-icon' />
          </div>
        </div>
      </div>
      <div className='break'></div>
      <div className='copyright'>
        <div className='text'>Copyright © 2023 All Rights Reserved</div>
      </div>
    </div>
  );
};

export default Footer;