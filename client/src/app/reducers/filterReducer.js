import { SET_CURRENCY } from 'constants/actions';

export const initialState = {
  currency: 'UAH',
};

function filter(state = initialState, action) {
  const { type, currency } = action;
  switch (type) {
    case SET_CURRENCY:
      return { ...state, currency: currency };
    default:
      return state;
  }
}

export default filter;
