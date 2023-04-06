import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  recommendations: '',
};

export const recommendationSlice = createSlice({
  name: 'recommendation',
  initialState,
  reducers: {
    setRecommendation: (state, action) => {
      state.recommendations = action.payload;
    },
  },
});

export const { setRecommendation } = recommendationSlice.actions;

export const recommendationReducer = recommendationSlice.reducer;
