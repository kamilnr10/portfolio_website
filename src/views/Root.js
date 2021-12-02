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
      width: 100%
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

const HomeWrapper = styled.div`
  p:first-child {
    margin: 20px 0 15px;
    font-size: ${({ theme }) => theme.fontSize.l};
    color: ${({ theme }) => theme.colors.secondary};
  }

  p:nth-child(3) {
    width: 270px;
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
    letter-spacing: 2px;
  }

  h2 {
    margin: 20px 0;
    color: ${({ theme }) => theme.colors.paragraph};
    font-size: ${({ theme }) => theme.fontSize.l};
    font-weight: ${({ theme }) => theme.fontBold.light};
    letter-spacing: ${({ theme }) => theme.letterSpacing.s};
    line-height: 1.4;
  }

  div {
    width: 100%;
    display: flex;
    justify-content: center;
  }
`;

const GitHubIcon = styled(FontAwesomeIcon)`
  margin: 0 0 0 5px;
  color: ${({ theme }) => theme.colors.secondary};
`;

const Home = ({ blur, id }) => {
  return (
    <HomeWrapper blur={blur} id={id}>
      <p>hello, my name is</p>
      <h1>Kamil Nowak</h1>
      <p>aspiring junior frontend developer</p>
      <h2>
        I'm an administrator of ERP system which is called Netsuite. I develop programming skills in free time and create websites and apps. Currently
        I'm focused on learning and looking for opportunity to start work as a Junior Frontend Developer.
      </h2>
      <div>
        <Button>
          GitHub
          <GitHubIcon icon={faGithub} />
        </Button>
      </div>
    </HomeWrapper>
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

const Header = styled.h1`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 70px 0 25px 0;

  &::before {
    content: '01.';
    position: relative;
    top: 4px;
    font-size: ${({ theme }) => theme.fontSize.l};
    color: ${({ theme }) => theme.colors.secondary};
  }

  &::after {
    content: '';
    display: block;
    position: relative;
    top: 5px;
    left: 5px;
    height: 1px;
    width: 110px;
    background-color: ${({ theme }) => theme.colors.line};
  }
`;

const AboutMeWrapper = styled.div`
  width: 100%;

  p {
    margin: 10px 0;
  }

  ul {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    width: 100%;

    li {
      width: 150px;
      font-size: ${({ theme }) => theme.fontSize.m};
    }
  }
`;

const ImageWrapper = styled.div`
  margin: 50px auto 0;
  width: 100%;

  div {
    width: 202px;
    margin: 0 auto;
    border: 1px solid ${({ theme }) => theme.colors.secondary};
    border-radius: 4px;
    background-color: ${({ theme }) => theme.colors.primary};
    display: flex;
    box-shadow: 0px 3px 24px 0px rgba(58, 229, 227, 1);
    transition: 0.3s ease-in-out;

    &:hover {
      content: '';
      /* border: 1px solid white; */
    }

    img {
      /* position: relative; */
      width: 200px;
      opacity: 0.5;
      transition: 0.3s ease-in-out;

      &:hover {
        opacity: 1;
        transform: scale(1.005);

        &::before {
          content: '1';
          position: relative;
          top: -10px;
        }
      }
    }
  }
`;

const AboutMe = ({ id }) => {
  console.log(imgKN1);
  return (
    <AboutMeWrapper>
      <Header id={id}>&nbsp;About me</Header>
      <div>
        <p>
          Hello! My name is Kamil and I enjoy creating websites and apps. I have started interest in webdevelopment in middle 2019. It consumed me
          from the begginig. I started with HTML/CSS, Javascript and when it comes to choose frameworks I have chosen React. And You know? It was a
          good choice!{' '}
        </p>
        <p>
          In next year I started work as an administrator of ERP system (Netsuite). It was an incredible opportunity for me to develop my technical
          and social skills. I worked on implementing the system to enterprise. One of my responsibilities was analysis of enterpise processes. In the
          beginning I worked with small team but after launching the systems, I was already working with everyone in the company. Also I had
          opportunity to write some scripts in javascript in Netsuite.
        </p>
        <p>For now I continue learning React and some other technologies. Here are a few which I've been working recently with:</p>
        <ul>
          <li>&#x26A1;Javascript</li>
          <li>&#x26A1;React</li>
          <li>&#x26A1;Redux</li>
          <li>&#x26A1;Dato CMS</li>
          <li>&#x26A1;Mock Service Worker</li>
          <li>&#x26A1;Jest</li>
        </ul>
        <ImageWrapper>
          <div>
            <img src={imgKN1} alt="" />
          </div>
        </ImageWrapper>
      </div>
    </AboutMeWrapper>
  );
};

const Experience = ({ id }) => {
  return (
    <>
      <Header id={id}>Experience</Header>
    </>
  );
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
