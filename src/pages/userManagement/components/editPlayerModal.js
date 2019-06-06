import React from 'react';
import {Modal} from 'react-bootstrap';
import EditPlayerForm from './editPlayerForm';

export default ({open, closeModal, initialValues, handleSubmit, playerId}) => {
  return (
    <Modal show={open} onHide={closeModal}>
      <Modal.Header closeButton>
        <Modal.Title>Edit Player</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <EditPlayerForm
          playerId={playerId}
          initialValues={initialValues}
          handleSubmit={handleSubmit}
          closeModal={closeModal}
        />
      </Modal.Body>
    </Modal>
  );
};
