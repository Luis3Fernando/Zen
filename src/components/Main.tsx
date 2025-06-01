import '../styles/main.css';
import { IoTimeOutline } from "react-icons/io5";
import { GoSun } from "react-icons/go";
import { useTime } from '../hooks/useTime';
import { toast } from 'react-hot-toast';

function Main() {
    const { updateTimeFromMinutes, start, time } = useTime();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = parseInt(e.target.value);
        updateTimeFromMinutes(isNaN(value) ? 0 : value);
    };

    const handleStart = () => {
        if(time<=0){
            toast.error('Set a time ');
        }
        if (time > 0) start();
    };

    return (
        <main className="flex w-full h-full flex-col items-center justify-center gap-6 -mt-32 font-mono">
            <div className="flex items-center bg-white/10 rounded-md overflow-hidden ring-1 ring-white/10">
                <span className="px-3 text-white text-xl">
                    <IoTimeOutline />
                </span>
                <input
                    onChange={handleChange}
                    type="number"
                    placeholder="minutes"
                    className="appearance-none bg-white/5 outline-none px-4 py-2 text-white placeholder-white/50 text-lg w-52 text-center"
                    min="1"
                />

            </div>
            <button
                onClick={handleStart}
                className="flex cursor-pointer items-center gap-4 px-8 py-4 rounded-full bg-white/10 hover:bg-white/20 text-white text-2xl transition-transform duration-300 ease-in-out transform hover:scale-110 font-light">
                Start <GoSun className="text-2xl" />
            </button>

        </main>
    );
}

export default Main;
