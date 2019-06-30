import { combineReducers } from 'redux';
import users from './usersReducer';
import tickets from './ticketsReducer';
import currency from './currencyReducer';
import filter from './filterReducer';

export default combineReducers({ users, tickets, currency, filter });
