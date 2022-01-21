import CreateEvents from '../src/components/events/CreateEvents'
import Navbar from '../src/components/navbar/Navbar'

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
        <Navbar action1="Dashboard"  action2="Events" buttonText1="" buttonText2=""/>
        <CreateEvents onAddEvent={onAddEventHandler}/>
        </>
    )
}
