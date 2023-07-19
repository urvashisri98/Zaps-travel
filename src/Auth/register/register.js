import React, { useState } from 'react';
import { InputAdornment, TextField } from '@mui/material';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import PersonIcon from '@mui/icons-material/Person';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import LockIcon from '@mui/icons-material/Lock';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { register } from '../../utils/validations/register';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Formik } from 'formik';

import './style.css';

const RegisterForm = () => {
  const initialValues = {
    email: '',
    number: '',
    firstName: '',
    lastName: '',
    password: '',
    confirmPassword: ''
  };

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    
  const {t, i18n} = useTranslation();
  const navigate = useNavigate();

  const submitForm = (values) => {
    console.log(values);
  };


  return (
    <>
      <button onClick={()=> i18n.changeLanguage('en')}>EN</button>
      <button onClick={()=> i18n.changeLanguage('ar')}>AR</button>
      <div className='card-container-register'>
        <div className='card-register'>
          <Formik
            initialValues={initialValues}
            onSubmit={submitForm}
            validationSchema={register(t)}
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
                  <div className='card-title '>{t('registration.registrationTitle')}</div>
                  <div className='card-meta-title '>{t('registration.registrationMetaTitle')}</div>
                  <form onSubmit={handleSubmit}>
                    <div className='input-title'>{t('registration.InputTitleEmailId')}</div>
                    <TextField
                      variant='outlined'
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position='start'>
                            <MailOutlineIcon />
                          </InputAdornment>
                        ),
                      }}
                      placeholder={t('registration.placeholderEmailId')}
                      value={values.email}
                      name='email'
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className='text-field'
                    />
                    {/* <span>{errors.email}</span> */}
                    { errors.email && touched.email && <p className='error'>{errors.email}</p> }
                    <div className='input-title'>{t('registration.InputTitleFirstName')}</div>
                    <TextField
                      variant='outlined'
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position='start'>
                            <PersonIcon />
                          </InputAdornment>
                        ),
                      }}
                      placeholder={t('registration.placeholderFirstName')}
                      name='firstName'
                      value={values.firstName}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className='text-field'
                    />
                    { errors.firstName && touched.firstName && <span className='error'>{errors.firstName}</span> }
                    <div className='input-title'>{t('registration.InputTitleLastName')}</div>
                    <TextField
                      variant='outlined'
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position='start'>
                            <PersonIcon />
                          </InputAdornment>
                        ),
                      }}
                      placeholder={t('registration.placeholderLastName')}
                      name='lastName'
                      value={values.lastName}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className='text-field'
                    />
                    { errors.lastName && touched.lastName && <span className='error'>{errors.lastName}</span> }
                    <div className='input-title'>{t('registration.InputTitleMobile')}</div>
                    <TextField
                      variant='outlined'
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position='start'>
                            <PhoneIphoneIcon />
                          </InputAdornment>
                        ),
                      }}
                      placeholder={t('registration.placeholderMobile')}
                      name='number'
                      value={values.number}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className='text-field'
                    />
                    { errors.number && touched.number && <span className='error'>{errors.number}</span> }
                    <div className='input-title'>{t('registration.InputTitlePassword')}</div>
                    <TextField
                      variant='outlined'
                      type={showPassword ? 'text': 'password'}
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position='start'>
                            <LockIcon />
                          </InputAdornment>
                        ),
                        endAdornment: (
                          <InputAdornment position='start' onClick={() => setShowPassword(!showPassword)} style={{ cursor: 'pointer'}}>
                            { showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
                          </InputAdornment>
                        )
                      }}
                      placeholder={t('registration.placeholderPassword')}
                      value={values.password}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className='text-field'
                      name='password'
                    />
                    { errors.password && touched.password && <span className='error'>{errors.password}</span> }
                    <div className='input-title'>{t('registration.InputTitleConfirmPassword')}</div>
                    <TextField
                      variant='outlined'
                      type={showConfirmPassword ? 'text': 'password'}
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position='start'>
                            <LockIcon />
                          </InputAdornment>
                        ),
                        endAdornment: (
                          <InputAdornment position='start' onClick={() => setShowConfirmPassword(!showConfirmPassword)} style={{ cursor: 'pointer'}}>
                            { showConfirmPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
                          </InputAdornment>
                        )
                      }}
                      placeholder={t('registration.placeholderConfirmPassword')}
                      value={values.confirmPassword}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className='text-field'
                      name='confirmPassword'
                    />
                    { errors.confirmPassword && touched.confirmPassword && <span className='error'>{errors.confirmPassword}</span> }
                    <button className='card-button' type='submit'>{t('registration.registerButton')}</button>
                    <div className='card-bottom-title' onClick={() => navigate('/login')}>
                      <ArrowBackIcon className='login' style={{ marginRight: '3px'}}/>
                      <span className='login'>{t('registration.backToLoginButton')}</span>
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

export default RegisterForm;