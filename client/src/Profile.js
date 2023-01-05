import BeybladeList from "./BeybladeList"
import NavBar from "./NavBar"

function Profile({ beyblades }) {
    return (
        <>
         
            <NavBar />
            
            <div className="profile-sidebar">
                <ul>sidebar</ul>
                <li>view your collection!</li>
                <li>profile/user settings</li>
            </div>
            <BeybladeList beyblades={beyblades} />
        </>
    )
}

export default Profile