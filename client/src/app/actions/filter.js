import { SET_CURRENCY } from 'constants/actions';

export function setCurrency(currency) {
  return { type: SET_CURRENCY, currency: currency };
}

export default setCurrency;
