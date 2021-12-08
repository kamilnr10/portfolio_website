import React from 'react';
import styled from 'styled-components';
import { Header } from 'components/atoms/Header/Header';
import imgKN1 from 'assets/images/imgKN1.png';

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

export const AboutMe = ({ id }) => {
  console.log(imgKN1);
  return (
    <AboutMeWrapper>
      <Header id={id}>About me</Header>
      <div>
        <p>
          Hello! My name is Kamil and I enjoy creating websites and apps. My interest in webdevelopment has sparked in 2019. My journey has started
          with HTML/CSS and Javascript, then I moved forward to frameworks and deciced to go with React. And guess what? That was a good choice!{' '}
        </p>
        <p>
          Next year I started to work as an administrator of ERP system (Netsuite). It was an incredible opportunity for me to develop my technical
          and social skills. I worked on implementing the system and one of my responsibilities was to analysize processes within company. In the
          beginning I cooporated with a small team but after systems's launching, I was already working with everyone in the company. Also I had
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
            <img src={imgKN1} alt="frontend_developer" />
          </div>
        </ImageWrapper>
      </div>
    </AboutMeWrapper>
  );
};
