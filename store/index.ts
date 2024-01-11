import { configureStore, AnyAction, CombinedState } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import { persistStore, persistReducer, Storage } from 'redux-persist';

import { logout } from './auth/slice';
import api from '@/api';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { appReducer } from './reducers';

interface PersistConfig {
  key: string;
  storage: Storage;
}

const persistConfig: PersistConfig = {
  key: 'delliv',
  storage: AsyncStorage,
};

const persistedReducer = persistReducer(persistConfig, appReducer);

const rootReducer = (state: CombinedState<any>, action: AnyAction) => {
  if (logout.match(action)) {
    persistConfig.storage.removeItem('persist:delliv');
    state = undefined;
  }

  return persistedReducer(state, action);
};

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(api.middleware),
});

const persistor = persistStore(store);

export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = (): AppDispatch => useDispatch<AppDispatch>();

export { store, persistor, rootReducer };
