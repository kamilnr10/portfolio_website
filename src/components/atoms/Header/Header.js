import React from 'react';
import styled from 'styled-components';

export const Header = styled.h1`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 70px 0 25px 0;
  width: 100%;
  white-space: nowrap;

  &::before {
    counter-increment: section-counter;
    content: '0' counter(section-counter) '. ';
    position: relative;
    top: 4px;
    margin-right: 10px;
    font-size: ${({ theme }) => theme.fontSize.l};
    color: ${({ theme }) => theme.colors.secondary};
  }

  &::after {
    content: '';
    display: block;
    position: relative;
    top: 5px;
    left: 5px;
    height: 1px;
    width: 100%;
    background-color: ${({ theme }) => theme.colors.line};
  }
`;
