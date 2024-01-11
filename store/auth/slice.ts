import authApi from '@/api/auth';
import { User } from '@/api/models';
import { createSlice } from '@reduxjs/toolkit';

export type AuthState = {
  token: string;
  user: User | null;
};

export const initialState: AuthState = {
  token: '',
  user: null,
};

const slice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: (state) => {
      state.token = '';
      state.user = null;
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(authApi.endpoints.signIn.matchFulfilled, (state, action) => {
      state.token = action.payload.token;
      state.user = action.payload.user;
    });
    builder.addMatcher(authApi.endpoints.fetchProfile.matchFulfilled, (state, action) => {
      state.user = action.payload;
    });
  },
});

export const { logout } = slice.actions;
export default slice.reducer;
