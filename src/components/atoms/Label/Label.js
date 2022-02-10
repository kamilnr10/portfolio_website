import styled from 'styled-components';
import { Input } from '../Input/Input';
import { TextArea } from '../TextArea/TextArea';

export const Label = styled.label`
  position: relative;
  left: 5px;
  top: 4px;
  padding: 0 3px;
  font-size: ${({ theme }) => theme.fontSize.m};
  font-weight: normal;
  color: ${({ theme }) => theme.colors.line};
  pointer-events: none;
  background-color: ${({ theme }) => theme.colors.background};
  transition: 0.4s ease all;
  ${Input}:focus ~ &,
  ${Input}:not(:placeholder-shown)${Input}:not(:focus) ~ & {
    top: -14px;
    font-size: 14px;
    color: ${({ theme }) => theme.colors.secondary};
  }

  ${TextArea}:focus ~ &,
  ${TextArea}:not(:placeholder-shown)${TextArea}:not(:focus) ~ & {
    top: -14px;
    font-size: 14px;
    color: ${({ theme }) => theme.colors.secondary};
  }
`;
