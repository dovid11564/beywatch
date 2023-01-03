
import './App.css';
import Login from './Login.js';
import Home from './Home.js';
import NavBar from './NavBar.js';
import SignUp from './SignUp.js';
import { Switch, Route } from "react-router-dom"
import React, { useState, useEffect } from 'react';

function App() {
  //this is the state that will track user id
  const [user, setUser] = useState(null)

  //login fetch? will work on this comment later
  useEffect(() => {
    //autho login, yall!
    fetch("http://localhost:4000/me").then((response) => {
      if (response.ok) {
        response.json().then((user) => setUser(user))
      }
    })
  }, [])

  //this is where we need a fetch for just our api info, probabbly beyblade data

  return (
    <div className='wrapper'>
      <NavBar user={user} setUser={setUser} />
      <main>
        {user ? (
          <Switch>
            {/* stuff */}
            <Route path="/">
              <Home user={user} />
            </Route>

          </Switch>
        ) :
          <Switch>

            {/* signup route */}
            <Route path="/signup">
              <SignUp setUser={setUser} />
            </Route>

            {/* login path */}
            <Route path="/login">
              <Login setUser={setUser} />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        }
      </main>
    </div>
  );
}

export default App;
