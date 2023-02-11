import { Wrapper, ToggleText, Button, ButtonIcon } from "./styled";
import { useDispatch } from "react-redux";
import { switchTheme } from "./themeSlice";
import { ReactComponent as ThemeIcon } from "./ThemeIcon.svg";
import { useDarkTheme } from "../../useDarkTheme";

const ThemeSwitch = () => {
    const theme = useDarkTheme();
    const dispatch = useDispatch();

    return (
        <Wrapper>
            <ToggleText darkModeEnabled={theme}>DARK MODE {theme ? "ON" : "OFF"}</ToggleText>
            <Button
                onClick={() => dispatch(switchTheme())}
                darkModeEnabled={theme}
            >
                <ButtonIcon darkModeEnabled={theme}>
                    <ThemeIcon />
                </ButtonIcon>
            </Button>
        </Wrapper>
    );
};

export default ThemeSwitch;