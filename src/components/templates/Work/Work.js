import React from 'react';
import { Header } from 'components/atoms/Header/Header';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import { motion, Variants } from 'framer-motion';
import { InView } from 'react-intersection-observer';
import { WorkWrapper, Card, CardTopBar, Folder } from './Work.styles';
import { projectsData } from 'data/data';

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
                  <CardTopBar>
                    <div>
                      <span>Featured project </span>
                      <h3>{name}</h3>
                    </div>
                    <Folder />
                  </CardTopBar>
                  <div>
                    <p>{description}</p>
                  </div>
                  <div>
                    {technology.map((element, index) => (
                      <span key={index}>{element}</span>
                    ))}
                  </div>
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
