import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

interface TimeState {
  time: number;
  started: boolean;
  paused: boolean;
}

const initialState: TimeState = {
  time: 0,
  started: false,
  paused: false,
};

const timeSlice = createSlice({
  name: 'time',
  initialState,
  reducers: {
    setTime: (state, action: PayloadAction<number>) => {
      state.time = action.payload;
    },
    startCountdown: (state) => {
      state.started = true;
      state.paused = false;
    },
    pauseCountdown: (state) => {
      state.paused = true;
    },
    resumeCountdown: (state) => {
      state.paused = false;
    },
    resetCountdown: (state) => {
      state.started = false;
      state.paused = false;
      state.time = 0;
    },
  },
});

export const {
  setTime,
  startCountdown,
  pauseCountdown,
  resumeCountdown,
  resetCountdown,
} = timeSlice.actions;

export default timeSlice.reducer;
