import styled from 'styled-components';

export const Wrapper = styled.div`
  position: relative;
  /* width: 100vw; */
  height: 100%;
  padding: 70px 20px 0 20px;
  overflow-x: hidden;

  @media (min-width: 768px) {
    padding: 70px 110px 0 110px;
  }

  @media (min-width: 1024px) {
    padding: 70px 180px 0 180px;
  }

  @media (min-width: 1280px) {
    padding: 70px 220px 0 220px;
  }
`;

export const LoadingWrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
