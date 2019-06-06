import React, {useState} from 'react';
import EditPlayerModal from './editPlayerModal';
import {Button, Table} from 'react-bootstrap';

const handleSubmit = (modifyUser, id, values, closeModal) => {
  try {
    modifyUser({variables: {id, values}, refetchQueries: ['PlayersList']}).then(closeModal);
  } catch (e) {
    console.log(`Something went wrong, error: ${e.message}`);
  }
};

const PlayerRow = ({player}) => {
  console.log('player', player);
  const {id, firstName, lastName, email, phoneNumber, league, status} = player;
  const [showModal, setShowModal] = useState(false);

  const initialValues = {firstName, lastName, email, phoneNumber, league, status};
  return (
    <tr>
      <td>{league || 'Not assigned'}</td>
      <td>{firstName}</td>
      <td>{lastName}</td>
      <td>{email}</td>
      <td>{phoneNumber || 'n/a'}</td>
      <td>
        <Button onClick={() => setShowModal(true)}>Edit</Button>
        <EditPlayerModal
          open={showModal}
          closeModal={() => setShowModal(false)}
          initialValues={initialValues}
          playerId={id}
          handleSubmit={handleSubmit}
        />
      </td>
    </tr>
  );
};

export default ({players}) => (
  <Table striped bordered>
    <thead>
      <tr>
        <th>League</th>
        <th>First Name</th>
        <th>Last Name</th>
        <th>Email</th>
        <th>Phone number</th>
        <th>Edit</th>
      </tr>
    </thead>
    <tbody>
      {players.map(player => (
        <PlayerRow key={player.id} player={player} />
      ))}
    </tbody>
  </Table>
);
