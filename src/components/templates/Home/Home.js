import React from 'react';
import styled, { keyframes } from 'styled-components';
import { Button } from 'components/atoms/Button/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

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

export const HomeWrapper = styled.div`
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

export const Home = ({ blur, id }) => {
  return (
    <HomeWrapper blur={blur} id={id}>
      <p>hello, my name is</p>
      <h1>Kamil Nowak</h1>
      <p>aspiring junior frontend developer</p>
      <h2>
        I'm a developer who currently works as an administrator of ERP system called Netsuite. I spend most of my free time improving my programming
        skills, creating websites and apps. Nowadays my goal is to keep learning and to find an opportunity to start working as a Junior Frontend.
        Developer.
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
