function Home({ user }) {
    if (user) {
        return(
            <p> you are currently signed in as {user.username}</p>
        )
    } else { return(
        <p> you are not signed in, please sign in</p>
    )
    // return (
    //     <>
    //     <p>this is my home component</p>
    //     </>
    // )
}
}
export default Home