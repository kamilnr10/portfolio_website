import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Black+Ops+One&family=Ubuntu:wght@300;400;700&display=swap');



*, *::after, *::before {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    color: ${({ theme }) => theme.colors.text}
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

li {
    list-style-type: none;
}
`;
