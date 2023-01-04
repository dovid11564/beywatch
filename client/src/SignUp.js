import React, { useState } from "react"
import { Link } from "react-router-dom"

function SignUp({ setUser }) {

    //states for our sign up form fields
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirmation, setPasswordConfirmation] = useState("")
    // const [signUp, setSignUp] = useState(false)

    function handleSubmit(e) {
        // this function takes all the stores values and stuff 
        e.preventDefault()
        fetch("/signup", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                username,
                password,
                password_confirmation: passwordConfirmation,
            }),
        }).then((r) => {
            if (r.ok) {
                r.json().then((user) => setUser(user));
            }
        });
    }

    return (
        <div>
            {/* <div>
             <form onSubmit={handleSubmit}>
                <h1>Sign Up</h1>
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
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    autoComplete="current-password"
                />
                <label htmlFor="password">Password Confirmation</label>
                <input
                    type="password"
                    id="password_confirmation"
                    value={passwordConfirmation}
                    onChange={(e) => setPasswordConfirmation(e.target.value)}
                    autoComplete="current-password"
                />
                <button type="submit">Sign Up</button>  
                </form>
             </div> */}

            <div id="id01" className="modal">
                {/* ternary that displays the signup form or sign button */}
                
                    <form className="modal-content" onSubmit={handleSubmit}>
                        <div className="container">
                            <h1>Sign Up</h1>
                            <p>Please fill in this form to create an account.</p>
                            <hr />
                            <label htmlFor="username"><b>Username</b></label>
                            <input type="text"
                                placeholder="Enter Username"
                                name="username"
                                required
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                            />

                            <label htmlFor="psw"><b>Password</b></label>
                            <input type="password"
                                placeholder="Enter Password"
                                name="psw"
                                required
                                value={password}
                                onChange={(e) => setPassword(e.target.value)} />

                            <label htmlFor="psw-repeat"><b>Repeat Password</b></label>
                            <input
                                type="password"
                                placeholder="Confirm Password"
                                name="psw-repeat"
                                required
                                value={passwordConfirmation}
                                onChange={(e) => setPasswordConfirmation(e.target.value)} />

                            <label>
                                <input
                                    type="checkbox"
                                    defaultChecked="checked"
                                    name="remember"
                                    className="login-form-label-input" />
                                Remember me
                            </label>

                            <p>By creating an account you agree to our <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" className="login-form-p">Terms & Conditions</a>.</p>

                            <div className="clearfix">
                                {/* <button type="button" onclick="document.getElementById('id01').style.display='none'" className="cancelbtn">Cancel</button> */}
                              
                                <button className="signup">
                                    {/* TODO: allow me to click anywhere on the button to move to sign up page */}
                                    <Link to='/login'>
                                    Already Have An Account? Log In Instead
                                        </Link> 
                                        </button>
                                <button type="submit" className="signup">Sign Up</button>
                            </div>
                        </div>
                         {/* <button onClick={setSignUp(!SignUp)}>Click To Sign Up!</button> */}
                

                    </form>
                
            </div>
        </div>
    )
}

export default SignUp