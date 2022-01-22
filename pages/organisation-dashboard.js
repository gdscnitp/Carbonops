import React from 'react'
import Navbar from '../src/components/navbar/Navbar';
import OrganisationDashBoard from '../src/components/organisation/Content'
import styles from '../styles/Home.module.css'

const organisationDetail={
    profile:"Welcome to Green World",
    description:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis reiciendis incidunt nostrum voluptates! Quidem excepturi nam optio rerum qui blanditiis iure,",
    link:"http://mywebsite.com",
    
};

const navLinks=[
    {
        name: "Dashoard",
        link: '/'
    },
    {
        name: "Events",
        link: '/events'
    },
    {
        name:"Create Events",
        link:'/create-events'
    }
]
   



const organisationDash = () => {
    // console.log(navLinks[0].name);
    // console.log(navLinks[0].link)
    return (
        <>
        {/* <Navbar action1="Events" action2="Dashboard" action3="Logout" buttonText="Create Events" /> */}
        <Navbar 
        action1={navLinks[0].name} 
        href1="/"
        action2={navLinks[1].name}
        href2="/events"
        buttonText1={navLinks[2].name}
        href3="/create-events"
        buttonText2="Logout"/>

        <main className={styles.main}>
        <OrganisationDashBoard {...organisationDetail}/>
       </main> 
        </>
    )
}

export default organisationDash;
