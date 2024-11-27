import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { constants } from '@/common/helpers/constants';

export interface userState {
  token?: string;
}

const initialState: userState = {
  token: localStorage.getItem(constants.USER_LOCALSTORAGE) || undefined
};

export const userSlice = createSlice({
  name: 'token',
  initialState,
  reducers: {
    logout: (state) => {
      localStorage.removeItem(constants.USER_LOCALSTORAGE);
      state.token = undefined;
    },
    setUser: (state, { payload: token }: PayloadAction<string>) => {
      state.token = token;
      localStorage.setItem(constants.USER_LOCALSTORAGE, token);
    }
  }
});

export const { actions, reducer } = userSlice;
