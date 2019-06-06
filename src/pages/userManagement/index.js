import React from 'react';
import gql from 'graphql-tag';
import {Query} from 'react-apollo';
import AddPlayerForm from './components/addPlayersForm';
import PlayersTable from './components/playersTable';

const GET_PLAYERS = gql`
  query PlayersList {
    users {
      edges {
        node {
          id
          firstName
          lastName
          email
          phoneNumber
          league
          status
        }
      }
    }
  }
`;

export default () => (
  <Query query={GET_PLAYERS}>
    {({loading, data, error}) => {
      if (loading) return 'Loading...';
      if (error) throw error;

      const players = data.users.edges.map(({node}) => node);

      return (
        <React.Fragment>
          <h1>Player Management</h1>
          <h3>Add new player</h3>
          <AddPlayerForm />
          <h3>All players</h3>
          <PlayersTable players={players} />
        </React.Fragment>
      );
    }}
  </Query>
);
