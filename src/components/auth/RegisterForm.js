import React, { useState } from 'react';
import { register } from '../../services';

// Components
import { Form, Button } from '../includes';
import InputComponent from '../includes/Form/Input/Input';
import LabelComponent from '../includes/Form/Label/Label';


const RegisterForm = props => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword]  = useState('');

    const handlerRegister = async (event) => {
        event.preventDefault();
        try {
            const registerRequest = await register(email, password, confirmPassword);
            setPassword('');
            setConfirmPassword('');
            setEmail('');
            if (registerRequest.status === 200 || registerRequest.status === 201)  {
                props.history.push('/login');
                console.log(`${email} has been registered.`);
            } else {
                console.log(`Something happened: code->${registerRequest.status} message/text-> ${registerRequest.statusText}\n `);
            }
        } catch (err) {
            if (err.status) {
                switch(err.status) {
                    case 422: props.setErrorMessage('Validation failed'); break;
                    default: props.setErrorMessage('Server error.'); break;
                }
            }
        }
    }

    return (
        <Form onSubmit={ handlerRegister }>
            <div className="form-group" >
                <LabelComponent >Email</LabelComponent>
                <InputComponent placeholder="email" type="email" name="email" onChange={({target}) => setEmail(target.value)}/>
            </div>
            <div className="form-group" >
                <LabelComponent >Password</LabelComponent>
                <InputComponent placeholder="password" type="password" name="password" onChange={({target}) => setPassword(target.value)}/>
            </div>
            <div className="form-group" >
                <LabelComponent>Confirm password</LabelComponent>
                <InputComponent placeholder="Confirm password" type="password" name="confirmPassword" onChange={({target}) => setConfirmPassword(target.value)}/>
            </div>
            <div className="form-group">
                <p><a href="/login">You already have an account?</a></p>
            </div>
            <Button type="submit">Sign up</Button>
        </Form>
    )
}

export default RegisterForm;