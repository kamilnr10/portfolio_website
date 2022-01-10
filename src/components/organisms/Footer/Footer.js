import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faCopyright } from '@fortawesome/free-regular-svg-icons';

const GitHubIcon = styled(FontAwesomeIcon)`
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

const CopyrightIcon = styled(FontAwesomeIcon)`
  font-size: ${({ theme }) => theme.fontSize.xs};
  color: ${({ theme }) => theme.colors.secondary};
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const IconsWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin: 20px 0;
  padding: 0 5px;
`;

const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;

  p {
    font-size: ${({ theme }) => theme.fontSize.s};
    color: ${({ theme }) => theme.colors.secondary};
    text-align: center;
  }
`;

export const Footer = () => {
  return (
    <Wrapper>
      {/* <IconsWrapper>
        <GitHubIcon icon={faHome} />
        <GitHubIcon icon={faGithub} />
        <GitHubIcon icon={faLinkedin} />
        <GitHubIcon icon={faTwitter} />
      </IconsWrapper> */}
      <InfoWrapper>
        <p>
          <CopyrightIcon icon={faCopyright} />
          &nbsp;Built by Kamil Nowak
        </p>
      </InfoWrapper>
    </Wrapper>
  );
};
