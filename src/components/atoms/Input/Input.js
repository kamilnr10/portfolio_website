import styled from 'styled-components';

export const Input = styled.input`
  width: 100%;
  position: absolute;
  top: 0px;
  left: 0px;
  display: block;
  padding: 8px 5px;
  font-size: ${({ theme }) => theme.fontSize.m};
  background: none;
  border: 1px solid ${({ theme }) => theme.colors.secondary};
  border-radius: 5px;

  &:focus {
    outline: none;
  }
`;
