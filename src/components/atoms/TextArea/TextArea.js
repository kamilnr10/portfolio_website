import styled from 'styled-components';

export const TextArea = styled.textarea`
  display: block;
  width: 100%;
  height: 100px;
  padding: 8px 5px;
  font-size: ${({ theme }) => theme.fontSize.m};
  background: none;
  border: 1px solid ${({ theme }) => theme.colors.secondary};
  border-radius: 5px;

  &:focus {
    outline: none;
  }
`;
