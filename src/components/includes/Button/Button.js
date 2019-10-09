import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  background: #fafafa;
  font-family: 'Montserrat';
  color: slateblue;
  font-weight: 600;
  width: 100%;
  height: 8vh;
  font-size: 1.2em;
  margin-top: 15px;
  margin-bottom: 15px;
  padding: 0.25em 1em;
  border: 2px solid whitesmoke;
  box-shadow: 6px 6px 6px #5065a2;
  border-radius: 3px;
  :hover {
    cursor: pointer;
  }
  ::active {
    color: #fafafa;
    background-color: slateblue;
    border: 1px solid #fafafa;
  }
`;

const ButtonComponent = props => {
    return <Button type={ props.type ? props.type : "" }>{ props.children }</Button>
}

export default ButtonComponent;