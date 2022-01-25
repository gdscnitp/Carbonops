import Navbar from "../src/components/navbar/Navbar"
import OrganisationProfile from '../src/components/organisationProfile/orgprofile'

const organisationprofile = () => {
    return (
        <>
            <Navbar action1="" action2="Home" buttonText1="DashBoard" buttonText2="Create Events"/> 
            <OrganisationProfile/>
        </>
    )
}

export default organisationprofile

