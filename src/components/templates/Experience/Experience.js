import React, { useState } from 'react';
import styled from 'styled-components';
import { Header } from 'components/atoms/Header/Header';
import { debounce } from 'helpers/debounce';

const ExperienceWrapper = styled.div`
  width: 100%;
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

export const Experience = ({ id }) => {
  const [appState, setAppState] = useState({
    activeObject: { id: 1, name: 'Netsuite Administrator', description: 'A lot of text is going to be here' },
    objects: [
      {
        id: 1,
        name: 'Netsuite Administrator',
        company: 'APS Energia SA',
        responsibilites: ['Worked with a team', 'Implementing a RPA Robot'],
        description: 'A lot of text is going to be here. Lorem ipsum test of prot qwa. Budin mnni ei aosd pasdm. Polwdas ncoas woia',
      },
      {
        id: 2,
        name: 'Localhost Academy',
        description: 'Second: A lot of text is going to be here. Lorem ipsum test of prot qwa. Budin mnni ei aosd pasdm. Polwdas ncoas woia',
      },
      {
        id: 3,
        name: 'Daft Academy',
        description: 'Third: A lot of text is going to be here. Lorem ipsum test of prot qwa. Budin mnni ei aosd pasdm. Polwdas ncoas woia',
      },
      {
        id: 4,
        name: 'Future Collars',
        description: 'Forth: A lot of text is going to be here. Lorem ipsum test of prot qwa. Budin mnni ei aosd pasdm. Polwdas ncoas woia',
      },
    ],
  });

  const toggleActive = (id) => {
    const obj = appState.objects.filter((item) => item.id === id)[0];
    setAppState({ ...appState, activeObject: obj });
    console.log(appState.activeObject);
  };

  const toggleActiveStyles = (id) => {
    // console.log(appState.activeObject.id);
    if (appState.activeObject.id === id) {
      return 'active';
    } else return 'inactive';
  };

  return (
    <ExperienceWrapper>
      <Header id={id}>Experience</Header>
      <div>
        <TabList>
          <div>
            {appState.objects.map((element, index) => {
              return (
                <Button
                  key={element.id}
                  onClick={() => {
                    toggleActive(element.id);
                  }}
                  className={toggleActiveStyles(element.id)}
                >
                  <span>{element.name}</span>
                </Button>
              );
            })}
            <StyledLine active={appState.activeObject.id}></StyledLine>
          </div>
        </TabList>
        <div>
          <p>{appState.activeObject.description}</p>
        </div>
      </div>
    </ExperienceWrapper>
  );
};
