import React from 'react';
import styled from 'styled-components';
import { Header } from 'components/atoms/Header/Header';
import portfolio_img from 'assets/images/portfolio_img.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';

const WorkWrapper = styled.div`
  width: 100%;

  li {
    margin: 20px 0;
  }
`;

const Card = styled.div`
  position: relative;
  padding: 25px 25px;
  background-color: ${({ theme }) => theme.colors.backgroundNav};

  span:first-of-type {
    padding: 5px 0;
    color: ${({ theme }) => theme.colors.secondary};
  }

  h3 {
    font-size: ${({ theme }) => theme.fontSize.xl};
  }

  ul {
    display: flex;
    flex-grow: 1;
    flex-wrap: wrap;

    li {
      margin: 0;
      padding: 0 10px 0 0;
      font-weight: 300;
    }
  }

  footer {
    margin: 10px 0 0 0;

    a {
      padding: 0 10px 0 0;
      color: ${({ theme }) => theme.colors.text};
      font-size: ${({ theme }) => theme.fontSize.l};
    }
  }
`;

export const Work = () => {
  return (
    <WorkWrapper>
      <Header>Work</Header>
      <ul>
        <li>
          <Card>
            <span>Featured project</span>
            <h3>Portfolio website</h3>
            <div>
              <p>This is my portfolio website. I'd like to show You what I am currently working on. </p>
            </div>
            <ul>
              <li>React</li>
              <li>Styled components</li>
              <li>Axios</li>
              <li>DatoCMS</li>
            </ul>
            <footer>
              <a href="">
                <FontAwesomeIcon icon={faGithub} />
              </a>
              <a href="">
                <FontAwesomeIcon icon={faExternalLinkAlt} />
              </a>
            </footer>
          </Card>
        </li>
        <li>
          <Card>
            <span>Featured project</span>
            <h3>React Quiz App</h3>
            <div>
              <p>I'm currently working on a game Quiz app React. It is important to me to build things which are useable for me and the others. </p>
            </div>
            <ul>
              <li>React</li>
              <li>JS</li>
              <li>Styled Components</li>
              <li>Axios</li>
              <li>DatoCMS</li>
            </ul>
            <footer>
              <a href="">
                <FontAwesomeIcon icon={faGithub} />
              </a>
              <a href="">
                <FontAwesomeIcon icon={faExternalLinkAlt} />
              </a>
            </footer>
          </Card>
        </li>
      </ul>
    </WorkWrapper>
  );
};
