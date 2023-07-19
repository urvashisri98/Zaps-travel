import React from 'react';
import { InputAdornment, TextField } from '@mui/material';
import LockIcon from '@mui/icons-material/Lock';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import { login } from '../../../utils/validations/login';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Formik } from 'formik';

import './style.css';

const LoginForm = () => {
  const navigate = useNavigate();
  const initialValues = {
    email: '',
    password: '',
  };

  const {t, i18n} = useTranslation();

  const submitForm = (values) => {
    console.log(values);
  };

  // (?=.*\d)
    
  return (
    <>
      <button onClick={()=> i18n.changeLanguage('en')}>EN</button>
      <button onClick={()=> i18n.changeLanguage('ar')}>AR</button>
      <div className='card-container'>
        <div className='card-login'>
          <Formik
            initialValues={initialValues}
            onSubmit={submitForm}
            validationSchema={login(t)}
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
                  <div className='card-title-login'>{t('login.loginTitle')}</div>
                  <div className='card-meta-title-login'>{t('login.loginMetaTitle')}</div>
                  <form onSubmit={handleSubmit}>
                    <div className='input-title-login-secondary'>{t('login.InputTitleEmailId')}</div>
                    <TextField
                      variant='outlined'
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position='start'>
                            <MailOutlineIcon />
                          </InputAdornment>
                        ),
                      }}
                      placeholder={t('login.placeholderEmailId')}
                      name='email'
                      value={values.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className='text-field'
                    />
                    { errors.email && touched.email && <span className='error'>{errors.email}</span> }
                    <div className='input-title-login-secondary'>{t('login.InputTitlePassword')}</div>
                    <TextField
                      variant='outlined'
                      type='password'
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position='start'>
                            <LockIcon />
                          </InputAdornment>
                        ),
                      }}
                      placeholder={t('login.placeholderPassword')}
                      name='password'
                      value={values.password}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className='text-field'
                    />
                    { errors.password && touched.password && <span className='error'>{errors.password}</span> }
                    <div className='forgot-password'>{t('login.forgotPassword')}</div>
                    <button className='card-button-login-secondary' type='submit'>{t('login.continue')}</button>
                    <div className='card-bottom-title-login'>{t('login.dontHaveAccount')} <span className='register' onClick={() => navigate('/signup')}>{t('login.registerHere')} </span></div>
                    <div className='card-bottom-title-login2'>{t('login.bottomTitle1')} <span className='register'>{t('login.bottomTitle2')} </span> & <span className='register'>{t('login.bottomTitle3')} </span></div>
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

export default LoginForm;