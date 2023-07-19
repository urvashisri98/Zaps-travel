import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

const Error = ({ errorMessage }) => {
  return (
    <div className='error-text'>{errorMessage}</div>
  );
};

export default Error;

Error.propTypes = {
  errorMessage: PropTypes.string,
};