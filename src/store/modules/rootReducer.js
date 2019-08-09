import { combineReducers } from 'redux';

import auth from './auth/reducer';
import partida from './partida/reducer';

export default combineReducers({ auth, partida });
