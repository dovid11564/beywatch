import NavBar from "./NavBar.js"


import BeybladeList from "./BeybladeList.js"

function Home({ user, setUser, beyblades }) {


    return (
        <>
            <NavBar user={user} setUser={setUser} />
            <h1>
                <img src="https://i.pinimg.com/originals/b3/2e/1f/b32e1f221ea82f65a56dfb3644c490b7.jpg" alt="epic beyblade logo" className="home-image-banner" />
            </h1>
            {console.log("HOME", beyblades)}
            <BeybladeList
                beyblades={beyblades}
            />
        </>
    )
}


export default Home