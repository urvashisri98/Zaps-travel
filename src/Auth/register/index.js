import React from 'react';
import RegisterForm from './register';

const Register = () => {
  let country = 'IN';
  country = 'KSA';
  
  return (
    <>
      { country !== 'IN' && <RegisterForm /> }
    </>
  );
};

export default Register;