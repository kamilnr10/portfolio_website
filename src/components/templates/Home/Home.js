import React, { useState, useEffect, createRef } from 'react';
import styled, { keyframes } from 'styled-components';
import { Button } from 'components/atoms/Button/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { motion, Variants } from 'framer-motion';
import { InView } from 'react-intersection-observer';
import lottie from 'lottie-web';
import animation from 'assets/lottie/bolt.json';

const typing = keyframes`
 from {
      width: 0
    }
    to {
      width: 270px
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
  @media (min-width: 768px) {
    height: calc(100vh - 70px);
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  p:first-child {
    margin: 20px 0 15px;
    font-size: ${({ theme }) => theme.fontSize.l};
    color: ${({ theme }) => theme.colors.secondary};

    @media (min-width: 768px) {
      font-size: ${({ theme }) => theme.fontSize.xl};
    }
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

    @media (min-width: 768px) {
      margin: 15px 0;
    }
  }

  h1 {
    width: 250px;
    margin: 10px 0 0 0;
    font-size: ${({ theme }) => theme.fontSize.xxl};
    font-weight: ${({ theme }) => theme.fontBold.bold};
    letter-spacing: 2px;

    @media (min-width: 768px) {
      font-size: ${({ theme }) => theme.fontSize.sxl};
      background-image: linear-gradient(${({ theme }) => theme.colors.secondary}, ${({ theme }) => theme.colors.secondary});
      background-repeat: no-repeat;
      background-size: 0% 100%;
      background-position-x: right;
      transition: background-size 500ms;

      &:hover {
        color: ${({ theme }) => theme.colors.background};
        background-size: 100% 100%;
        background-position-x: left;
      }
    }
  }

  h2 {
    margin: 20px 0;
    color: ${({ theme }) => theme.colors.paragraph};
    font-size: ${({ theme }) => theme.fontSize.l};
    font-weight: ${({ theme }) => theme.fontBold.light};
    letter-spacing: ${({ theme }) => theme.letterSpacing.s};
    line-height: 1.4;

    @media (min-width: 768px) {
      font-size: ${({ theme }) => theme.fontSize.xl};
    }
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

const ScrollWrapper = styled.div``;

export const Home = ({ blur, id }) => {
  return (
    <InView threshold={0.25} triggerOnce={true}>
      {({ inView, ref }) => (
        <motion.div ref={ref} initial={{ opacity: 0, x: 80 }} animate={inView ? { opacity: 1, x: 0 } : { opacity: 0 }} transition={{ duration: 1.4 }}>
          <HomeWrapper blur={blur} id={id}>
            <p>hello, my name is</p>
            <motion.h1 ref={ref} initial={{ opacity: 0, x: 80 }} animate={inView ? { opacity: 1, x: 0 } : { opacity: 0 }} transition={{ delay: 1 }}>
              Kamil Nowak
            </motion.h1>
            <p>aspiring junior frontend developer</p>
            <h2>
              I'm a developer who currently works as an administrator of ERP system called Netsuite. I spend most of my free time improving my
              programming skills, creating websites and apps. Nowadays, my goal is to keep learning and to find an opportunity to start working as a
              Junior Frontend Developer.
            </h2>
            <div>
              <Button>
                <a href="https://github.com/kamilnr10" target="_blank">
                  GitHub
                  <GitHubIcon icon={faGithub} />
                </a>
              </Button>
            </div>
          </HomeWrapper>
        </motion.div>
      )}
    </InView>
  );
};
