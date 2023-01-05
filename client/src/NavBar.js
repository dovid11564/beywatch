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
            
        { (user) ? <p>you are currently signed in as {user.username} <Link to="/profile">Profile</Link> </p> :  <p> you are not logged in, please log in to your account or sign up for an account</p> }
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm0 22c-3.123 0-5.914-1.441-7.749-3.69.259-.588.783-.995 1.867-1.246 2.244-.518 4.459-.981 3.393-2.945-3.155-5.82-.899-9.119 2.489-9.119 3.322 0 5.634 3.177 2.489 9.119-1.035 1.952 1.1 2.416 3.393 2.945 1.082.25 1.61.655 1.871 1.241-1.836 2.253-4.628 3.695-7.753 3.695z"/></svg>
        </header>
        
    )
}

export default NavBar