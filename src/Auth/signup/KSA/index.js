import React from 'react';
import { InputAdornment, TextField } from '@mui/material';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { signup } from '../../../utils/validations/signup';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Formik } from 'formik';

import './style.css';

const SignupForm = () => {
  const initialValues = {
    email: '',
  };

  const {t, i18n} = useTranslation();
  const navigate = useNavigate();

  const submitForm = (values) => {
    console.log(values);
  };

  return (
    <>
      <button onClick={()=> i18n.changeLanguage('en')}>EN</button>
      <button onClick={()=> i18n.changeLanguage('ar')}>AR</button>
      <div className='card-container'>
        <div className='card-signup'>
          <Formik
            initialValues={initialValues}
            onSubmit={submitForm}
            validationSchema={signup(t)}
          >
            {(formik) => {
              const {
                values,
                handleChange,
                handleSubmit,
                errors,
                touched,
                handleBlur,
              } = formik;
              return (
                <>
                  <div className='card-title '>{t('signup.registrationTitle')}</div>
                  <div className='card-meta-title '>{t('signup.registrationMetaTitle')}</div>
                  <form onSubmit={handleSubmit}>
                    <div className='input-title-signup-secondary'>{t('signup.InputTitleEmailId')}</div>
                    <TextField
                      variant='outlined'
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position='start'>
                            <MailOutlineIcon />
                          </InputAdornment>
                        ),
                      }}
                      placeholder={t('signup.placeholderEmailId')}
                      value={values.email}
                      name='email'
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className='text-field'
                    />
                    { errors.email && touched.email && <span className='error'>{errors.email}</span> }
                    <button className='card-button-secondary' type='submit'>{t('signup.registerButton')}</button>
                                        
                    <div className='card-bottom-title' onClick={() => navigate('/login')}>
                      <ArrowBackIcon className='login' style={{ marginRight: '3px', fontSize: '14px'}}/>
                      <span className='login'>{t('signup.backToLoginButton')}</span>
                    </div>
                  </form>
                </>
              );
            }}
          </Formik>  
        </div>
      </div>
    </>
  );
};

export default SignupForm;