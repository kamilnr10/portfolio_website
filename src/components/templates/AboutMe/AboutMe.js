import React, { useEffect, createRef } from 'react';
import styled from 'styled-components';
import { Header } from 'components/atoms/Header/Header';
import imgKN1 from 'assets/images/imgKN1.png';
import { motion, Variants } from 'framer-motion';
import { InView } from 'react-intersection-observer';
import lottie from 'lottie-web';
import animation from 'assets/lottie/bolt.json';

const AboutMeWrapper = styled.div`
  width: 100%;

  p {
    margin: 10px 0;
  }

  ul {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 15px;
    width: 100%;

    li {
      width: 140px;
      display: flex;
      font-size: ${({ theme }) => theme.fontSize.s};
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
    border-radius: 8px;
    background-color: ${({ theme }) => theme.colors.primary};
    display: flex;
    box-shadow: 0px 3px 24px 0px rgba(58, 229, 227, 1);
    transition: 0.3s ease-in-out;

    &:hover {
      content: '';
      transform: scale(1.025);
      box-shadow: 0px 5px 26px 0px rgba(58, 229, 227, 1);
      /* border: 1px solid white; */
    }

    img {
      /* position: relative; */
      width: 200px;
      opacity: 0.5;
      border-radius: 9px;
      transition: 0.3s ease-in-out;

      &:hover {
        opacity: 1;
        transform: scale(1.005);
      }
    }
  }
`;

const Bolt = () => {
  let animationContainer = createRef();

  useEffect(() => {
    lottie.loadAnimation({
      container: animationContainer.current,
      animationData: animation,
      loop: true,
    });
  }, []);

  return <div ref={animationContainer} style={{ width: '20px', height: '20px' }}></div>;
};

export const AboutMe = ({ id }) => {
  let animationContainer = createRef();

  useEffect(() => {
    lottie.loadAnimation({
      container: animationContainer.current,
      animationData: animation,
      loop: true,
    });
  }, []);

  console.log(imgKN1);
  return (
    <InView threshold={0.25} triggerOnce={true}>
      {({ inView, ref }) => (
        <AboutMeWrapper>
          <Header id={id}>About me</Header>
          <div>
            <p>
              Hello! My name is Kamil and I enjoy creating websites and apps. My interest in web development has sparked in 2019. My journey started
              with HTML/CSS and Javascript, then I moved forward to frameworks and deciced to go with React. And guess what? That was a good choice!
            </p>
            <p>
              Next year I started to work as an administrator of ERP system (Netsuite). It was an incredible opportunity for me to develop my
              technical and social skills. I was working on implementing the system and one of my responsibilities was to analysize processes within
              company. In the beginning I cooporated with a small team but after systems's launching, I was already working with everyone in the
              company. Also I had a chance to write some scripts in javascript in Netsuite.
            </p>
            <p>I continue to learn React and other technologies for now. You can find some of them below:</p>
            <motion.ul ref={ref} initial={{ opacity: 0 }} animate={inView && { opacity: 1 }} transition={{ duration: 1 }}>
              <li>
                <Bolt />
                Javascript
              </li>
              <li>
                <Bolt />
                React
              </li>
              <li>
                <Bolt />
                Redux
              </li>
              <li>
                <Bolt />
                Dato CMS
              </li>
              <li>
                <Bolt />
                Mock Service Worker
              </li>
              <li>
                <Bolt />
                Jest
              </li>
            </motion.ul>
            <ImageWrapper>
              <motion.div ref={ref} initial={{ opacity: 0 }} animate={inView && { opacity: 1 }} transition={{ duration: 1 }}>
                <img src={imgKN1} alt="frontend_developer" />
              </motion.div>
            </ImageWrapper>
          </div>
        </AboutMeWrapper>
      )}
    </InView>
  );
};
