import produce from 'immer';

const INITIAL_STATE = {
  timeCasa: null,
  placarCasa: 0,
  timeVisitante: null,
  placarVisitante: 0,
  golsCasa: [],
  golsVisitante: [],
};

export default function partida(state = INITIAL_STATE, action) {
  switch (action.type) {
    case '@partida/INICIAR_PARTIDA':
      return produce(state, draft => {
        // eslint-disable-next-line no-param-reassign
        draft.timeCasa = action.payload.timeCasa;
        // eslint-disable-next-line no-param-reassign
        draft.timeVisitante = action.payload.timeVisitante;
      });
    case '@partida/LANCAR_GOL':
      return produce(state, draft => {
        // eslint-disable-next-line no-param-reassign
        draft.golsCasa = action.payload.golsCasa;
        // eslint-disable-next-line no-param-reassign
        draft.golsVisitante = action.payload.golsVisitante;
        // eslint-disable-next-line no-param-reassign
        draft.placarCasa = action.payload.placarCasa;
        // eslint-disable-next-line no-param-reassign
        draft.placarVisitante = action.payload.placarVisitante;
      });
    case '@auth/SIGN_OUT':
      return produce(state, draft => {
        // eslint-disable-next-line no-param-reassign
        draft.timeCasa = null;
        // eslint-disable-next-line no-param-reassign
        draft.timeVisitante = null;
        // eslint-disable-next-line no-param-reassign
        draft.placarCasa = 0;
        // eslint-disable-next-line no-param-reassign
        draft.placarVisitante = 0;
        // eslint-disable-next-line no-param-reassign
        draft.golsVisitante = [];
        // eslint-disable-next-line no-param-reassign
        draft.golsCasa = [];
      });
    case '@partida/ZERAR_PARTIDA':
      return produce(state, draft => {
        // eslint-disable-next-line no-param-reassign
        draft.timeCasa = null;
        // eslint-disable-next-line no-param-reassign
        draft.timeVisitante = null;
        // eslint-disable-next-line no-param-reassign
        draft.placarCasa = 0;
        // eslint-disable-next-line no-param-reassign
        draft.placarVisitante = 0;
        // eslint-disable-next-line no-param-reassign
        draft.golsCasa = [];
        // eslint-disable-next-line no-param-reassign
        draft.golsVisitante = [];
      });

    default:
      return state;
  }
}
