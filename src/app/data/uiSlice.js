import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  showLinks: true,
};

export const uiSlice = createSlice({
  name: 'ui',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    toggle: (state) => {
      state.showLinks = !state.showLinks;
    },
  },
});

export const { toggle } = uiSlice.actions;
export const getToggle = (state) => state.ui.showLinks;

export default uiSlice.reducer;
