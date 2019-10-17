import React from 'react';
import styled from 'styled-components';

const Div = styled.div`
    max-width: 20vw;
    min-height: 10vh;
    font-size: 1.10em;
    color: white;
    position: relative;
    float: right;
    background-color: #f77777;
    padding: 5px;
    border: 1px solid white;
    animation: fade-in 0.55s linear 0ms;
`;
const ErrorMessage = props => {
    return (
        <Div>{ props.children }</Div>
    );
}

export default ErrorMessage;