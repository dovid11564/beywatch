function Home({ user }) {
    if (user) {
        return (
            <p> you are currently signed in as {user.username}</p>
        )
    } else {
        return (
            <p> you are not logged in, please log in to your account or sign up for an account</p>
        )
        // return (
        //     <>
        //     <p>this is my home component</p>
        //     </>
        // )
    }
}
export default Home