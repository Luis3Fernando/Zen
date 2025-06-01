import { useTheme } from '../hooks/useTheme';
import { IoIosArrowBack, IoIosArrowForward  } from "react-icons/io";
import { FaGithub } from 'react-icons/fa';

const Header = () => {
  const { theme, nextTheme, prevTheme } = useTheme();

  return (
    <header className="w-full flex justify-center mt-5">
      <div className="w-[90%] max-w-4xl flex justify-between items-center px-6 py-3 bg-white/10 backdrop-blur-md rounded-md">
        {/* Selector de temas */}
        <div className="flex items-center">
          {/* Botón anterior */}
          <button
            onClick={prevTheme}
            className="px-3 py-1 border text-white border-white rounded-l-md text-sm hover:scale-105 transition-transform duration-200"
          >
            <IoIosArrowBack size={20}/>
          </button>

          {/* Nombre del tema */}
          <div
            className="px-3 py-1 mx-2 border border-white min-w-[100px] text-center font-semibold capitalize text-sm text-white"
          >
            {theme.name}
          </div>

          {/* Botón siguiente */}
          <button
            onClick={nextTheme}
            className="px-3 py-1 text-white border border-white rounded-r-lg text-sm hover:scale-105 transition-transform duration-200"
          >
            <IoIosArrowForward size={20} />
          </button>
        </div>

        {/* GitHub */}
        <a
          href="https://github.com/Luis3Fernando/Zen"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center text-white gap-2 px-3 py-1 border border-white rounded-md hover:scale-105 transition-transform duration-200 text-sm"
        >
          <FaGithub className="text-lg" />
          <span>GitHub</span>
        </a>
      </div>
    </header>
  );
};

export default Header;
