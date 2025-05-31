import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { Theme } from '../../interface/theme';

const initialTheme: Theme = {
    name: 'zen',
    colors: {
        background: '#f9c5d1',
        text: '#3d2c41',
        accent: '#eec0c6',
    },
};

type ThemeState = {
    current: Theme;
};

const initialState: ThemeState = {
    current: initialTheme,
};

const themeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        setTheme: (state, action: PayloadAction<Theme>) => {
            state.current = action.payload;
        },
        resetTheme: (state) => {
            state.current = initialTheme;
        },
    },
});

export const { setTheme, resetTheme } = themeSlice.actions;
export default themeSlice.reducer;
