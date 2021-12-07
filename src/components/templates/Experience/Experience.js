import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Header } from 'components/atoms/Header/Header';
import { debounce } from 'helpers/debounce';

const ExperienceWrapper = styled.div`
  width: 100%;
`;

const ActiveJob = styled.div`
  margin: 20px 0 0 0;

  p {
    margin: 5px 0 0 0;
    color: ${({ theme }) => theme.colors.secondary};
  }

  span {
    color: ${({ theme }) => theme.colors.paragraph};
  }

  ul {
    li {
      margin: 10px 0 10px;
      padding: 0 0 0 15px;
      position: relative;
    }
    li::before {
      content: '▹';
      position: absolute;
      left: 0;
      color: ${({ theme }) => theme.colors.secondary};
    }
  }
`;

const TabList = styled.div`
  /* position: relative; */
  display: flex;
  flex-direction: column;
  /* overflow-x: auto;
  margin: 0 0 20px 0; */

  div:first-child {
    position: relative;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    overflow-x: auto;
  }
`;

const StyledLine = styled.div`
  position: absolute;
  width: 120px;
  height: 2px;
  /* top: auto; */
  bottom: 0;
  transform: translateX(calc(${({ active }) => active - 1} * 120px));
  background-color: ${({ theme }) => theme.colors.secondary};
  transition: 0.3s ease-in-out;
`;

const Button = styled.button`
  width: 120px;
  min-width: 120px;
  background-color: transparent;
  padding: 10px 30px;
  font-size: ${({ theme }) => theme.fontSize.s};
  letter-spacing: 1.2px;
  color: ${({ theme }) => theme.colors.line};
  border: none;
  border-bottom: 2px solid ${({ theme }) => theme.colors.line};
  text-align: center;
  transition: 0.2s ease-in-out;

  &:active {
    background-color: ${({ theme }) => theme.colors.focus};
  }

  &:focus {
    background-color: ${({ theme }) => theme.colors.focus};
  }

  &.active {
    color: ${({ theme }) => theme.colors.secondary};
    background-color: ${({ theme }) => theme.colors.backgroundNav};
  }

  span {
    width: 100%;
  }
`;

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
        </ActiveJob>
      </div>
    </ExperienceWrapper>
  );
};
