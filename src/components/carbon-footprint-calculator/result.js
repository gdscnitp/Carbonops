import React from 'react';
import styles from './carbonFootprint.module.css';


export default function Result(props) {
    console.log(props.result,"props result")
    return (
        <>
               <div className={styles.ellipse}>
{props.result}          
  </div>
        </>
    )
}