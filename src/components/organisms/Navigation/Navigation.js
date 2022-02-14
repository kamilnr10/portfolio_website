import React, { useState, useEffect } from 'react';
import { debounce } from 'helpers/debounce';
import { HamburgerMenu } from 'components/atoms/HamburgerMenu/HamburgerMenu';
import { Link as LinkScroll, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';
import pdf from 'assets/resume/resume.pdf';
import { Nav, Logo, AsideNav, NavWrapper, Button } from './Navigation.styles';
import { navigationLinks } from 'data/data';
import { LockScreen } from 'components/atoms/LockScreen/LockScreen';
import Media from 'react-media';

const Navigation = ({ isActive, handleClick }) => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  const handleScroll = debounce(() => {
    const currentScrollPos = window.pageYOffset;
    console.log(currentScrollPos);
    setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 30);
    setPrevScrollPos(currentScrollPos);
  }, 100);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos, visible, handleScroll]);

  return (
    <>
      <Nav visible={visible}>
        <Logo />
        <HamburgerMenu isActive={isActive} handleClick={handleClick} />
        <AsideNav isActive={isActive}>
          <NavWrapper>
            <ol>
              {navigationLinks.map((link, index) => (
                <li key={link}>
                  <span>{`0${index + 1}.`}</span>
                  <Media queries={{ small: { maxWidth: 769 } }}>
                    {(matches) =>
                      matches.small ? (
                        <LinkScroll to={link.replace(/ /g, '')} smooth={true} duration={500} onClick={handleClick}>
                          {link.charAt(0).toUpperCase() + link.slice(1)}
                        </LinkScroll>
                      ) : (
                        <LinkScroll to={link.replace(/ /g, '')} smooth={true} duration={500}>
                          {link.charAt(0).toUpperCase() + link.slice(1)}
                        </LinkScroll>
                      )
                    }
                  </Media>
                </li>
              ))}
              <Button trailingIcon="picture_as_pdf" label="Resume">
                <a href={pdf} rel="noopener noreferrer" target="_blank">
                  resume
                </a>
              </Button>
            </ol>
          </NavWrapper>
        </AsideNav>
        {isActive && <LockScreen />}
      </Nav>
    </>
  );
};

export default Navigation;
