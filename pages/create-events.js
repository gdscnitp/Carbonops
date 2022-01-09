import CreateEvents from '../src/components/events/CreateEvents'
import Navbar from '../src/components/navbar/Navbar'

export default function Events() {
    return (
        <>
        <Navbar action1="Dashboard"  action2="Events" buttonText1="" buttonText2=""/>
        <CreateEvents />
        </>
    )
}
