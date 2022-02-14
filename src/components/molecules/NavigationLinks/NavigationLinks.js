import React from 'react';
import { Link as LinkScroll } from 'react-scroll';

export const NavigationLinks = ({ link, index, handleClick }) => {
  return (
    <li key={link}>
      <span>{`0${index + 1}.`}</span>
      <LinkScroll to={link.replace(/ /g, '')} smooth={true} duration={500} onClick={handleClick}>
        {link.charAt(0).toUpperCase() + link.slice(1)}
      </LinkScroll>
    </li>
  );
};
