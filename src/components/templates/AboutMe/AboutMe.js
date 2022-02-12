import React, { useEffect, createRef } from 'react';
import styled from 'styled-components';
import { Header } from 'components/atoms/Header/Header';
import frontend_developer from 'assets/images/frontend_developer.png';
import { motion, Variants } from 'framer-motion';
import { InView } from 'react-intersection-observer';
import lottie from 'lottie-web';
import animation from 'assets/lottie/bolt.json';
import { Bolt } from 'components/atoms/Bolt/Bolt';
import { AboutMeWrapper, ImageWrapper } from './AboutMe.styles';

export const AboutMe = ({ id }) => {
  let animationContainer = createRef();

  useEffect(() => {
    lottie.loadAnimation({
      container: animationContainer.current,
      animationData: animation,
      loop: true,
    });
  }, []);

  // console.log(frontend_developer);
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
                <img src={frontend_developer} alt="frontend_developer" />
              </motion.div>
            </ImageWrapper>
          </div>
        </AboutMeWrapper>
      )}
    </InView>
  );
};
