import React from 'react';
import styled from 'styled-components';
import './Form.css';

const Form = styled.form`
    margin-left: auto;
    margin-right: auto;
    background-color: slateblue;
    padding: 2.5em 2em 1em 2em;
    border-radius: 3px;
    box-shadow: 9px 9px 9px #cecece;
`;

const FormComponent = props => {
    return (
        <Form method={props.method} action={props.action}>
            {props.children}
        </Form>
    );
}

export default FormComponent;
