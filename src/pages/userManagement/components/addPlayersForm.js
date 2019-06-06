import React from 'react';
import {Button} from 'react-bootstrap';
import {Formik, Form, Field} from 'formik';
import {Mutation} from 'react-apollo';
import gql from 'graphql-tag';

const initialValues = {
  firstName: '',
  lastName: '',
  email: '',
  phoneNumber: '',
  status: 'ACTIVE',
};

const handleSubmit = async (createUser, values, resetForm) => {
  try {
    await createUser({variables: values, refetchQueries: ['PlayersList']});
    resetForm(initialValues);
  } catch (e) {
    console.log('Something went wrong');
  }
};

const formStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  marginBottom: '24px',
};

const CREATE_USER = gql`
  mutation createUser(
    $firstName: String!
    $lastName: String!
    $phoneNumber: String!
    $status: Status
    $email: String!
  ) {
    createUser(
      email: $email
      firstName: $firstName
      lastName: $lastName
      phoneNumber: $phoneNumber
      status: $status
    ) {
      user {
        id
      }
    }
  }
`;
export default () => {
  return (
    <Mutation mutation={CREATE_USER}>
      {(createUser, {data}) => (
        <Formik
          initialValues={initialValues}
          onSubmit={(values, {resetForm}) => handleSubmit(createUser, values, resetForm)}
          render={props => {
            return (
              <Form style={formStyle} onSubmit={props.handleSubmit}>
                <Field
                  type="text"
                  onChange={props.handleChange}
                  value={props.values.firstName}
                  name="firstName"
                  placeholder="First"
                />
                <Field
                  onChange={props.handleChange}
                  value={props.values.lastName}
                  name="lastName"
                  placeholder="Last"
                />
                <Field
                  type="email"
                  onChange={props.handleChange}
                  value={props.values.email}
                  name="email"
                  placeholder="Email address"
                />
                <Field
                  onChange={props.handleChange}
                  value={props.values.phoneNumber}
                  name="phoneNumber"
                  placeholder="Phone number"
                />
                <Field component="select" name="status">
                  <option value="ACTIVE">Active</option>
                  <option value="INACTIVE">Inactive</option>
                  <option value="SUBSTITUTE">Substitute</option>
                </Field>
                <Button type="submit">Add player</Button>
              </Form>
            );
          }}
        />
      )}
    </Mutation>
  );
};
