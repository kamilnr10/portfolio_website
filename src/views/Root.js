import logo from 'assets/logo.svg';
import React, { useState } from 'react';
import 'views/App.css';
import styled, { ThemeProvider, keyframes, css } from 'styled-components';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { GlobalStyle } from 'assets/styles/GlobalStyle';
import Navigation from 'components/organisms/Navigation/Navigation';
import { theme } from 'assets/styles/theme';
import { Button } from 'components/atoms/Button/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import imgKN1 from 'assets/images/imgKN1.png';
import { SectionWrapper } from 'components/organisms/SectionWrapper/SectionWrapper';
import { Home } from 'components/templates/Home/Home';
import { AboutMe } from 'components/templates/AboutMe/AboutMe';
import { Experience } from 'components/templates/Experience/Experience';

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  padding: 70px 20px 0 20px;
`;

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
            <Home />
            <AboutMe id="about" />
            <Experience id="experience" />
          </SectionWrapper>
          <Navigation isActive={isActive} handleClick={handleClick} />
        </Wrapper>
      </ThemeProvider>
    </Router>
  );
}

export default Root;
