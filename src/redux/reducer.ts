import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: '',
};

export const recommendationSlice = createSlice({
  name: 'recommendation',
  initialState,
  reducers: {
    setRecommendation: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setRecommendation } = recommendationSlice.actions;

export const recommendationReducer = recommendationSlice.reducer;
