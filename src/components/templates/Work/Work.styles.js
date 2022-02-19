import styled from 'styled-components';

export const WorkWrapper = styled.div`
  width: 100%;

  li {
    margin: 20px 0;
  }

  @media (min-width: 768px) {
    ul {
      /* height: 500px; */
      display: flex;
      flex-flow: row wrap;
      justify-content: space-around;
      margin: 25px auto;
      gap: 40px 40px;

      li {
        margin: 0;
        /* width: 270px;
        height: 270px; */
        font-size: ${({ theme }) => theme.fontSize.s};
      }
    }
  }
`;

export const Card = styled.div`
  position: relative;
  padding: 25px 25px;
  background-color: ${({ theme }) => theme.colors.backgroundSec};
  box-shadow: 0px 0px 13px 0px rgba(11, 18, 51, 1);
  transition: ease-in-out 0.4s;

  @media (min-width: 768px) {
      width: 270px;
      height: 230px;
  }

 

  &:hover {
    box-shadow: 0px 0px 13px 0px #24379b;
  }

    span {
      padding: 5px 10px 0 0;
      color: ${({ theme }) => theme.colors.secondary};

      @media (min-width: 768px) {
      font-size: ${({ theme }) => theme.fontSize.xs}
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
        font-size: ${({ theme }) => theme.fontSize.xs}
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
