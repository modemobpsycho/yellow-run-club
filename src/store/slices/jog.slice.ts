import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface jogState {
  distance: number;
  time: number;
  date: Date;
}

const initialState: jogState = {
  distance: 0,
  time: 0,
  date: new Date()
};

const jogSlice = createSlice({
  name: ' jog',
  initialState,
  reducers: {
    setJog: (_state, action: PayloadAction<jogState>) => action.payload,
    resetJog: () => initialState,
    addJog: (state, action: PayloadAction<jogState>) => {
      state.distance += action.payload.distance;
      state.time += action.payload.time;
      state.date = action.payload.date;
    },
    updateJog: (_state, action: PayloadAction<jogState>) => action.payload,
    reset: () => initialState
  }
});

export const { actions, reducer } = jogSlice;
