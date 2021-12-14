import React, { useState } from 'react';
import './App.css';
import Button from './components/Button';
import { api, User } from './api';

function App() {

  const [users, setUsers] = useState<User[]>([]);
  const [status, setStatus] = useState<number>(api.DATA_INIT);
  const [err, setErr] = useState(null);

  const getUsersClicked = () => {
    setStatus(api.DATA_LOADING);

    api.getUsers().then(users => {
      setUsers(users);
      setStatus(api.DATA_READY)
    })
    .catch(err => {
      setStatus(api.DATA_ERROR);
      setErr(err);
    })
  }
  
  return (
    <div className="App">
      <h2>Simple React App</h2>
     <Button title={"Get Users"} onClickFn={getUsersClicked}/>
    </div>
  );
}

export default App;
