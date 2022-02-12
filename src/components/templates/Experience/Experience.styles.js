import styled from 'styled-components';

export const ExperienceWrapper = styled.div`
  width: 100%;
`;

export const ActiveJob = styled.div`
  margin: 20px 0 0 0;

  p {
    margin: 5px 0 0 0;
    color: ${({ theme }) => theme.colors.secondary};
  }

  span {
    color: ${({ theme }) => theme.colors.paragraph};
  }

  ul {
    li {
      margin: 10px 0 10px;
      padding: 0 0 0 15px;
      position: relative;
    }
    li::before {
      content: '▹';
      position: absolute;
      left: 0;
      color: ${({ theme }) => theme.colors.secondary};
    }
  }
`;

export const TabList = styled.div`
  /* position: relative; */
  display: flex;
  flex-direction: column;
  /* overflow-x: auto;
  margin: 0 0 20px 0; */

  div:first-child {
    position: relative;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    overflow-x: auto;
  }
`;

export const StyledLine = styled.div`
  position: absolute;
  width: 120px;
  height: 2px;
  /* top: auto; */
  bottom: 0;
  transform: translateX(calc(${({ active }) => active - 1} * 120px));
  background-color: ${({ theme }) => theme.colors.secondary};
  transition: 0.3s ease-in-out;
`;

export const Button = styled.button`
  width: 120px;
  min-width: 120px;
  background-color: transparent;
  padding: 10px 30px;
  font-size: ${({ theme }) => theme.fontSize.s};
  letter-spacing: 1.2px;
  color: ${({ theme }) => theme.colors.line};
  border: none;
  border-bottom: 2px solid ${({ theme }) => theme.colors.line};
  text-align: center;
  transition: 0.2s ease-in-out;

  /* &:active {
    background-color: ${({ theme }) => theme.colors.focus};
  } */

  &:focus {
    background-color: ${({ theme }) => theme.colors.focus};
  }

  &.active {
    color: ${({ theme }) => theme.colors.secondary};
    background-color: ${({ theme }) => theme.colors.backgroundNav};
  }

  span {
    width: 100%;
  }
`;
