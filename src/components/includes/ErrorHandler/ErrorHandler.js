import React from 'react';
import styled from 'styled-components';

const Div = styled.div`
    background-color: #ff6969;
    color: #fafafa;
    border: 2px solid white;
    font-size: 1.15em;
    font-family: 'Montserrat';
    font-weight: boldess;
    text-align: center;
    padding: 0.5em;
    max-width: 35%;
    margin: 5vh auto 0vh auto;
    animation: fade-in .55s linear 0ms;
`;

const ErrorMessage = props => {
    return (
    <Div>
        { props.children }
    </Div>
    );
}

export default ErrorMessage;