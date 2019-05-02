import React from 'react';
import {ApolloProvider} from 'react-apollo';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './pages/home';
import News from './pages/news';
import Rules from './pages/rules';
import logo from './logo.svg';
import './App.css';

const App = ({apolloClient}) => (
  <ApolloProvider client={apolloClient}>
    <Router>
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>ADI TENNIS WEBSITE</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/news" exact component={News} />
        <Route path="/rules" exact component={Rules} />
      </Switch>
    </Router>
  </ApolloProvider>
);

export default App;
