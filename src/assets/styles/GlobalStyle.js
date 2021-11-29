import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
${'' /* @import url('https://fonts.googleapis.com/css2?family=Black+Ops+One&family=Ubuntu:wght@300;400;700&display=swap'); */}
@import url('https://fonts.googleapis.com/css2?family=Black+Ops+One&family=Dosis:wght@300;400;700&display=swap');


*, *::after, *::before {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    color: ${({ theme }) => theme.colors.text}
}

body {
    ${'' /* font-family: 'Ubuntu', sans-serif; */}
    font-family: 'Dosis', sans-serif;
    background-color: #080C21;
    color: #f3f3f3;

}

h1 {
    font-size: ${({ theme }) => theme.fontSize.xl}
}

a, button {
    ${'' /* font-family: 'Ubuntu', sans-serif; */}
    font-family: 'Dosis', sans-serif;
}

svg {
    font-family: 'Black Ops One', cursive;
}

li {
    list-style-type: none;
    font-size: ${({ theme }) => theme.fontSize.m}
}
`;
