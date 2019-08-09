import produce from 'immer';

const INITIAL_STATE = {
  nome: null,
};

export default function auth(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@auth/SIGN_IN_SUCESS': {
        // console.log(action.payload.times);

        // eslint-disable-next-line no-param-reassign
        draft.nome = action.payload.nome;
        break;
      }
      case '@auth/SIGN_OUT': {
        // eslint-disable-next-line no-undef
        // eslint-disable-next-line no-param-reassign
        draft.nome = null;
        break;
      }
      default:
    }
  });
}
