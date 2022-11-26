import { configureStore } from '@reduxjs/toolkit';
import uiReducer from './data/uiSlice.js';
import patternReducer from './data/patterns.js';

export const store = configureStore({
  reducer: {
    patterns: patternReducer,
    ui: uiReducer,
  },
});
