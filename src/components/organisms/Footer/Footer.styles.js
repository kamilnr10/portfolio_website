import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const IconsWrapper = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  justify-content: space-between;
  margin: 20px 0;
  padding: 0 5px;
`;

export const GitHubIcon = styled(FontAwesomeIcon)`
  bottom: 0;
  color: ${({ theme }) => theme.colors.line};
  font-size: ${({ theme }) => theme.fontSize.xl};
  transition: 0.3s ease-in-out;

  &:hover {
    bottom: 5px;
    color: ${({ theme }) => theme.colors.secondary};
  }
`;

export const CopyrightIcon = styled(FontAwesomeIcon)`
  font-size: ${({ theme }) => theme.fontSize.xs};
  color: ${({ theme }) => theme.colors.secondary};
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;

  p {
    font-size: ${({ theme }) => theme.fontSize.s};
    color: ${({ theme }) => theme.colors.secondary};
    text-align: center;
  }
`;
