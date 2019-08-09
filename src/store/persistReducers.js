import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

export default reducers => {
  const persistedReducer = persistReducer(
    {
      key: 'nuvemgoal',
      storage,
      whitelist: ['auth', 'partida'],
    },
    reducers
  );

  return persistedReducer;
};
