import React from 'react';
import Logo from '../../images/header-logo.png';
import LoginIcon from '../../images/login-icon.svg';
import IndiaFlag from '../../images/india-flag.svg';
import ArrowDown from '../../images/arrow-down.svg';
import { ReactSVG } from 'react-svg';
import { useNavigate } from 'react-router-dom';
import './style.css';

const Header = () => {
  const navigate = useNavigate();
  return (
    <div className='header-card'>
      <div className='header-logo' onClick={() => navigate('/')}>
        <div className='header-logo-icon' style={{ backgroundImage: `url(${Logo})`}}></div>
      </div>
      <div className='header-items'>
        <div className='customer-support'>Customer Support</div>
        <div className='faq'>FAQ</div>
        <div className='country-dropdown'>
          <div className='flag'>
            <ReactSVG src={IndiaFlag} />
          </div>
          <div className='country-dropdown-divider'></div>
          <div className='language'>EN</div>
          <div className='country-dropdown-divider'></div>
          <div className='currency'>INR</div>
          <div className='arrow-down-country-dropdown'>
            <ReactSVG src={ArrowDown} />
          </div>
        </div>
        <div className='login'>
          <div className='login-icon'>
            <ReactSVG src={LoginIcon} />
          </div>
          <div className='login-text' onClick={() => navigate('/login')}>
            Login/ Signup
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;