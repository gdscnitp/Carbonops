import React from 'react'
import Navbar from '../src/components/navbar/Navbar';
import OrganisationDashBoard from '../src/components/organisation/Content'
import styles from '../styles/Home.module.css'

const organisationDetail={
    profile:"Welcome to Green World",
    description:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis reiciendis incidunt nostrum voluptates! Quidem excepturi nam optio rerum qui blanditiis iure,",
    link:"http://mywebsite.com",
    
};



const organisationDash = () => {
    return (
        <>
        {/* <Navbar action1="Events" action2="Dashboard" action3="Logout" buttonText="Create Events" /> */}
        <Navbar action1="" action2="Logout" buttonText="Create Events" />

        <main className={styles.main}>
        <OrganisationDashBoard {...organisationDetail}/>
       </main> 
        </>
    )
}

export default organisationDash;
