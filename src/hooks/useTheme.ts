import { useSelector, useDispatch } from 'react-redux';
import type { RootState } from '../store/store';
import { setTheme, nextTheme, prevTheme } from '../store/slices/themeSlice';

export const useTheme = () => {
  const theme = useSelector((state: RootState) => state.theme.theme);
  const dispatch = useDispatch();

  const changeTheme = (themeName: string) => {
    dispatch(setTheme({ name: themeName, colors: { background: '#f0f0f0', text: '#333', accent: '#4CAF50' } }));
  };

  return {
    theme,
    changeTheme,
    nextTheme: () => dispatch(nextTheme()),
    prevTheme: () => dispatch(prevTheme()),
  };
};
