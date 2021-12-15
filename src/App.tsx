import React, { useState } from 'react';
import './App.css';
import Button from './components/Button';
import { api, User } from './api';
import UserList from './components/UserList';

function App() {

  const [users, setUsers] = useState<User[]>([]);
  const [status, setStatus] = useState<number>(api.DATA_INIT);

  const getUsersClicked = () => {
    setStatus(api.DATA_LOADING);

    api.getUsers().then(users => {
      setUsers(users);
      setStatus(api.DATA_READY)
    })
      .catch(err => {
        setStatus(api.DATA_ERROR);
        console.log(err);
      })
  }

  return (
    <div className="App">
      <h2>Simple React App</h2>
      <Button title={"Get Users"} onClickFn={getUsersClicked} />
      <UserList users={users} status={status}/>
    </div>
  );
}

export default App;
