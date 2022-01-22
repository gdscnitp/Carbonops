import CreateEvents from '../src/components/events/CreateEvents'
import Navbar from '../src/components/navbar/Navbar'

export default function Events() {
    return (
        <>
        <Navbar link1="/" link2="./events" link3="/" link4="/" action1="Dashboard"  action2="Events" buttonText1="" buttonText2=""/>
        <CreateEvents />
        </>
    )
}
