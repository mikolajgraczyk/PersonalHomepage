import { createGlobalStyle, css } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    html {
    box-sizing: border-box;
    }

    *, ::after, ::before {
    box-sizing: inherit;
    }

    body {
        font-family: 'Inter', sans-serif; 
        background: ${({theme}) => theme.color.whiteLilac};
        transition: 0.5s;

        ${({darkModeEnabled}) => darkModeEnabled && css`
            background: ${({theme}) => theme.color.mineShaft};
        `}
    }
`;