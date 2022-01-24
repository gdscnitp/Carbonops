import CreateEvents from '../src/components/events/CreateEvents'
import Navbar from '../src/components/navbar/Navbar'
import {navLinks} from '../src/components/utils/data'

export default function Events() {
    return (
        <>
        <Navbar 
        action1={navLinks[0].name} 
        href1={navLinks[0].link}  
        action2={navLinks[1].name}
        href2={navLinks[1].link} 
        buttonText1="" 
        buttonText2=""/>
        <CreateEvents />
        </>
    )
}
