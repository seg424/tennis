import React from 'react';
import styled from '@emotion/styled';
import {Route} from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = styled.div`
  margin: 20px auto;
  max-width: calc(940px + 2em);
`;

const HeaderImage = styled.img`
  margin-bottom: 40px;
  max-width: calc(940px + 2em);
`;

export default ({component: Component, ...rest}) => (
  <Route
    {...rest}
    render={({match}) => (
      <React.Fragment>
        <Navbar />
        <Layout>
          <HeaderImage src="/adi_tennis_header.jpg" />
          <Component match={match} />
        </Layout>
        <Footer />
      </React.Fragment>
    )}
  />
);
