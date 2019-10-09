import React from 'react';
import styled from 'styled-components';

const Textarea = styled.textarea`
    font-family: 'Montserrat';
    height: 20vh;
    border: 1px solid #cecece !important;
    color: #fafafa;
    padding: 0.5em;
    border-radius: 3px;
    :focus {
        border: 1px solid whitesmoke !important;
        background-color: whitesmoke !important;
        color: #535353;
    }
    ::placeholder {
        color: white;
    }
`;

const TextareaComponent = props => {
    return <Textarea rows={props.rows} cols={props.cols} name={props.name} required>{props.children}</Textarea>
}

export default TextareaComponent;