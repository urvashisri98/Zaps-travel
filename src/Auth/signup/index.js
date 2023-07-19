import React from 'react';
import SignupInForm from './IN';
import SignupForm from './KSA';

const Signup = () => {

  let country = 'IN';
  country = 'KSA';

  return (
    <>
      { country === 'IN' ? <SignupInForm /> : <SignupForm /> }
    </>
  );
};

export default Signup;