import { useDispatch, useSelector } from 'react-redux';
import type { RootState } from '../store/store';
import {
    setTime,
    startCountdown,
    pauseCountdown,
    resumeCountdown,
    resetCountdown,
} from '../store/slices/timeSlice';

export const useTime = () => {
    const dispatch = useDispatch();
    const time = useSelector((state: RootState) => state.time.time);
    const started = useSelector((state: RootState) => state.time.started);
    const paused = useSelector((state: RootState) => state.time.paused);

    const updateTime = (newTime: number) => {
        dispatch(setTime(newTime));
    };

    const start = () => {
        dispatch(startCountdown());
    };

    const pause = () => {
        dispatch(pauseCountdown());
    };

    const resume = () => {
        dispatch(resumeCountdown());
    };

    const reset = () => {
        dispatch(resetCountdown());
    };

    return {
        time,
        started,
        paused,
        updateTime,
        start,
        pause,
        resume,
        reset,
    };
};
