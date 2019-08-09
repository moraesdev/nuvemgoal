import { takeLatest, all } from 'redux-saga/effects';
import { iniciarPartida, lancarGol, zerarPartida } from './actions';
import history from '../../../services/history';

export function* goPartida({ payload }) {
  const { timeCasa, timeVisitante } = payload;

  yield iniciarPartida(timeCasa, timeVisitante);
}

export function* goLancarGol({ payload }) {
  const { golsCasa, golsVisitante, placarCasa, placarVisitante } = payload;

  yield lancarGol(golsCasa, golsVisitante, placarCasa, placarVisitante);
}

export function* goZerar() {
  yield zerarPartida();

  history.push('/inicio');
}

export default all([
  takeLatest('@partida/INICIAR_PARTIDA', goPartida),
  takeLatest('@partida/LANCAR_GOL', goLancarGol),
  takeLatest('@partida/ZERAR_PARTIDA', goZerar),
]);
