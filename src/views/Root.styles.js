import styled from 'styled-components';

export const Wrapper = styled.div`
  position: relative;
  /* width: 100vw; */
  height: 100%;
  padding: 70px 20px 0 20px;
  overflow-x: hidden;

  @media (min-width: 768px) {
    padding: 70px 70px 0 70px;
  }
`;

export const LoadingWrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
