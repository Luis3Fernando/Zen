import { useEffect, useRef } from "react";
import { useTime } from "../hooks/useTime";
import { useDispatch } from "react-redux";
import { decrementTime } from "../store/slices/timeSlice";

const radius = 140;
const circumference = 2 * Math.PI * radius;

const formatTime = (value: number): string => {
    return value.toString().padStart(2, "0");
};

const CountdownCircular = () => {
    const {
        time,
        initialTime,
        started,
        paused,
    } = useTime();

    const dispatch = useDispatch();
    const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

    const percent = time / initialTime || 0;
    const offset = circumference * (1 - percent);

    useEffect(() => {
        if (!started || paused || time <= 0) {
            if (intervalRef.current) clearInterval(intervalRef.current);
            return;
        }

        intervalRef.current = setInterval(() => {
            dispatch(decrementTime());
        }, 1000);

        return () => {
            if (intervalRef.current) {
                clearInterval(intervalRef.current);
            }
        };
    }, [started, paused, time, dispatch]);

    const minutes = Math.floor(time / 60);
    const seconds = time % 60;

    useEffect(() => {
        const minutes = Math.floor(time / 60).toString().padStart(2, '0');
        const seconds = (time % 60).toString().padStart(2, '0');
        document.title = `${minutes}:${seconds}`;
    }, [time]);


    return (
        <div className="flex justify-center items-center min-h-screen transition-all duration-500">
            <svg width="350" height="350" className="relative">
                <circle
                    r={radius}
                    cx="175"
                    cy="175"
                    stroke="#DCE0E5"
                    strokeWidth={2}
                    fill="transparent"
                />
                <circle
                    r={radius}
                    cx="175"
                    cy="175"
                    stroke="#FFFFFF"
                    strokeWidth={10}
                    fill="transparent"
                    strokeDasharray={circumference}
                    strokeDashoffset={offset}
                    strokeLinecap="round"
                    className="transition-all duration-1000 ease-linear"
                    style={{
                        transform: "rotate(-90deg)",
                        transformOrigin: "50% 50%",
                    }}
                />
                <text
                    x="50%"
                    y="50%"
                    textAnchor="middle"
                    dy=".3em"
                    fill="#FFFFFF"
                    fontSize="48"
                    fontFamily="monospace"
                >
                    {formatTime(minutes)}:{formatTime(seconds)}
                </text>
            </svg>
        </div>
    );
};

export default CountdownCircular;
