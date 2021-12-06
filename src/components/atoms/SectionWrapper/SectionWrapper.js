import React from 'react';
import styled from 'styled-components';

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
