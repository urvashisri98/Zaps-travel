import React from 'react';
import OtpForm from './Otp';

const Otp = () => {

  let country = 'IN';
  country = 'KSA';

  return (
    <>
      <OtpForm country={country}/>
    </>
  );
};

export default Otp;