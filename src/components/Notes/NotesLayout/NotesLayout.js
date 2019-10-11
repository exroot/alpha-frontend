import React from 'react';
import { NotesCard } from '../index';

const NotesLayout = (props) => {
    const notes = props.notes.map(note => {
      return <NotesCard key={ note.id } title={ note.title } body={ note.body } />;
    })
    return notes;
}

export default NotesLayout;