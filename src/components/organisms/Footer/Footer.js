import React from 'react';
import { faCopyright } from '@fortawesome/free-regular-svg-icons';
import { CopyrightIcon, Wrapper, InfoWrapper } from './Footer.styles';

export const Footer = () => {
  return (
    <Wrapper>
      <InfoWrapper>
        <p>
          <CopyrightIcon icon={faCopyright} />
          &nbsp;Built by Kamil Nowak
        </p>
      </InfoWrapper>
    </Wrapper>
  );
};
