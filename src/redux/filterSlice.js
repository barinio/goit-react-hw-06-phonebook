import { createSlice } from '@reduxjs/toolkit';
import { INITIAL_STATE } from './initialState';

const filterSlice = createSlice({
  name: 'filterList',
  initialState: INITIAL_STATE.filter,
  reducers: {
    setFilter: (_, action) => action.payload,
  },
});
export const { setFilter } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
