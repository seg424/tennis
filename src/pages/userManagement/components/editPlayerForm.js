import React from 'react';
import {Mutation} from 'react-apollo';
import gql from 'graphql-tag';
import {Form, Formik, Field} from 'formik';
import {Button} from 'react-bootstrap';
import DeleteButton from './deletePlayerButton';

const inputStyle = {
  width: '100%',
  marginBottom: '12px',
};

const labelStyle = {
  fontWeight: '700',
  marginBottom: '3px',
};

const buttonStyle = {
  marginLeft: '12px',
};

const radioStyle = {
  marginLeft: '12px',
};

const divStyle = {
  marginTop: '12px',
  display: 'flex',
  justifyContent: 'flex-end',
};

const MODIFY_USER = gql`
  mutation modifyUser($id: ID!, $values: UserInputs!) {
    modifyUser(id: $id, values: $values) {
      user {
        id
      }
    }
  }
`;

export default ({initialValues, playerId, closeModal, handleSubmit}) => (
  <Mutation mutation={MODIFY_USER}>
    {(modifyUser, {data}) => (
      <Formik
        initialValues={initialValues}
        onSubmit={values => {
          handleSubmit(modifyUser, playerId, values, closeModal);
        }}
        render={props => {
          return (
            <Form onSubmit={props.handleSubmit}>
              <div style={labelStyle}>First name</div>
              <Field
                type="text"
                onChange={props.handleChange}
                value={props.values.firstName || ''}
                name="firstName"
                placeholder="First"
                style={inputStyle}
              />
              <div style={labelStyle}>Last name</div>
              <Field
                onChange={props.handleChange}
                value={props.values.lastName || ''}
                name="lastName"
                placeholder="Last"
                style={inputStyle}
              />
              <div style={labelStyle}>Email</div>
              <Field
                type="email"
                onChange={props.handleChange}
                value={props.values.email || ''}
                name="email"
                placeholder="Email address"
                style={inputStyle}
              />
              <div style={labelStyle}>Phone number</div>
              <Field
                onChange={props.handleChange}
                value={props.values.phoneNumber || ''}
                name="phoneNumber"
                placeholder="555-555-5555"
                style={inputStyle}
              />
              <div style={labelStyle}>Status</div>
              <Field component="select" name="status">
                <option value="ACTIVE">Active</option>
                <option value="INACTIVE">Inactive</option>
                <option value="SUBSTITUTE">Substitute</option>
              </Field>
              <div style={labelStyle}>League</div>
              <label style={radioStyle}>
                <input
                  name="league"
                  value="B"
                  type="radio"
                  checked={props.values.league === 'B'}
                  onChange={() => props.setFieldValue('league', 'B')}
                />
                B
              </label>
              <label style={radioStyle}>
                <input
                  name="league"
                  value="C"
                  type="radio"
                  checked={props.values.league === 'C'}
                  onChange={() => props.setFieldValue('league', 'C')}
                />
                C
              </label>

              <label style={radioStyle}>
                <input
                  name="league"
                  value="D"
                  type="radio"
                  checked={props.values.league === 'D'}
                  onChange={() => props.setFieldValue('league', 'D')}
                />
                D
              </label>
              <label style={radioStyle}>
                <input
                  onChange={() => props.setFieldValue('league', '')}
                  name="league"
                  value=""
                  type="radio"
                  checked={!props.values.league}
                />
                Not assigned
              </label>

              <div style={divStyle}>
                <DeleteButton id={playerId} closeModal={closeModal} />
                <Button variant="secondary" style={buttonStyle} type="submit">
                  Save Changes
                </Button>
              </div>
            </Form>
          );
        }}
      />
    )}
  </Mutation>
);
