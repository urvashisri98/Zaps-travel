import * as yup from 'yup';

export const loginIn = (t) => yup.object().shape({
  number: yup.string().matches(
    /[789]\d{9}$/,
    t('validations.signup/login.validPhoneNumber')
  ).required(t('validations.signup/login.phoneNumberRequired')),
});

export const login = (t) => yup.object().shape({
  email: yup.string().matches(/[a-z0-9]+@[a-z]+\.[a-z]{2,3}/, t('validations.signup/login.validEmail')).required(t('validations.signup/login.emailRequired')),
  password: yup.string().matches(
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
    t('validations.signup/login.validPassword')
  ).required(t('validations.signup/login.passwordRequired'))
});