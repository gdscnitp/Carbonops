import CreateEvents from '../src/components/events/CreateEvents'
import Navbar from '../src/components/navbar/Navbar'
import {navLinks} from '../src/components/utils/data'

export default function Events() {
    async function onAddEventHandler(values) {
       const response = await fetch('/api/created-events',{
        method:'POST',
        body:JSON.stringify(values),
        headers:{
            'Content-Type' :'application/json'
        }
    })
        const data = await response.json();
        console.log(data);
    }

    return (
        <>
        <Navbar 
        action1={navLinks[0].name} 
        href1={navLinks[0].link}  
        action2={navLinks[1].name}
        href2={navLinks[1].link} 
        buttonText1="" 
        buttonText2=""
        buttonText3=""/>
        <CreateEvents />
        </>
    )
}
