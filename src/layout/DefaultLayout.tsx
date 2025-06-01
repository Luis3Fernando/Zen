import { useTheme } from '../hooks/useTheme';
import Zen from '../themes/Zen';
import Winter from '../themes/Winter';
import Header from '../components/Header';
import TimerHeader from '../components/TimerHeader';
import { useTime } from '../hooks/useTime';

const backgrounds: { [key: string]: React.FC } = {
  zen: Zen,
  winter: Winter,
};

const DefaultLayout = ({ children }: { children: React.ReactNode }) => {
  const { theme } = useTheme();
  const { started } = useTime();
  const Background = backgrounds[theme.name.toLowerCase()] || Zen;

  return (
    <div className="relative w-full h-screen overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full z-0">
        <Background />
      </div>
      <div className="relative z-10 h-screen">
        {!started ? <Header /> : <TimerHeader />}
        {children}
      </div>
    </div>
  );
};

export default DefaultLayout;
