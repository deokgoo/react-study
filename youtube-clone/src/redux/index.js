import { combineReducers } from 'redux';
import authStore from './authStore/reducer';
import videoStore from './videoStore/reducer';

export default combineReducers({ authStore, videoStore });
