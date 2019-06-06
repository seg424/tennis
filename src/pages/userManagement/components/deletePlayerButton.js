import React from 'react';
import {Mutation} from 'react-apollo';
import {Button} from 'react-bootstrap';
import gql from 'graphql-tag';

const DELETE_USER = gql`
  mutation deleteUser($id: ID!) {
    deleteUser(id: $id) {
      success
    }
  }
`;

export default ({id, closeModal}) =>
  console.log('id', id) || (
    <Mutation mutation={DELETE_USER}>
      {deleteUser => (
        <Button
          variant="danger"
          onClick={() => {
            deleteUser({variables: {id}, refetchQueries: ['PlayersList']});
            closeModal();
          }}
        >
          Delete
        </Button>
      )}
    </Mutation>
  );
