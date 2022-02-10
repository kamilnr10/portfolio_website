import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const Icon = styled(FontAwesomeIcon)`
  position: relative;
  bottom: 0;
  color: ${({ theme }) => theme.colors.line};
  font-size: ${({ theme }) => theme.fontSize.xl};
  transition: 0.3s ease-in-out;

  &:hover {
    bottom: 5px;
    color: ${({ theme }) => theme.colors.secondary};
  }
`;
