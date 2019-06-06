import React from 'react';
import {Field} from 'formik';

export default props => {
  return (
    <React.Component>
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
        <option value="active">Active</option>
        <option value="inactive">Inactive</option>
        <option value="substitute">Substitute</option>
      </Field>
    </React.Component>
  );
};
