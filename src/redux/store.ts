import { configureStore } from '@reduxjs/toolkit';
import { recommendationReducer } from './reducer';

const store = configureStore({
  reducer: {
    recommendation: recommendationReducer,
  },
});

export default store;
