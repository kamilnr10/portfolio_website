import React from 'react';
import styled from 'styled-components';
import { Header } from 'components/atoms/Header/Header';
import portfolio_img from 'assets/images/portfolio_img.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import { motion, Variants } from 'framer-motion';
import { InView } from 'react-intersection-observer';

const variants = {
  offscreen: {
    y: 100,
  },
  onscreen: {
    y: 0,
    rotate: 0,
    transition: {
      type: 'spring',
      bounce: 0.4,
      duration: 0.8,
    },
  },
};

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
    display: flex;
    flex-direction: row;
    justify-content: end;

    a {
      padding: 0 0 0 20px;
      color: ${({ theme }) => theme.colors.text};
      font-size: ${({ theme }) => theme.fontSize.xl};
    }
  }
`;

const list = {
  visible: { opacity: 1 },
  hidden: { opacity: 0 },
};

const item = {
  visible: { opacity: 1, x: 0 },
  hidden: { opacity: 0, x: -100 },
};

const projectsData = [
  {
    id: 1,
    name: 'Porfolio website',
    description: "This is my portfolio website. I'd like to show You what I am currently working on.",
    technology: ['React', 'Styled Components', 'Axios', 'DatoCMS'],
    link: 'https://github.com',
  },
  {
    id: 2,
    name: 'React Quiz App',
    description: "I'm currently working on a game Quiz app React. It is important to me to build things which are useable for me and the others.",
    technology: ['React', 'Styled Components', 'Axios'],
    link: 'https://github.com',
  },
  {
    id: 3,
    name: 'Study Buddy',
    description: 'The Study Buddy is a straightforward method that helps students - and their parents - manage their studying and revision at home. ',
    technology: ['React', 'Mock Service Worker', 'Jest', 'Storybook', 'Context API'],
    link: 'https://github.com',
  },
];

export const Work = ({ id }) => {
  return (
    <WorkWrapper>
      <Header id={id}>Work</Header>
      <ul>
        {projectsData.map(({ id, name, description, technology, link }) => (
          <InView key={id} threshold={0.25} triggerOnce={true}>
            {({ inView, ref, entry }) => (
              <motion.li
                ref={ref}
                initial={{ opacity: 0, x: '100%' }}
                animate={inView ? { opacity: 1, x: 0 } : { x: 140 }}
                transition={{ duration: 0.8 }}
              >
                <Card>
                  <span>Featured project </span>
                  <h3>{name}</h3>
                  <div>
                    <p>{description}</p>
                  </div>
                  <ul>
                    {technology.map((element, index) => (
                      <li key={index}>{element}</li>
                    ))}
                  </ul>
                  <footer>
                    <a target="_blank" href={link}>
                      <FontAwesomeIcon icon={faGithub} />
                    </a>
                    <a href="">
                      <FontAwesomeIcon icon={faExternalLinkAlt} />
                    </a>
                  </footer>
                </Card>
              </motion.li>
            )}
          </InView>
        ))}
      </ul>
    </WorkWrapper>
  );
};
