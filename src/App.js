import React from 'react';
import {ApolloProvider} from 'react-apollo';
import {BrowserRouter as Router} from 'react-router-dom';
import Routes from './components/Routes';

const App = ({apolloClient}) => (
  <ApolloProvider client={apolloClient}>
    <Router>
      <Routes />
    </Router>
  </ApolloProvider>
);

export default App;
