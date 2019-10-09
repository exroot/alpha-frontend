import React from 'react';
import styled from 'styled-components';

const Input = styled.input`
    font-family: 'Montserrat';
    border: 1px solid #cecece !important;
    color: #fafafa;
    padding: 0.5em;
    border-radius: 3px;
    display: flex;
    text-align: center;
    :focus {
        border: 1px solid whitesmoke !important;
        background-color: whitesmoke !important;
        color: #535353;
    }
    ::placeholder {
        color: white;
    }
`;

const InputComponent = props => {
    return <Input placeholder={props.placeholder} type={props.type} name={props.name} required></Input>
}

export default InputComponent;