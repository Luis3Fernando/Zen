import { configureStore } from '@reduxjs/toolkit';
import themeReducer from './slices/themeSlice';
import timeReducer from './slices/timeSlice';

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    time: timeReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
