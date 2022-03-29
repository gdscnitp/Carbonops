import React from 'react';
import styles from './carbonFootprint.module.css';
import { useState } from 'react';

export default function Result(props) {
  const [showMe, setShowMe] = useState('');
  function toggle() {
    setShowMe(!showMe);
  }

  return (
    <>
      <div className={styles.ellipse}>
        <div onClick={toggle} className={styles.result}>
          {props.result}
        </div>
        <div className={styles.position}>
          <div
            style={{
              display: props.result > 60 ? 'block' : 'none',
              fontSize: '20px',
            }}
          >
            User is creating Negative Impact
          </div>
          <div
            style={{
              display:
                props.result < 60 && props.result > 0 ? 'block' : 'none',
              fontSize: '20px',
            }}
          >
            User is creating Positive Impact
          </div>
        </div>
      </div>
    </>
  );
}
