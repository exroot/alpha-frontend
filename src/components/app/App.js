import React, {useState, useEffect } from 'react';
import { BrowserRouter , Route, Switch } from 'react-router-dom';
import notesServices from '../../services/notes';

/*** Components ***/
import { Navbar, Loader } from '../includes';
import AuthForm from '../auth/AuthForm';
import { NotesLayout } from '../notes';

import './App.css';

const App = () => {

  const [notes, setNotes] = useState([]);

  useEffect(() => {
    notesServices.getAll().then(notes => {
      setNotes(notes);
    })
  }, []);

  return (
      <div className="App">
        <BrowserRouter>
          <Navbar />
          <Switch>
            <Route exact path="/signin" component={AuthForm}/>
            <Route exact path="/notes" render={(props) => <NotesLayout notes={notes} /> }/>
          </Switch>
          <Loader />
        </BrowserRouter>
      </div>
  );
}

export default App;
