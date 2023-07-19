import React from 'react';
import { InputAdornment, TextField } from '@mui/material';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import { loginIn } from '../../../utils/validations/login';
import { useTranslation } from 'react-i18next';
import { Formik } from 'formik';

import './style.css';

const LoginForm = () => {
  const initialValues = {
    number: '',
  };

  const {t, i18n} = useTranslation();

  const submitForm = (values) => {
    console.log(values);
  };
    
  return (
    <>
      <button onClick={()=> i18n.changeLanguage('en')}>EN</button>
      <button onClick={()=> i18n.changeLanguage('ar')}>AR</button>
      <div className='card-container'>
        <div className='card-login'>
          <Formik
            initialValues={initialValues}
            onSubmit={submitForm}
            validationSchema={loginIn(t)}
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
                  <form onSubmit={handleSubmit}>
                    <div className='card-title-login'>{t('login.loginTitle')}</div>
                    <div className='card-meta-title-login'>{t('login.loginMetaTitle')}</div>
                    <div className='input-title-login'>{t('login.InputTitleMobile')}</div>
                    <TextField
                      variant='outlined'
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position='start'>
                            <PhoneIphoneIcon />
                          </InputAdornment>
                        ),
                      }}
                      placeholder={t('login.placeholderMobile')}
                      name='number'
                      value={values.number}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className='text-field'
                    />
                          
                    { errors.number && touched.number && <span className='error'>{errors.number}</span> }
                    <button className='card-button-login' type='submit'>{t('login.continue')}</button>
                    <div className='card-bottom-title-login'>{t('login.bottomTitle1')} <span className='register'>{t('login.bottomTitle2')} </span> & <span className='register'>{t('login.bottomTitle3')} </span></div>
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