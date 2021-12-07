import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
${'' /* @import url('https://fonts.googleapis.com/css2?family=Black+Ops+One&family=Ubuntu:wght@300;400;700&display=swap'); */}
${'' /* @import url('https://fonts.googleapis.com/css2?family=Black+Ops+One&family=Dosis:wght@300;400;700&display=swap'); */}
@import url('https://fonts.googleapis.com/css2?family=Black+Ops+One&family=Inter:wght@200;300;400;700;800&display=swap');

*, *::after, *::before {
    box-sizing: border-box;
    margin: 0;
    padding: 0;

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

p {
    font-size: ${({ theme }) => theme.fontSize.l};
    letter-spacing: ${({ theme }) => theme.letterSpacing.s};
    line-height: 1.5;
}

a, button {
    ${'' /* font-family: 'Ubuntu', sans-serif; */}
    font-family: 'Dosis', sans-serif;
    text-decoration: none;
}


svg {
    font-family: 'Black Ops One', cursive;
}

li {
    list-style-type: none;
    font-size: ${({ theme }) => theme.fontSize.m}
}
`;
