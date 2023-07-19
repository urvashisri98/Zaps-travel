import React from 'react';
import { InputAdornment, TextField } from '@mui/material';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import PersonIcon from '@mui/icons-material/Person';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { signupIn } from '../../../utils/validations/signup';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Formik } from 'formik';

import './style.css';


const SignupForm = () => {
  const initialValues = {
    email: '',
    number: '',
    firstName: '',
    lastName: '',
  };

  const {t, i18n} = useTranslation();
  const navigate = useNavigate();

  const submitForm = (values) => {
    console.log(values);
  };
    // /^\p{L}+$/u
    
  return (
    <>
      <button onClick={()=> i18n.changeLanguage('en')}>EN</button>
      <button onClick={()=> i18n.changeLanguage('ar')}>AR</button>
      <div className='card-container'>
        <div className='card-signup-secondary'>
          <Formik
            initialValues={initialValues}
            onSubmit={submitForm}
            validationSchema={signupIn(t)}
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
                  <div className='card-title'>{t('signup.registrationTitle')}</div>
                  <div className='card-meta-title'>{t('signup.registrationMetaTitle')}</div>
                  <form onSubmit={handleSubmit}>
                    <div className='input-title-signup'>{t('signup.InputTitleMobile')}</div>
                    <TextField
                      variant='outlined'
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position='start'>
                            <PhoneIphoneIcon />
                          </InputAdornment>
                        ),
                      }}
                      placeholder={t('signup.placeholderMobile')}
                      name='number'
                      value={values.number}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className='text-field'
                    />
                    { errors.number && touched.number && <span className='error'>{errors.number}</span> }
                    <div className='input-title-signup'>{t('signup.InputTitleFirstName')}</div>
                    <TextField
                      variant='outlined'
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position='start'>
                            <PersonIcon />
                          </InputAdornment>
                        ),
                      }}
                      placeholder={t('signup.placeholderFirstName')}
                      name='firstName'
                      value={values.firstName}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className='text-field'
                    />
                    { errors.firstName && touched.firstName && <span className='error'>{errors.firstName}</span> }
                    <div className='input-title-signup'>{t('signup.InputTitleLastName')}</div>
                    <TextField
                      variant='outlined'
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position='start'>
                            <PersonIcon />
                          </InputAdornment>
                        ),
                      }}
                      placeholder={t('signup.placeholderLastName')}
                      name='lastName'
                      value={values.lastName}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className='text-field'
                    />
                    { errors.lastName && touched.lastName && <span className='error'>{errors.lastName}</span> }
                    <div className='input-title-signup'>{t('signup.InputTitleEmailId')}</div>
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
                    <button className='card-button' type='submit'>{t('signup.registerButton')}</button>
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