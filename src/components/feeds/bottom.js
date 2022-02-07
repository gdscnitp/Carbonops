import styles from './Card.module.css';
import React from 'react';
import Link from 'next/link';
import { FaAngleLeft } from 'react-icons/fa';
import { FaAngleRight } from 'react-icons/fa';
import { useRouter } from 'next/router';

export default function Bottom() {
  const router = useRouter();
  return (
    <>
      <nav className={styles.navbar2}>
        <div className={styles.LeftArrow}>
          <a
            // onClick={() => {
            //     router.push(`/feeds?page=${page - 1}`)
            // }}
            // disabled={page <= 1}
            // href='/'
          >
            <FaAngleLeft style={{ color: '#00bd57', fontSize: '35px' }} />
          </a>
        </div>
        <div className={styles.RightArrow}>
          <a
          // onClick={() => {
          //   router.push(`/feeds?page=${page + 1}`)
          // }}
          >
            <FaAngleRight style={{ color: '#00bd57', fontSize: '35px' }} />
          </a>
        </div>
        <div className={styles.middle2}>Rows per page:</div>
        <div className={styles.right2}>Page:</div>
        <br />
      </nav>
    </>
  );
}
