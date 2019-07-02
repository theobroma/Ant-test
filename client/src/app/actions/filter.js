import { SET_CURRENCY, SET_STOPS } from 'constants/actions';

export function setCurrency(currency) {
  return { type: SET_CURRENCY, currency: currency };
}

export function setStops(stops) {
  return { type: SET_STOPS, stops: stops };
}

export default setCurrency;
