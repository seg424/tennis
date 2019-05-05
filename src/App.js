import React from 'react';
import {ApolloProvider} from 'react-apollo';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import GoogleMapsScript from './components/googleMapsScript';
import Home from './pages/home';
import Info from './pages/info';
import Rules from './pages/rules';
import News from './pages/news';
import NavBar from './components/Navbar';
import Routes from './components/Routes';
import Footer from './components/Footer';

const App = ({apolloClient}) => (
  <ApolloProvider client={apolloClient}>
    <Router>
      <Routes />
    </Router>
  </ApolloProvider>
);

export default App;
