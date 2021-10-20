import { configureStore } from '@reduxjs/toolkit';
import pageReducer from 'features/PageSlice/PageSlice';
import photoReducer from 'features/PhotoSlice/PhotoSlice';

const rootReducer = {
  photo: photoReducer,
  page: pageReducer,
}

export const store = configureStore({
  reducer: rootReducer,
});
