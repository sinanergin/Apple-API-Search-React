import { createSlice } from '@reduxjs/toolkit';

import { initialState, State } from './initialState';
// import searchResult from '../../result.json';

const slicer = createSlice({
  name: 'iTuneSearchSlicer',
  initialState: initialState,
  reducers: {
    getAllItems(state: State, action) {
      state.items = action.payload;
      console.log(action.payload);
    },
    increaseLoadedItem(state: State, action) {
      state.lastItemNumber += state.loadItemCount;
      console.log(state.lastItemNumber);
    },
  },
});

export const searchActions = slicer.actions;
export default slicer;
