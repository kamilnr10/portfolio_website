import React from 'react';
import styled, { keyframes, css } from 'styled-components';

const blurred = keyframes`
to {
    -webkit-filter: blur(5px);
    -moz-filter: blur(5px);
    filter: blur(5px);
  }
`;

export const SectionWrapper = styled.div`
  width: 100%;
  height: 100%;
  counter-reset: section-counter;
  animation: ${({ blur }) =>
    blur
      ? css`
          ${blurred} 0.3s linear forwards
        `
      : css`
          null
        `};
`;
