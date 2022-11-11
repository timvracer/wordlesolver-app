import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import uiReducer from './data/uiSlice.js';
import patternReducer from './data/patterns.js';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    patterns: patternReducer,
    ui: uiReducer,
  },
});
