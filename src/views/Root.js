import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ReactLoading from 'react-loading';
import styled, { ThemeProvider } from 'styled-components';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { GlobalStyle } from 'assets/styles/GlobalStyle';
import Navigation from 'components/organisms/Navigation/Navigation';
import { theme } from 'assets/styles/theme';
import { SectionWrapper } from 'components/organisms/SectionWrapper/SectionWrapper';
import { Wrapper, LoadingWrapper } from './Root.styles';
import { MainScreen } from './MainScreen';

function Root() {
  const [isActive, setIsActive] = useState(false);
  const [jobsInfo, setJobsInfo] = useState([]);
  const [loading, setloading] = useState(false);

  const fetchData = async () => {
    let response = await axios
      .post(
        'https://graphql.datocms.com/',
        {
          query: `
          {
            allAboutMes {
              id
              description
            }
            allJobinfos {
              idCustom
              company
              job
              website
              date
              responsibilityDescription
              responsibilityDescriptionCopy1
              responsibilityDescriptionCopy2
              responsibilityDescriptionCopy3
              responsibilityDescriptionCopy4
              responsibilityDescriptionCopy5
              responsibilityDescriptionCopy6
            }
          }
        `,
        },
        {
          headers: {
            authorization: `Bearer ${process.env.REACT_APP_DATOCMS_TOKEN}`,
          },
        }
      )
      .then(({ data: { data } }) => {
        setTimeout(() => {
          const jobs = data.allJobinfos.sort((a, b) => a.idCustom - b.idCustom);
          setJobsInfo(jobs);
          setloading(true);
        }, 2000);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleClick = () => {
    setIsActive(!isActive);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Router>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        {loading ? (
          <Wrapper>
            <SectionWrapper blur={isActive}>
              <Routes>
                <Route path="/" exact element={<MainScreen jobsInfo={jobsInfo} />} />
              </Routes>
            </SectionWrapper>
            <Navigation isActive={isActive} handleClick={handleClick} />
          </Wrapper>
        ) : (
          <LoadingWrapper>
            <ReactLoading type={'balls'} color={theme.colors.secondary} />
          </LoadingWrapper>
        )}
      </ThemeProvider>
    </Router>
  );
}

export default Root;
