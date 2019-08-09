import { all } from 'redux-saga/effects';

import auth from './auth/sagas';
import partida from './partida/sagas';

export default function* rootSaga() {
  return yield all([auth, partida]);
}
