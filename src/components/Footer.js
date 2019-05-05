import React from 'react';
import styled from '@emotion/styled';

const StyledFooter = styled.footer`
  background-color: #f8f9fa;
  border-top: solid 1px rgba(0, 0, 0, 0.5);
  font-size: 14px;
  text-align: center;
  width: 100%;
  padding: 2em;
`;

export default () => (
  <StyledFooter>
    <p>Stuff here about the website</p>
    <p>© 2019</p>
  </StyledFooter>
);
