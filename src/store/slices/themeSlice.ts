import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { Theme } from '../../interface/theme';
import { themeComponents } from '../../themes/themeList';

interface ThemeState {
  theme: Theme;
  index: number;
}

const initialIndex = 0;

const initialState: ThemeState = {
  theme: { name: themeComponents[initialIndex].name, colors: { background: '#f0f0f0', text: '#333', accent: '#4CAF50' } },
  index: initialIndex,
};

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    setTheme: (state, action: PayloadAction<Theme>) => {
      state.theme = action.payload;
    },
    nextTheme: (state) => {
      state.index = (state.index + 1) % themeComponents.length;
      state.theme.name = themeComponents[state.index].name;
    },
    prevTheme: (state) => {
      state.index = (state.index - 1 + themeComponents.length) % themeComponents.length;
      state.theme.name = themeComponents[state.index].name;
    },
  },
});

export const { setTheme, nextTheme, prevTheme } = themeSlice.actions;
export default themeSlice.reducer;
