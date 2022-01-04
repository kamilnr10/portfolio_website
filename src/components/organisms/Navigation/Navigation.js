import React, { useState, useEffect, useLayoutEffect } from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import { ReactComponent as LogoSvg } from 'assets/svg/dev_now_logo3.svg';
import { useLockBodyScroll } from 'helpers/useLockBodyScroll';
import { debounce } from 'helpers/debounce';
import { HamburgerMenu } from 'components/atoms/HamburgerMenu/HamburgerMenu';
import { Link as LinkScroll, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';
import pdf from 'assets/resume/resume.pdf';

// const MenuSVG = styled.div`
//   margin: 0 15px;
//   z-index: 9999;

//   svg {
//     transition: transform 500ms cubic-bezier(0.4, 0, 0.2, 1);
//   }
//   &.active svg {
//     transform: rotate(90deg);
//   }
//   path {
//     transition: transform 500ms cubic-bezier(0.4, 0, 0.2, 1), stroke-dasharray 500ms cubic-bezier(0.4, 0, 0.2, 1),
//       stroke-dashoffset 500ms cubic-bezier(0.4, 0, 0.2, 1);
//   }
//   path:nth-child(1) {
//     transform-origin: 36% 40%;
//   }
//   path:nth-child(2) {
//     stroke-dasharray: 29 299;
//   }
//   path:nth-child(3) {
//     transform-origin: 35% 63%;
//   }
//   path:nth-child(4) {
//     stroke-dasharray: 29 299;
//   }
//   path:nth-child(5) {
//     transform-origin: 61% 52%;
//   }
//   path:nth-child(6) {
//     transform-origin: 62% 52%;
//   }
//   &.active path:nth-child(1) {
//     transform: translateX(9px) translateY(1px) rotate(45deg);
//   }
//   &&.active path:nth-child(2) {
//     stroke-dasharray: 225 299;
//     stroke-dashoffset: -72px;
//   }
//   &.active path:nth-child(3) {
//     transform: translateX(9px) translateY(1px) rotate(-45deg);
//   }
//   &.active path:nth-child(4) {
//     stroke-dasharray: 225 299;
//     stroke-dashoffset: -72px;
//   }
//   &.active path:nth-child(5) {
//     transform: translateX(9px) translateY(1px) rotate(-45deg);
//   }
//   &.active path:nth-child(6) {
//     transform: translateX(9px) translateY(1px) rotate(45deg);
//   }
// `;

// const HamburgerMenu = ({ isActive, handleClick }) => {
//   return (
//     <>
//       <MenuSVG className={isActive ? 'active' : ''} onClick={handleClick}>
//         <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 200 200">
//           <g strokeWidth="6.5" strokeLinecap="round">
//             <path d="M72 82.286h28.75" fill="#009100" fillRule="evenodd" stroke="#3AE5E3" />
//             <path
//               d="M100.75 103.714l72.482-.143c.043 39.398-32.284 71.434-72.16 71.434-39.878 0-72.204-32.036-72.204-71.554"
//               fill="none"
//               stroke="#3AE5E3"
//             />
//             <path d="M72 125.143h28.75" fill="#009100" fillRule="evenodd" stroke="#3AE5E3" />
//             <path
//               d="M100.75 103.714l-71.908-.143c.026-39.638 32.352-71.674 72.23-71.674 39.876 0 72.203 32.036 72.203 71.554"
//               fill="none"
//               stroke="#3AE5E3"
//             />
//             <path d="M100.75 82.286h28.75" fill="#009100" fillRule="evenodd" stroke="#3AE5E3" />
//             <path d="M100.75 125.143h28.75" fill="#009100" fillRule="evenodd" stroke="#3AE5E3" />
//           </g>
//         </svg>
//       </MenuSVG>
//     </>
//   );
// };

const Nav = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 70px;
  width: 100%;
  text-align: center;
  top: ${({ visible }) => (visible ? '0px ' : '-60px')};
  background-color: ${({ visible, theme }) => visible && theme.colors.background};
  transition: top 0.3s;
`;

const BodyDiv = styled.div`
  /* height: 200vh; */
`;

const Logo = styled(LogoSvg)`
  width: 40px;
  height: 40px;
  margin: 10px 20px;
  z-index: 999;
`;

const AsideNav = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  bottom: 0;
  right: ${({ isActive }) => (isActive ? '0px' : '-100vw')};
  transition: 0.3s ease-in-out;

  div:first-child {
    width: 30%;
    height: 100%;
    background-color: ${({ theme }) => theme.colors.background};
  }

  div:nth-child(1) {
    display: flex;
    justify-content: space-around;
    align-items: center;
    position: fixed;
    bottom: 0;
    right: 0;
    width: 70%;
    height: 100%;
    right: ${({ isActive }) => (isActive ? '0px' : '-100vw')};
    background-color: ${({ theme }) => theme.colors.backgroundNav};
    box-shadow: ${(props) => (props.isActive ? `10px 10px 10px 10px ${props.theme.colors.backgroundNav}` : '')};
    transition: 0.3s ease-in-out;
  }
`;

const LockScreen = () => {
  useLockBodyScroll();
  return <></>;
};

// const BlurDiv = styled.div`
//   width: 30%;
//   height: 100%;
//   background-color: ${({ theme }) => theme.colors.background};
//   filter: blur(100px);
// `;

const NavWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 100%;

  nav {
    height: 300px;

    ol {
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      height: 100%;
    }
    ol li {
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      align-items: center;
      margin: 20px 0;

      span {
        color: ${({ theme }) => theme.colors.secondary};
      }
    }
  }
`;

const navigationLinks = ['about', 'experience', 'work', 'get in touch'];

const Button = styled.button`
  background-color: transparent;
  margin: 20px 0;
  padding: 12px 20px;
  font-size: ${({ theme }) => theme.fontSize.l};
  letter-spacing: 1.2px;
  color: ${({ theme }) => theme.colors.secondary};
  border: 1px solid ${({ theme }) => theme.colors.secondary};
  border-radius: 5px;
  transition: 0.2s ease-in-out;

  &:hover {
    background-color: ${({ theme }) => theme.colors.secondaryBtn};
  }
`;

const Navigation = ({ isActive, handleClick }) => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  const handleScroll = debounce(() => {
    const currentScrollPos = window.pageYOffset;
    console.log(currentScrollPos);
    setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 30);
    setPrevScrollPos(currentScrollPos);
  }, 100);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos, visible, handleScroll]);

  return (
    <BodyDiv>
      <Nav visible={visible}>
        <Logo />
        <HamburgerMenu isActive={isActive} handleClick={handleClick} />
        <AsideNav isActive={isActive}>
          <NavWrapper>
            <nav>
              <ol>
                {navigationLinks.map((link, index) => (
                  <li key={link}>
                    <span>{`0${index + 1}.`}</span>
                    <LinkScroll to={link.replace(/ /g, '')} smooth={true} duration={500} onClick={handleClick}>
                      {link.charAt(0).toUpperCase() + link.slice(1)}
                    </LinkScroll>
                  </li>
                ))}
                <a href={pdf} without rel="noopener noreferrer" target="_blank">
                  <Button onClick={handleClick} trailingIcon="picture_as_pdf" label="Resume">
                    PDF
                  </Button>
                </a>
              </ol>
            </nav>
          </NavWrapper>
        </AsideNav>
        {isActive && <LockScreen />}
      </Nav>
    </BodyDiv>
  );
};

export default Navigation;
