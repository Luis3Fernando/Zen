import { createSlice } from '@reduxjs/toolkit';

interface TimeState {
    time: number;
    initialTime: number;
    started: boolean;
    paused: boolean;
}

const initialState: TimeState = {
    time: 0,
    initialTime: 0,
    started: false,
    paused: false,
};

const timeSlice = createSlice({
    name: 'time',
    initialState,
    reducers: {
        setTime: (state, action) => {
            state.time = action.payload;
            state.initialTime = action.payload;
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
            state.time = state.initialTime;
            state.started = true;
            state.paused = false;
        },
        decrementTime: (state) => {
            if (state.time > 0) {
                state.time -= 1;
            }
        }
    },
});

export const {
    setTime,
    startCountdown,
    pauseCountdown,
    resumeCountdown,
    resetCountdown,
    decrementTime,
} = timeSlice.actions;

export default timeSlice.reducer;
