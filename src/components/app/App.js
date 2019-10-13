import React, {useState, useEffect } from 'react';
import { BrowserRouter , Route, Switch } from 'react-router-dom';

/*** Services ***/
import noteServices from '../../services/notes';

/*** Components ***/
import { Navbar, Loader, ErrorHandler } from '../includes';
import AuthForm from '../auth/AuthForm';
import { NotesLayout } from '../notes';

import './App.css';

const App = () => {
  const [errorMessage, setErrorMessage] = useState(null);
  const [user, setUser] = useState(null);
  const [loader, setLoader] = useState(true);
  const [notes, setNotes] = useState([]);
  const [isAuth, setAuth] = useState(false);

  /* Load all notes if user is valid (has logged) */
  useEffect(() => {
    if (user) {
      noteServices.getAll().then(notes => {
        setTimeout(() => {
          setLoader(false);
          setNotes(notes);
        }, 5000);
      });
    }
  }, [user]);
 
  /* Check for changes on user status (triggered when we has a valid login via AuthForm) */
  useEffect(() => {
    if (user) {
      setAuth(true);
      window.localStorage.setItem('loggedMyNotesUser', JSON.stringify(user));
      noteServices.setToken(user.token);
	    setErrorMessage(null);
    }
  }, [user]);

  /* Check localstorage for a valid item which represent our user (the 1st time our app is loaded) */
  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem('loggedMyNotesUser');
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON);
      setAuth(true);
      setUser(user);
      noteServices.setToken(user.token);
    }
  }, [])

  useEffect(() => {
    if (errorMessage) {
      /* Clear error message from our layout after timeout */
      setTimeout(() => {
        setErrorMessage(null);
      }, 3500);
    }
  }, [errorMessage]);

  const logoutHandler = () => {
    setUser(null);
    setAuth(null);
    noteServices.setToken(null);
    window.localStorage.removeItem('loggedMyNotesUser');
  }

  return (
      <div className="App">
        <BrowserRouter>
          <Navbar isAuth={ isAuth } logoutHandler={ logoutHandler } redirect={'/login'}/>
          { errorMessage && <ErrorHandler> { errorMessage } </ErrorHandler> }
          <Switch>
            { !user ?
              <Route exact path="/login" render={( props ) => <AuthForm {...props} setUser={ setUser } setErrorMessage={ setErrorMessage } /> } />
            :
              <Route exact path="/notes" render={(props) => loader ? <Loader user={user.email} /> : <NotesLayout notes={notes} /> }/>
            }
          </Switch>
        </BrowserRouter>
      </div>
  );
}

export default App;
