import React, { useState, useEffect, useLayoutEffect } from 'react';
import styled from 'styled-components';
import { ReactComponent as LogoSvg } from 'assets/svg/dev_now_logo3.svg';

export function useLockBodyScroll() {
  useLayoutEffect(
    () => {
      //get original value of body
      const originalStyle = window.getComputedStyle(document.body).overflow;
      //prevent scrolling on mount
      document.body.style.overflow = 'hidden';
      // re-enable scrolling when component unmounts
      return () => (document.body.style.overflow = originalStyle);
    },
    [] //empty array to ensures effect is only run when mount and unmount
  );
}

const MenuSVG = styled.div`
  margin: 0 15px;
  z-index: 9999;

  svg {
    transition: transform 500ms cubic-bezier(0.4, 0, 0.2, 1);
  }
  &.active svg {
    transform: rotate(90deg);
  }
  path {
    transition: transform 500ms cubic-bezier(0.4, 0, 0.2, 1), stroke-dasharray 500ms cubic-bezier(0.4, 0, 0.2, 1),
      stroke-dashoffset 500ms cubic-bezier(0.4, 0, 0.2, 1);
  }
  path:nth-child(1) {
    transform-origin: 36% 40%;
  }
  path:nth-child(2) {
    stroke-dasharray: 29 299;
  }
  path:nth-child(3) {
    transform-origin: 35% 63%;
  }
  path:nth-child(4) {
    stroke-dasharray: 29 299;
  }
  path:nth-child(5) {
    transform-origin: 61% 52%;
  }
  path:nth-child(6) {
    transform-origin: 62% 52%;
  }
  &.active path:nth-child(1) {
    transform: translateX(9px) translateY(1px) rotate(45deg);
  }
  &&.active path:nth-child(2) {
    stroke-dasharray: 225 299;
    stroke-dashoffset: -72px;
  }
  &.active path:nth-child(3) {
    transform: translateX(9px) translateY(1px) rotate(-45deg);
  }
  &.active path:nth-child(4) {
    stroke-dasharray: 225 299;
    stroke-dashoffset: -72px;
  }
  &.active path:nth-child(5) {
    transform: translateX(9px) translateY(1px) rotate(-45deg);
  }
  &.active path:nth-child(6) {
    transform: translateX(9px) translateY(1px) rotate(45deg);
  }
`;

const HamburgerMenu = (props) => {
  //   const [isActive, setIsActive] = useState(false);

  //   const handleClick = () => {
  //     setIsActive(!isActive);
  //   };
  const { handleClick, isActive } = props;

  return (
    <>
      <MenuSVG className={isActive ? 'active' : ''} onClick={handleClick}>
        <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 200 200">
          <g strokeWidth="6.5" strokeLinecap="round">
            <path d="M72 82.286h28.75" fill="#009100" fillRule="evenodd" stroke="#3AE5E3" />
            <path
              d="M100.75 103.714l72.482-.143c.043 39.398-32.284 71.434-72.16 71.434-39.878 0-72.204-32.036-72.204-71.554"
              fill="none"
              stroke="#3AE5E3"
            />
            <path d="M72 125.143h28.75" fill="#009100" fillRule="evenodd" stroke="#3AE5E3" />
            <path
              d="M100.75 103.714l-71.908-.143c.026-39.638 32.352-71.674 72.23-71.674 39.876 0 72.203 32.036 72.203 71.554"
              fill="none"
              stroke="#3AE5E3"
            />
            <path d="M100.75 82.286h28.75" fill="#009100" fillRule="evenodd" stroke="#3AE5E3" />
            <path d="M100.75 125.143h28.75" fill="#009100" fillRule="evenodd" stroke="#3AE5E3" />
          </g>
        </svg>
      </MenuSVG>
    </>
  );
};

const Nav = styled.div`
  position: fixed;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 70px;
  width: 100%;
  text-align: center;
  top: ${(props) => (props.visible ? '0px ' : '-60px')};
  transition: top 0.3s;
`;

const BodyDiv = styled.div`
  height: 200vh;
`;

const NavWrapper = styled.div`
  display: flex;
`;

const Logo = styled(LogoSvg)`
  width: 40px;
  height: 40px;
  margin: 10px 30px;
`;

const debounce = (func, wait, immediate) => {
  let timeout;
  return function () {
    const context = this,
      args = arguments;
    const later = function () {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    let callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
};

const AsideNav = styled.div`
  position: fixed;
  width: 70vw;
  height: 100vh;
  bottom: 0;
  right: ${({ isActive }) => (isActive ? '0px' : '-70vw')};
  background-color: ${({ theme }) => theme.colors.backgroundNav};
  transition: 0.3s ease-in-out;
`;

const LockScreen = () => {
  useLockBodyScroll();
  return <></>;
};

const Navigation = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
  };

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
        <AsideNav isActive={isActive}></AsideNav>
        {isActive && <LockScreen />}
      </Nav>
    </BodyDiv>
  );
};

export default Navigation;
