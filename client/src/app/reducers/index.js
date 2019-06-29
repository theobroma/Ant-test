import { combineReducers } from 'redux';
import users from './usersReducer';
import tickets from './ticketsReducer';
import currency from './currencyReducer';

export default combineReducers({ users, tickets, currency });
