import logo from 'assets/logo.svg';
import React, { useState } from 'react';
import 'views/App.css';
import styled, { ThemeProvider, keyframes, css } from 'styled-components';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { GlobalStyle } from 'assets/styles/GlobalStyle';
import Navigation from 'components/organisms/Navigation/Navigation';
import { theme } from 'assets/styles/theme';
import { Button } from 'components/atoms/Button/Button';

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  padding: 70px 20px 0 20px;
`;

const blurred = keyframes`
to {
    -webkit-filter: blur(5px);
    -moz-filter: blur(5px);
    filter: blur(5px);
  }
`;

const typing = keyframes`
 from {
      width: 0
    }
    to {
      width: 202px
    }
`;

const blinkCaret = keyframes`
    from,
    to {
      border-color: transparent;
    }
    50% {
      border-color: #3ae5e3;
    }
  
`;

const AboutMeWrapper = styled.div`
  p:first-child {
    margin: 10px 0;
    font-size: ${({ theme }) => theme.fontSize.l};
    color: ${({ theme }) => theme.colors.secondary};
  }

  p:nth-child(3) {
    width: 202px;
    margin: 0;
    padding: 0;
    font-size: ${({ theme }) => theme.fontSize.m};
    color: ${({ theme }) => theme.colors.paragraph};
    overflow: hidden; /* Ensures the content is not revealed until the animation */
    border-right: 0.15em solid #3ae5e3; /* The typwriter cursor */
    white-space: nowrap; /* Keeps the content on a single line */
    letter-spacing: 0.15em; /* Adjust as needed */
    animation: ${typing} 3.5s steps(40, end), ${blinkCaret} 0.75s step-end infinite;
  }

  h1 {
    margin: 10px 0 0 0;
    font-weight: ${({ theme }) => theme.fontBold.bold};
    letter-spacing: 1.5px;
  }

  h2 {
    margin: 10px 0;
    color: ${({ theme }) => theme.colors.paragraph};
    font-size: ${({ theme }) => theme.fontSize.l};
    font-weight: ${({ theme }) => theme.fontBold.light};
    letter-spacing: 1.3px;
  }
`;

const AboutMe = ({ blur, id }) => {
  return (
    <AboutMeWrapper blur={blur} id={id}>
      <p>hello, my name is</p>
      <h1>Kamil Nowak</h1>
      <p>junior frontend developer</p>
      <h2>
        I'm an administrator of ERP system which is called Netsuite. I develop programming skills in free time. Currently, I'm focused on learning and
        looking for opportunity to start work as a Junior Frontend Developer.
      </h2>
      <Button>GitHub</Button>
      <div>
        <h3>
          Hello <br />
          Hello <br />
          Hello <br />
          Hello <br />
          Hello <br />
          Hello <br />
          Hello <br />
          Hello <br />
          Hello <br />
          Hello <br />
          Hello <br />
          Hello <br />
          Hello <br />
          Hello <br />
          Hello <br />
        </h3>
      </div>
    </AboutMeWrapper>
  );
};

const SectionWrapper = styled.div`
  width: 100%;
  height: 100%;
  animation: ${({ blur }) =>
    blur
      ? css`
          ${blurred} 0.3s linear forwards
        `
      : css`
          null
        `};
`;

const Jobs = styled.div`
  width: 100%;
  height: 100vh;
  padding: 65px 0 0 0;
`;

const Portfolio = ({ id }) => {
  console.log(id);

  return <Jobs id={id}>My Experience</Jobs>;
};

function Root() {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    console.log('klik');
    setIsActive(!isActive);
  };

  return (
    <Router>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Wrapper>
          <SectionWrapper blur={isActive}>
            <AboutMe id="about" />
            <Portfolio id="experience" />
          </SectionWrapper>
          <Navigation isActive={isActive} handleClick={handleClick} />
        </Wrapper>
      </ThemeProvider>
    </Router>
  );
}

export default Root;
