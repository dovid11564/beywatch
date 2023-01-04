import { useEffect, useState } from "react"
// import Browse from "./Browse.js"
import BeybladeList from "./BeybladeList.js"

function Home({ user }) {

    const [beyblades, setBeyblades] = useState([])

    useEffect(() => {
        fetch("http://localhost:3000/beyblades")
            .then((r) => r.json())
            .then((beybladeArray) => {
                setBeyblades(beybladeArray)
            })
    }, [])
    return (
        <>
            <h1>
                <img src="https://i.pinimg.com/originals/b3/2e/1f/b32e1f221ea82f65a56dfb3644c490b7.jpg" alt="epic beyblade logo" className="home-image-banner" />
            </h1>

            <BeybladeList
                beyblades={beyblades}
                 />
        </>
    )
    // return (
    //     <>
    //     <p>this is my home component</p>
    //     </>
    // )
}

export default Home