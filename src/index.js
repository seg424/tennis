import React from 'react';
import ReactDOM from 'react-dom';
import {ApolloClient, HttpLink, InMemoryCache, gql} from 'apollo-boost';
import App from './App';
import './index.css';

const client = new ApolloClient({
  link: new HttpLink({uri: 'http://localhost:3000/graphql'}),
  cache: new InMemoryCache(),
});

ReactDOM.render(<App apolloClient={client} />, document.getElementById('root'));
