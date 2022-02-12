import { Home } from 'components/templates/Home/Home';
import { AboutMe } from 'components/templates/AboutMe/AboutMe';
import { Experience } from 'components/templates/Experience/Experience';
import { Work } from 'components/templates/Work/Work';
import { GetInTouch } from 'components/templates/GetInTouch/GetInTouch';

export const MainScreen = ({ jobsInfo }) => {
  return (
    <>
      <Home />
      <AboutMe id="about" />
      <Experience id="experience" jobsInfo={jobsInfo} />
      <Work id="work" />
      <GetInTouch id="getintouch" />
      {/* <Footer /> */}
    </>
  );
};
