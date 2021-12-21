import React from 'react';
import styled from 'styled-components';
import { Header } from 'components/atoms/Header/Header';
import { Button } from 'components/atoms/Button/Button';

export const GetInTouch = ({ id }) => {
  return (
    <div>
      <Header id={id}>Get in touch</Header>
      <p>I'm currently looking for new opportunities, my inbox is always open.</p>
      <Button>Say hi</Button>
    </div>
  );
};
