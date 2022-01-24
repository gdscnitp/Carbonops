import styles from "./Card.module.css";
import React from "react";
import Link from "next/link";


export default function Bottom() {
    return (
        <>
            <nav className={styles.navbar2}>
                <div className={styles.middle2}>
                    Rows per page:
                </div>
                <div className={styles.right2}>
                    Page:
                </div>
                <br/>
            
            </nav>
        </>
    );
}
