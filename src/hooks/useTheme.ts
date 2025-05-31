import { useDispatch, useSelector } from 'react-redux';
import type { RootState } from '../store/store';
import { setTheme, resetTheme } from '../store/slices/themeSlice';
import type { Theme } from '../interface/theme';

export const useTheme = () => {
    const dispatch = useDispatch();
    const theme = useSelector((state: RootState) => state.theme.current);

    const updateTheme = (newTheme: Theme) => {
        dispatch(setTheme(newTheme));
    };

    const restoreDefaultTheme = () => {
        dispatch(resetTheme());
    };

    return {
        theme,
        updateTheme,
        restoreDefaultTheme,
    };
};
