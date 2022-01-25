import React from 'react'
import Navbar from '../src/components/navbar/Navbar';
import OrganisationDashBoard from '../src/components/organisation/Content'
import styles from '../styles/Home.module.css'
import {navLinks} from '../src/components/utils/data'

const organisationDetail={
    profile:"Welcome to Green World",
    description:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis reiciendis incidunt nostrum voluptates! Quidem excepturi nam optio rerum qui blanditiis iure,",
    link:"http://mywebsite.com",
    
};



const organisationDash = () => {
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
        buttonText2={navLinks[6].name}
       href4={navLinks[6].link}/>

        <main className={styles.main}>
        <OrganisationDashBoard {...organisationDetail}/>
       </main> 
        </>
    )
}

export default organisationDash;
