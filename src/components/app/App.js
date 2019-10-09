import React, { useState, useEffect } from 'react';
import { Navbar, Loader } from '../includes';
import { NotesCard } from '../notes';
import notesServices from '../../services/notes';

import './App.css';

const App = () => {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    notesServices.getAll().then(notes => {
      setNotes(notes);
    })
  }, []);
  
  const fetchedNotes = notes.map((note) => <NotesCard key={ note.id } title={ note.title } body={ note.body } /> );
  return (
    <div className="App">
      <Navbar />
      { fetchedNotes }
      <Loader />
    </div>
  );
}

export default App;
