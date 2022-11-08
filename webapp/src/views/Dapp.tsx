import { FC } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Container } from 'reactstrap';

import DappNavbar from '../components/navbar/DappNavbar';
import HomeFooter from '../components/footer/HomeFooter';
import Projects from './Projects';
import CreateProject from './CreateProject';
import Project from './Project';

const Dapp: FC = () => (
  <div style={{ height: '100vh', display: 'flex', flexDirection: 'column' }}>
    <DappNavbar />
    <Container fluid="xl">
      <Routes>
        <Route index element={<Projects />} />
        <Route path="create-project" element={<CreateProject />} />
        <Route path="project/:chain/:address/*" element={<Project />} />
      </Routes>
    </Container>
    <HomeFooter />
  </div>
);

export default Dapp;
