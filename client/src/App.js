
import './App.css';
import Login from './Login.js';
import Home from './Home.js';
import SignUp from './SignUp.js';
import Profile from './Profile';
import { Switch, Route } from "react-router-dom"
import React, { useState, useEffect } from 'react';

function App() {
  //this is the state that will track user id
  const [user, setUser] = useState(null)

  //login fetch? will work on this comment later
  useEffect(() => {
    //auto login, yall!
    //TODO: check if this is the right link syntax
    fetch("http://localhost:4000/me").then((response) => {
      if (response.ok) {
        response.json().then((user) => setUser(user))
      }
    })
  }, [])

  //this is where we need a fetch for just our api info, probabbly beyblade data

  const [beyblades, setBeyblades] = useState([])

  useEffect(() => {
    fetch("http://localhost:3000/beyblades")
      .then((r) => r.json())
      .then((beybladeArray) => {
       
        setBeyblades(beybladeArray)
      })
  }, [])

  return (
    <div className='wrapper'>
      {/* <NavBar user={user} setUser={setUser} /> */}

      <main>
        <Switch>
          {/* stuff */}
          {/* TODO: should only be able to view profile if logged in */}
          <Route path="/profile">
            <Profile user={user} beyblades={beyblades} />
          </Route>

          {/* <Route path="/">
              <Home user={user} setUser={setUser} beyblades={beyblades} />
            </Route> */}
          {/* </Switch>
  
          <Switch> */}
          {/* signup route */}
          <Route path="/signup">
            <SignUp setUser={setUser} />
          </Route>

          {/* login path */}
          <Route path="/login">
            <Login
              user={user}
              setUser={setUser} />
          </Route>
          <Route path="/">
            <Home
              user={user}
              setUser={setUser}
              beyblades={beyblades} />
          </Route>
        </Switch>

      </main>
    </div>
  );
}

export default App;
