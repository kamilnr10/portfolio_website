import React, { useState, useEffect } from 'react';
import { Header } from 'components/atoms/Header/Header';
import { motion, AnimatePresence } from 'framer-motion';
import { ExperienceWrapper, ActiveJob, TabList, StyledLine, Button } from './Experience.styles';

export const Experience = ({ id, jobsInfo }) => {
  const [appState, setAppState] = useState({
    activeObject: {},
    objects: [],
  });

  useEffect(() => {
    setAppState({
      activeObject: jobsInfo[0],
      objects: jobsInfo,
    });
    // console.log(appState);
  }, []);

  const toggleActive = (id) => {
    // console.log(console.log(jobsInfo));
    const obj = appState.objects.filter((item) => item.idCustom === id)[0];
    setAppState({ ...appState, activeObject: obj });
  };

  const toggleActiveStyles = (id) => {
    console.log(appState.objects);
    if (appState.activeObject.idCustom === id) {
      return 'active';
    } else return 'inactive';
  };

  const responsibilities = Object.values(appState.activeObject).filter((item, index) => (index > 4 ? item : null));

  return (
    <ExperienceWrapper>
      <Header id={id}>Experience</Header>
      <div>
        <TabList>
          <div>
            {appState.objects.map((element, index) => {
              return (
                <Button
                  key={element.idCustom}
                  onClick={() => {
                    toggleActive(element.idCustom);
                  }}
                  className={toggleActiveStyles(element.idCustom)}
                >
                  <span>{element.company}</span>
                </Button>
              );
            })}
            <StyledLine active={appState.activeObject.idCustom}></StyledLine>
          </div>
        </TabList>
        <ActiveJob>
          <AnimatePresence exitBeforeEnter>
            <motion.div
              key={appState.activeObject ? appState.activeObject.company : 'empty'}
              animate={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 20 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2 }}
            >
              <h2>{appState.activeObject.job}</h2>
              <a target="_blank" href={appState.activeObject.website}>
                <p>@{appState.activeObject.company}</p>
              </a>
              <span>{appState.activeObject.date}</span>
              <ul>
                {responsibilities.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </motion.div>
          </AnimatePresence>
        </ActiveJob>
      </div>
    </ExperienceWrapper>
  );
};
