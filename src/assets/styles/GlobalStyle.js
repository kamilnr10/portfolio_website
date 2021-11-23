import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Black+Ops+One&family=Ubuntu:wght@300;400;700&display=swap');

html {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

*, *::after, *::before {
    box-sizing: inherit;
}

body {
    font-family: 'Ubuntu', sans-serif;
    background-color: #080C21;
    color: #f3f3f3;

}

a, button {
    font-family: 'Ubuntu', sans-serif;
}

svg {
    font-family: 'Black Ops One', cursive;
}
`;
