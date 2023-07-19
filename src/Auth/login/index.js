import React from 'react';
import LoginInForm from './IN';
import LoginForm from './KSA';

const Login = () => {

  let country = 'IN';
  country = 'KSA';

  return (
    <>
      { country === 'IN' ? <LoginInForm /> : <LoginForm /> }
    </>
  );
};

export default Login;