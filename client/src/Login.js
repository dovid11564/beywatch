import { useState } from "react";

import LoginForm from "./LoginForm";
import SignUpForm from "./SignUpForm";



function Login({ onLogin }) {
  const [showLogin, setShowLogin] = useState(true);
  
  return (
    <div className="login-form">
    <>
      
      <h2 className="tagline">Sign up for your Pro-Blading account today!</h2>
      {showLogin ? (
        <>
          <LoginForm onLogin={onLogin} />
          
          <p className="accountquestion">
            Don't have an account?</p> &nbsp;
            <button onClick={() => setShowLogin(false)}>
              Sign Up
            </button> 
        </>
      ) : (
        <>
          <SignUpForm onLogin={onLogin} />
          
          <p className="accountquestion">
            Already have an account?</p> &nbsp;
            <button onClick={() => setShowLogin(true)}>
              Log In
            </button>
        </>
      )}
    </>
    </div>
  );
}



export default Login;