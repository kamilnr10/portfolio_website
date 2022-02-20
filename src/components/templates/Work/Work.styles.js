import styled from 'styled-components';

export const WorkWrapper = styled.div`
  width: 100%;

  ul {
    display: flex;
    flex-flow: row wrap;
    justify-content: space-around;
    align-items: center;
    margin: 25px 0;
    gap: 40px 40px;

    li {
      margin: 20px 0;
      /* font-size: ${({ theme }) => theme.fontSize.s}; */
      /* flex-grow: 1; */
    }
  }

  /* li {
    margin: 20px 0;
  } */

  @media (min-width: 768px) {
    ul {
      display: flex;
      flex-flow: row wrap;
      justify-content: space-around;
      align-items: center;
      margin: 25px 0;
      gap: 40px 40px;

      li {
        font-size: ${({ theme }) => theme.fontSize.m};
      }
    }
  }
`;

export const CardTopBar = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  margin: 0 auto;
  padding: 20px 20px;
  background-color: ${({ theme }) => theme.colors.backgroundSec};
  box-shadow: 0px 0px 13px 0px rgba(11, 18, 51, 1);
  transition: ease-in-out 0.4s;
  width: 280px;
  height: 280px;



  &:hover {
    box-shadow: 0px 0px 13px 0px #24379b;
  }

    span {
      padding: 5px 10px 0 0;
      color: ${({ theme }) => theme.colors.secondary};

      @media (min-width: 768px) {
      font-size: ${({ theme }) => theme.fontSize.s}
      }
    }

    h3 {
      font-size: ${({ theme }) => theme.fontSize.xl};

      @media (min-width: 768px) {
      font-size: ${({ theme }) => theme.fontSize.l}
      }
    }

    div p {
        @media (min-width: 768px) {
        font-size: ${({ theme }) => theme.fontSize.s}
      }
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

export const Folder = styled.div`
  width: 80px;
  height: 50px;
  /* padding-bottom: 50px; */
  margin: 0 0 10px 0;
  position: relative;
  text-align: center;

  &:after {
    content: ' ';
    width: 50px;
    height: 35px;
    border-radius: 0 5px 5px 5px;
    /* box-shadow: 1px 1px 0 1px #cccccc; */
    display: block;
    border: 2px solid ${({ theme }) => theme.colors.secondary};
    /* background-color: #708090; */
    position: absolute;
    top: 15px;
    left: 25px;
  }

  &:before {
    content: ' ';
    width: 25px;
    height: 5px;
    border-radius: 5px 5px 0 0;
    display: block;
    border: 2px solid ${({ theme }) => theme.colors.secondary};
    border-bottom: none;
    /* background-color: #708090; */
    position: absolute;
    top: 10px;
    left: 25px;
  }
`;
