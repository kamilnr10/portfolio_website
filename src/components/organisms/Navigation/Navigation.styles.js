import styled from 'styled-components';
import { ReactComponent as LogoSvg } from 'assets/svg/dev_now_logo3.svg';

export const Nav = styled.div`
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

export const Logo = styled(LogoSvg)`
  width: 40px;
  height: 40px;
  margin: 10px 20px;
  z-index: 999;
`;

export const AsideNav = styled.div`
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

export const NavWrapper = styled.div`
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

export const Button = styled.button`
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
