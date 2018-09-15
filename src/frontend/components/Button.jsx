import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  border: none;
  padding: 10px 20px;
  background: white;
  color: #00ad73;
  border-radius: 5px;
  font-size: 1em;
  font-weight: 600;
  width: ${props => props.width ? props.width : 'auto'};

  &:active {
    outline: none;
    border: none;
  }
`;

export default ({ name, action, width }) => (
  <Button onClick={() => action()} width={width}>
    {name}
  </Button>
);
