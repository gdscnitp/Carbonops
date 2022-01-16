import EventsPage from '../src/components/events/EventsPage'
import Navbar from '../src/components/navbar/Navbar'

export default function Events() {
    return (
        <>
        <Navbar action1="" action2="Dashboard" buttonText1="Create Events" buttonText2=""/>
        <EventsPage />
        </>
    )
}
