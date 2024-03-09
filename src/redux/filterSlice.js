import { createSlice } from '@reduxjs/toolkit';

const filtersInitialState = '';

const filterSlice = createSlice({
  name: 'filter',
  initialState: filtersInitialState,
  reducers: {
    setStatusFilter(_, action) {
      return action.payload;
    },
  },
});

export const { setStatusFilter } = filterSlice.actions;

export const filterReducer = filterSlice.reducer;
