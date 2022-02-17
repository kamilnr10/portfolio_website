import styled from 'styled-components';

export const WorkWrapper = styled.div`
  width: 100%;

  li {
    margin: 20px 0;
  }
`;

export const Card = styled.div`
  position: relative;
  padding: 25px 25px;
  background-color: ${({ theme }) => theme.colors.backgroundSec};
  box-shadow: 0px 0px 13px 0px rgba(11, 18, 51, 1);
  transition: ease-in-out 0.4s;

  &:hover {
    box-shadow: 0px 0px 13px 0px #24379b;
  }

  span:first-of-type {
    padding: 5px 0;
    color: ${({ theme }) => theme.colors.secondary};
  }

  h3 {
    font-size: ${({ theme }) => theme.fontSize.xl};
  }

  ul {
    display: flex;
    flex-grow: 1;
    flex-wrap: wrap;

    li {
      margin: 0;
      padding: 0 10px 0 0;
      font-weight: 300;
    }
  }

  footer {
    margin: 10px 0 0 0;
    display: flex;
    flex-direction: row;
    justify-content: end;

    a {
      padding: 0 0 0 20px;
      color: ${({ theme }) => theme.colors.text};
      font-size: ${({ theme }) => theme.fontSize.xl};
    }
  }
`;
