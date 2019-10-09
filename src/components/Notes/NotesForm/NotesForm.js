import React from 'react';
import { Form, Button } from '../../includes';
import InputComponent from '../../includes/Form/Input/Input';
import LabelComponent from '../../includes/Form/Label/Label';
import TextareaComponent from '../../includes/Form/Textarea/Textarea';

const NotesForm = props => {
    return (
        <Form method={props.method} action={props.action}>
            <div className="form-group" >
                <LabelComponent for="title">Title</LabelComponent>
                <InputComponent placeholder="Title" type="text" name="title"/>
            </div>
            <div className="form-group" >
                <LabelComponent for="body">Body</LabelComponent>
                <TextareaComponent rows="4" cols="50" name="body"></TextareaComponent>
            </div>
            <Button type="submit">Submit</Button>
        </Form>
        )
}

export default NotesForm;