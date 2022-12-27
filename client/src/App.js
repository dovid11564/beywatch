
import './App.css';
import Login from './Login.js';
import Home from './Home.js';
import { useState, useEffect } from 'react';

function App() {
  //this is the state that will track user id
  const [user, setUser] = useState(null)

  //login fetch? will work on this comment later
  useEffect(() => {
  fetch("http://localhost:4000/me").then((response) => {
    if (response.ok) {
      response.json().then((user) => setUser(user))
    }
  })
}, [])

//this is where we need a fetch for just our api info, probabbly beyblade data

  return (
    <div className='wrapper'>
      <p>this is my app page! </p>
      <Login user={user}/>
      <Home />
    </div>
  );
}

export default App;
