import React from 'react';
import styled from 'styled-components';

const Label = styled.label`
    font-family: 'Montserrat';
    color: #fafafa;
    font-weight: 600;
    font-size: 1.2em;
    display: flex;
    margin-right: 5px;
`;

const LabelComponent = props => {
    return <Label>{ props.children }</Label>;
}

export default LabelComponent;