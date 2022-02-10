import React from 'react';
import styled from 'styled-components';
import { Header } from 'components/atoms/Header/Header';
import { Button } from 'components/atoms/Button/Button';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { Icon } from 'components/atoms/Icon/Icon';
import { ContactForm } from 'components/templates/ContactForm/ContactForm';

import { IconsWrapper } from './GetInTouch.styles';

const GetInTouchWrapper = styled.div`
  width: 100%;

  button {
    display: block;
    margin: 20px auto;
  }

  p {
    &:nth-child(4) {
      margin: 0 0 20px;
      text-align: center;
    }
  }
`;

export const GetInTouch = ({ id }) => {
  return (
    <GetInTouchWrapper>
      <Header id={id}>Get in touch</Header>
      <p>I'm interested in finding some new possibilities to work within this field. Please, feel welcome to contact me.</p>
      <Button>
        <a href="mailto:kamil.nr10@icloud.com?subject=hello! I have an opportunity for You!" target="_blank">
          Say hi
        </a>
      </Button>
      <p>or</p>
      <ContactForm />
      <IconsWrapper>
        <Icon icon={faHome} />
        <a href="https://github.com/kamilnr10" target="_blank">
          <Icon icon={faGithub} />
        </a>
        <a href="https://www.linkedin.com/in/kamil-nowak-9379a3a4/" target="_blank">
          <Icon icon={faLinkedin} />
        </a>
        <a href="https://twitter.com/" target="_blank">
          <Icon icon={faTwitter} />
        </a>
      </IconsWrapper>
    </GetInTouchWrapper>
  );
};
