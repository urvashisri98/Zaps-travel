import * as yup from 'yup';

export const register = (t) => yup.object().shape({
  number: yup.string().matches(
    /[789]\d{9}$/,
    t('validations.signup/login.validPhoneNumber')
  ).required(t('validations.signup/login.phoneNumberRequired')),
  email: yup.string().matches(/[a-z0-9]+@[a-z]+\.[a-z]{2,3}/, t('validations.signup/login.validEmail')).required(t('validations.signup/login.emailRequired')),
  firstName: yup.string().required(t('validations.signup/login.firstNameRequired'))
    .min(1, t('validations.signup/login.minFirstNameLength'))
    .max(20, t('validations.signup/login.maxFirstNamelength'))
    .matches(/^[A-Za-z]+$/, t('validations.signup/login.validFirstName')),
  lastName: yup.string().required(t('validations.signup/login.lastNameRequired'))
    .min(1, t('validations.signup/login.minLastNameLength'))
    .max(20, t('validations.signup/login.maxLastNamelength'))
    .matches(/^[A-Za-z]+$/, t('validations.signup/login.validLastName')),
  password: yup.string().matches(
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
    t('validations.signup/login.validPassword')
  ).required(t('validations.signup/login.passwordRequired')),
  confirmPassword: yup.string().required(t('validations.signup/login.passwordRequired')).oneOf([yup.ref('password'), null], t('validations.signup/login.passwordMustMatch'))
});