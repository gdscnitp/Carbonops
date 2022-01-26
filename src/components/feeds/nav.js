import styles from "./Card.module.css";
import React from "react";
import Link from "next/link";


export default function Navbar() {
    return (
        <>
            <nav className={styles.navbar}>
                <div className={styles.logo}>
                    <Link href="./"> Dashboard</Link>
                </div>
                <div className={styles.middle}>
                    Search for all organisations
                </div>
                <div className={styles.right}>
                    Sort
                </div>
                <br/>
            
            </nav>
        </>
    );
}
