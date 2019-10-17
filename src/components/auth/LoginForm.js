import React, { useState } from 'react';
import { Form, Button } from '../includes';
import InputComponent from '../includes/Form/Input/Input';
import LabelComponent from '../includes/Form/Label/Label';
import { login } from '../../services';

const LoginForm = props => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handlerLogin = async (event) => {
        /* Prevent reload page when submitting form */
        event.preventDefault();
        try {
            /*
                Login request could have an user object inside of the data key 
                or could be an error throwed by the service
            */
            const loginRequest = await login(email, password);
            /* loginRequest.data = user object with user id, user email and token */
            props.setUser(loginRequest.data);
            setPassword('');
            setEmail('');
            props.history.push('/notes');
        } catch (err) {
            console.log(err.request);
            if (err.request.status) {
                /* 
                    If error has an manegable status 
                        => evaluate cases
                */
                switch (err.request.status) {
                    case 401: props.setErrorMessage("User doesn't exist."); break;
                    case 422: props.setErrorMessage("Wrong credentials."); break;
                    default: props.setErrorMessage("Server error"); break;
                }
            }
            else {
                props.setErrorMessage(err);
            }
        }
    }
    return (
    <Form onSubmit={ handlerLogin } className="centered">
        <div className="form-group" >
            <LabelComponent >Email</LabelComponent>
            <InputComponent placeholder="email" type="email" name="email" onChange={({target}) => setEmail(target.value)}/>
        </div>
        <div className="form-group" >
            <LabelComponent >Password</LabelComponent>
            <InputComponent placeholder="password" type="password" name="password" onChange={({target}) => setPassword(target.value)}/>
        </div>
        <div className="form-group">
            <p><a href="/">Forgot your password?</a></p>
        </div>
        <Button type="submit">Sign in</Button>
    </Form>)
}

export default LoginForm;