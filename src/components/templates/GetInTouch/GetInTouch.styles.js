import styled from 'styled-components';

export const IconsWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  margin: 20px 0;
  padding: 0 5px;
`;

export const GetInTouchWrapper = styled.div`
  width: 100%;

  button {
    display: block;
    margin: 20px auto;
  }

  p {
    @media (min-width: 768px) {
      font-size: ${({ theme }) => theme.fontSize.m};
    }

    &:nth-child(4) {
      margin: 0 0 20px;
      text-align: center;
    }
  }
`;
