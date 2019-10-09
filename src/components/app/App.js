import React from 'react';
import { Navbar, Loader } from '../includes';
import NotesForm from '../Notes/NotesForm/NotesForm';

import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Loader />
      <NotesForm method="POST" action="/notes" />
    </div>
  );
}

export default App;
