import { combineReducers } from 'redux';
import users from './usersReducer';
import tickets from './ticketsReducer';

export default combineReducers({ users, tickets });
