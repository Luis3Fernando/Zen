import { useTime } from '../hooks/useTime';
import { IoArrowBack, IoPauseOutline, IoPlayOutline } from 'react-icons/io5';
import { VscDebugRestart } from 'react-icons/vsc';

const TimerHeader = () => {
    const { reset, paused, pause, resume } = useTime();

    const togglePause = () => {
        paused ? resume() : pause();
    };

    return (
        <header className="absolute top-0 left-0 w-full p-4 flex justify-start gap-4 text-white font-light">
            <a
                href="/"
                className="bg-white/10 px-4 py-2 rounded hover:bg-white/20 transition"
            >
                <IoArrowBack size={22} />
            </a>
            <button
                type="button"
                className="bg-white/10 px-4 py-2 rounded hover:bg-white/20 transition"
                onClick={reset}
            >
                <VscDebugRestart size={22} />
            </button>

            <button
                className="bg-white/10 px-4 py-2 rounded hover:bg-white/20 transition"
                onClick={togglePause}
            >
                {paused ? <IoPlayOutline size={22} /> : <IoPauseOutline size={22} />}
            </button>
        </header>
    );
};

export default TimerHeader;
