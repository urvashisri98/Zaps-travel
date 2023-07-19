import { dayFullNames, monthShortNames } from '../../config';

export const formatDate = (date) => {
  const t = new Date(date);
  return t.getDate() + ' ' + monthShortNames[t.getMonth()] + ', ' + t.getFullYear();
};

export const formatDay = (date) => {
  const t = new Date(date);
  return dayFullNames[t.getDay()];
};
