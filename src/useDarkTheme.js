import { useSelector } from "react-redux";
import { selectTheme } from "./features/ThemeSwitch/themeSlice";

export const useDarkTheme = () => {
    const theme = useSelector(selectTheme);
    return theme;
};