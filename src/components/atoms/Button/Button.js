import React from 'react';
import styled from 'styled-components';

export const Button = styled.button`
  background-color: transparent;
  margin: 20px 0;
  padding: 15px 30px;
  font-size: ${({ theme }) => theme.fontSize.l};
  letter-spacing: 1.2px;
  color: ${({ theme }) => theme.colors.secondary};
  border: 1px solid ${({ theme }) => theme.colors.secondary};
  border-radius: 5px;
  transition: 0.2s ease-in-out;

  &:hover {
    background-color: ${({ theme }) => theme.colors.secondaryBtn};
  }
`;
