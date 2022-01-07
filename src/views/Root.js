import logo from 'assets/logo.svg';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ReactLoading from 'react-loading';
import 'views/App.css';
import styled, { ThemeProvider, keyframes, css } from 'styled-components';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { GlobalStyle } from 'assets/styles/GlobalStyle';
import Navigation from 'components/organisms/Navigation/Navigation';
import { theme } from 'assets/styles/theme';
import { Button } from 'components/atoms/Button/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import imgKN1 from 'assets/images/imgKN1.png';
import { SectionWrapper } from 'components/organisms/SectionWrapper/SectionWrapper';
import { Home } from 'components/templates/Home/Home';
import { AboutMe } from 'components/templates/AboutMe/AboutMe';
import { Experience } from 'components/templates/Experience/Experience';
import { Work } from 'components/templates/Work/Work';
import { GetInTouch } from 'components/templates/GetInTouch/GetInTouch';
import { ContactForm } from 'components/templates/ContactForm/ContactForm';
import { Footer } from 'components/organisms/Footer/Footer';

const API_TOKEN = '61dc3fdf30baeca2543868165b35ee';

const MainScreen = ({ jobsInfo }) => {
  return (
    <>
      <Home />
      <AboutMe id="about" />
      <Experience id="experience" jobsInfo={jobsInfo} />
      <Work id="work" />
      <GetInTouch id="getintouch" />
      <Footer />
    </>
  );
};

const Wrapper = styled.div`
  position: relative;
  /* width: 100vw; */
  height: 100%;
  padding: 70px 20px 0 20px;
  overflow-x: hidden;
`;

const LoadingWrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

function Root() {
  const [isActive, setIsActive] = useState(false);
  const [aboutMe, setAboutMe] = useState([]);
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
            authorization: `Bearer ${API_TOKEN}`,
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
    console.log('klik');
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
                <Route path="/contact" element={<ContactForm />} />
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
