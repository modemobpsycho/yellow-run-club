import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface jogState {
  dateTo: string;
  dateFrom: string;
}

const initialState: jogState = {
  dateTo: '',
  dateFrom: ''
};

const jogSlice = createSlice({
  name: 'jog',
  initialState,
  reducers: {
    setDateTo: (state, { payload: dateTo }: PayloadAction<string>) => {
      state.dateTo = dateTo;
    },
    setDateFrom: (state, { payload: dateFrom }: PayloadAction<string>) => {
      state.dateFrom = dateFrom;
    },
    resetDates: () => initialState
  }
});

export const { actions, reducer } = jogSlice;
