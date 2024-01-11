import { combineReducers } from '@reduxjs/toolkit';

import api from '../api';
import authSlice from './auth/slice';

export const appReducer = combineReducers({
  [api.reducerPath]: api.reducer,
  auth: authSlice,
});
