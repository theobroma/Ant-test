import {
  FETCH_USERS_PENDING,
  FETCH_USERS_FULLFILED,
  FETCH_USERS_REJECTED,
  FETCH_USERS_FULFILLED,
  ADD_USER_PENDING,
  ADD_USER_FULFILLED,
  REMOVE_USER_PENDING,
  REMOVE_USER_FULFILLED,
} from '../actions';

export const initialState = {
  data: [],
  pending: false,
  errorMessage: '',
};

function tickets(state = initialState, action) {
  return state;
}

export default tickets;
