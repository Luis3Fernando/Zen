import { useTime } from '../hooks/useTime';

const Countdown = () => {
    const { time } = useTime();

    return (
        <div className="h-10/12 w-full flex items-center justify-center">
            <div className="text-white text-6xl font-mono text-center">
                {time}:00
            </div>
        </div>
    );
};

export default Countdown;
