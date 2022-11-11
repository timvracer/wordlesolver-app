import { createSlice } from '@reduxjs/toolkit';

//
// patterns are objects as such
//
// {
//    id: <uuid>
//    pattern: <string, length 5>
//    minCount: <integer>
// }
//

const initialState = {
  patterns: [
  ],
};

export const patternsSlice = createSlice({
  name: 'patterns',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {

    //
    // addPattern
    //
    addPattern: (state, action) => {
      const newObj = (action.payload);
      newObj.id =
      state.patterns.push(action.payload);
    },
    //
    // deletePattern
    //
    deletePattern: (state,action) => {
      const index = state.patterns.findIndex((item) => item.id === action.payload);
      if (index) state.patterns.splice(index, 1);
    },
  },
});

export const { addPattern, deletePattern } = patternsSlice.actions;
export const getPatterns = (state) => state.patterns;

export default patternsSlice.reducer;
