import React from 'react'
import Navbar from '../src/components/navbar/Navbar';
import OrganisationDashBoard from '../src/components/organisation/Content'
import styles from '../styles/Home.module.css'

const organisationDash = () => {
    return (
        <>
        <Navbar action1="" action2="" buttonText="Create Events" />

        <main className={styles.main}>
        <OrganisationDashBoard />
       </main> 
        </>
    )
}

export default organisationDash
