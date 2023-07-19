import React, { useRef, useState } from 'react';
import OTPInput from 'react-otp-input';
import { useNavigate } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';

import './style.css';

const OtpForm = ({ country }) => {
  const navigate = useNavigate();
  const [otp, setOtp] = useState('');
  const inputRefs = useRef([]);

  const {t, i18n} = useTranslation();

  const handleInputChange = (index, value) => {
    const newOtp = otp.split('');
    newOtp[index] = value;
    setOtp(newOtp.join(''));

    if (value !== '' && inputRefs.current[index + 1]) {
      inputRefs.current[index + 1].focus();
    }
  };

  function handleChange(OTP) {
    setOtp(OTP);
  }

  const handleSubmitOtp = () => {
    window.alert(`Your OTP is ${otp}`);
  };

  const handleInputFocus = (index) => {
    const newPlaceholder = otp[index] ? '' : ' ';
    inputRefs.current[index].setAttribute('placeholder', newPlaceholder);
  };

  return (
    <>
      <button onClick={()=> i18n.changeLanguage('en')}>EN</button>
      <button onClick={()=> i18n.changeLanguage('ar')}>AR</button>
      <div className='card-container'>
        <div className='card-otp'>
          <div className='card-title'>{t('otp.otpTitle')}</div>
          <div className='card-meta-title'>{t('otp.otpMetaTitle')} <br /> {t('otp.otpMetaTitle2')}  </div>
          <OTPInput
            numInputs={4}
            onChange={handleChange}
            separator={<span></span>}
            renderInput={(inputProps, index) => (
              <input
                {...inputProps}
                ref={(ref) => (inputRefs.current[index] = ref)}
                value={otp[index] || ''}
                onChange={(e) => handleInputChange(index, e.target.value)}
                onFocus={(e) => handleInputFocus(index, e.target.value)}
              />
            )}
            containerStyle='containerStyle'
            inputStyle='input-style'
            placeholder='0000'
            shouldAutoFocus
            isInputNum
          />
          <div className='card-bottom-title-otp'>{t('otp.expireIn')}<span className='secondary-text-otp'> &nbsp; {t('otp.time')}</span></div>
          <div className='card-bottom-title-otp'>{t('otp.didNotGetOtp')}<span className='secondary-text-otp'>&nbsp; {t('otp.resendNow')}</span></div>
          <button className='card-button-otp' onClick={handleSubmitOtp}>{t('otp.submit')}</button>
          <div className='card-bottom-title-otp' onClick={() => navigate('/login')}>
            <ArrowBackIcon className='secondary-text-otp' style={{ marginRight: '3px'}}/>
            {
              country === 'IN' ? 
                <span className='secondary-text-otp'>{t('otp.changeNumber')}</span> :
                <span className='secondary-text-otp'>{t('otp.changeEmailId')}</span>
            }
          </div>
        </div>
      </div>
    </>
  );
};

export default OtpForm;

OtpForm.propTypes = {
  country: PropTypes.string,
};
