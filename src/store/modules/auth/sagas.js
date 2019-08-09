import { takeLatest, all } from 'redux-saga/effects';
import { signInSucess } from './actions';
import history from '../../../services/history';

export function* signIn({ payload }) {
  const { nome } = payload;

  yield signInSucess(nome);

  history.push('/inicio');
}

export function signOut() {
  history.push('/');
}

export default all([
  takeLatest('@auth/SIGN_IN_SUCESS', signIn),
  takeLatest('@auth/SIGN_OUT', signOut),
]);
