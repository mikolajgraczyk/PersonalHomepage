import { createSlice } from "@reduxjs/toolkit";

const themeSlice = createSlice({
    name: 'theme',
    initialState: {
        darkMode: false,
    },
    reducers: {
        switchTheme: state => {
            state.darkMode = !state.darkMode;
        },
    },
});

export const { switchTheme } = themeSlice.actions;

export const selectThemeState = state => state.theme;
export const selectTheme = state => selectThemeState(state).darkMode;
export default themeSlice.reducer;