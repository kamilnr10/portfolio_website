import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
${'' /* @import url('https://fonts.googleapis.com/css2?family=Black+Ops+One&family=Ubuntu:wght@300;400;700&display=swap'); */}
${'' /* @import url('https://fonts.googleapis.com/css2?family=Black+Ops+One&family=Dosis:wght@300;400;700&display=swap'); */}
${'' /* @import url('https://fonts.googleapis.com/css2?family=Black+Ops+One&family=Inter:wght@200;300;400;700;800&display=swap'); */}
@import url('https://fonts.googleapis.com/css2?family=Black+Ops+One&family=Titillium+Web:wght@300;400;700&display=swap');

*, *::after, *::before {
    box-sizing: border-box;
    margin: 0;
    padding: 0;

}

body {
    ${'' /* font-family: 'Ubuntu', sans-serif; */}
    font-family: 'Titillium Web', sans-serif;
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
    ${'' /* color: ${({ theme }) => theme.colors.secondary}; */}
    font-family: 'Titillium Web', sans-serif;
    text-decoration: none;
    ${'' /* color: ${({ theme }) => theme.colors.secondary} */}
}

a:visited {
  color: ${({ theme }) => theme.colors.secondary};
}


svg {
    font-family: 'Black Ops One', cursive;
}

li {
    list-style-type: none;
    font-size: ${({ theme }) => theme.fontSize.m}
}

input {
    color: #f3f3f3;
    border: none; 
    border-width: 0; 
    box-shadow: none;
}

label, textarea {
    font-family: 'Titillium Web', sans-serif;
    color: #f3f3f3;
}

input ~ grammarly-extension,
textarea ~ grammarly-extension {
  display: none;
}
`;
