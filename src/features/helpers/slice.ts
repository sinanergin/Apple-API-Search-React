import { createSlice } from '@reduxjs/toolkit';
import { initialState, State } from './initialState';

const slicer = createSlice({
  name: 'iTuneSearchSlicer',
  initialState: initialState,
  reducers: {
    getAllItems(state: State, action) {
      state.items = action.payload;
      state.lastItemNumber = 0;
      state.lastItemNumber += state.loadItemCount;
      state.fetchHandleId = Math.random();
    },
    increaseLoadedItem(state: State, action) {
      if (state.items.length > state.lastItemNumber + state.loadItemCount) {
        state.lastItemNumber += state.loadItemCount;
        state.fetchHandleId = Math.random();
      }
    },
    reset(state: State, action) {
      state = { ...state, ...initialState };
    },
  },
});

export const searchActions = slicer.actions;
export default slicer;
