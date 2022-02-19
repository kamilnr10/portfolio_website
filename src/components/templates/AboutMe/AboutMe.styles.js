import styled from 'styled-components';

export const AboutMeWrapper = styled.div`
  width: 100%;

  p {
    margin: 10px 0;

    @media (min-width: 768px) {
      font-size: ${({ theme }) => theme.fontSize.m};
    }
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

      @media (min-width: 768px) {
        width: 180px;
        margin: 0 auto;
        font-size: ${({ theme }) => theme.fontSize.m};
      }
    }
  }
`;

export const ImageWrapper = styled.div`
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
