import Home from './Home';
import React, { useState } from "react"
import NavBar from './NavBar';

//TODO: why am I not destructuring the user prop which is passed down
function Login({ setUser }) {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")


  //this function handles the login!
  function handleLogin(e) {
    e.preventDefault()
    fetch("/login", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    }).then((response) => {
      if (response.ok) {
        response.json().then((user) => setUser(user))
      }
    })
  }

  return (


    <div>
      <NavBar />
      <div>
        <form onSubmit={handleLogin}></form>
        <h1>Welcome Back, Blader!</h1>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          autoComplete="off"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          autoComplete="current-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" onClick={handleLogin}>Login</button>
      </div>

      {/* <Home /> */}
    </div>
  )
}

export default Login