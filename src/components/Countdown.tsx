import CountdownCircular from './CountdownCircular';

const Countdown = () => {
    return (
        <div className="h-10/12 w-full flex items-center justify-center">
            <div className="text-white text-6xl font-mono text-center">
                <CountdownCircular />
            </div>
        </div>
    );
};

export default Countdown;
