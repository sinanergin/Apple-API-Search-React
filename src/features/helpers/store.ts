import { configureStore } from '@reduxjs/toolkit';
import slicer from './slice';

export const store = configureStore({
  reducer: slicer.reducer,
});
