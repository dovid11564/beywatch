import { Link } from "react-router-dom"

function NavBar({ user, setUser }) {

    function handleLogoutClick() {
        fetch("/logout", { method: "DELETE" }).then((r) => {
            if (r.ok) {
                setUser(null);
            }
        });
    }

    return (
        <header className="navbar">
            <div>
                <Link to="/">Home</Link>
            </div>
            <div>
                {user ? (
                    <button onClick={handleLogoutClick}>Logout</button>
                ) : (
                    <>
                        <Link to="/signup">Signup</Link>
                        <Link to="/login">Login</Link>
                    </>
                )}
            </div>
            
        { (user) ? <p>you are currently signed in as {user.username}</p> :  <p> you are not logged in, please log in to your account or sign up for an account</p> }
        </header>
        
    )
}

export default NavBar