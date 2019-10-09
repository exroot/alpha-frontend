import React from 'react';
import { Form, Button } from '../includes';
import InputComponent from '../includes/Form/Input/Input';
import LabelComponent from '../includes/Form/Label/Label';

const authForm = props => {
    return (
    <Form method={props.method} action={props.action}>
        <div className="form-group" >
            <LabelComponent for="email">Email</LabelComponent>
            <InputComponent placeholder="email" type="email" name="email"/>
        </div>
        <div className="form-group" >
            <LabelComponent for="password">Password</LabelComponent>
            <InputComponent placeholder="password" type="password" name="password"/>
        </div>
        <div className="form-group">
            <p><a href="/">Forgot your password?</a></p>
        </div>
        <Button type="submit">Sign in</Button>
    </Form>)
}

export default authForm;