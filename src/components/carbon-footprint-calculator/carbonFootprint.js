import React, { useState } from 'react';
import Tippy from '@tippy.js/react';
import 'tippy.js/dist/tippy.css'
import styles from './carbonFootprint.module.css';
import { BsExclamationCircle } from 'react-icons/bs';

export default function carbonFootprint() {
  const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false);
  const [show3, setShow3] = useState(false);
  const [show4, setShow4] = useState(false);
  const [show5, setShow5] = useState(false);
  const [show6, setShow6] = useState(false);
  const [show7, setShow7] = useState(false);
  const [show8, setShow8] = useState(false);
  const [show9, setShow9] = useState(false);
  const [show10, setShow10] = useState(false);
  const [show11, setShow11] = useState(false);
  
  return (
    <>
      <div className={styles.carbonFootprintBody}>
        <div className={styles.BodyLeft}>
          {/* <div className={styles.heading}>
            <h1>Carbon Footprint Calculator </h1>
          </div> */}
          <ul>
            <li>
              <div className={styles.content}>
                <div
                  onClick={()=>setShow1(!show1)}
                  className={`${show1 ? styles.h4 : styles.h3}`}
                >
                  Members{' '}
                  {/* <span style={{paddingBottom:'20px'}}> */}
                    {/* <Tippy content='Hello'> */}
                    <BsExclamationCircle className={styles.exclaim} />
                    {/* </Tippy> */}
                  {/* </span>  */}
                </div>
                {show1 && (
                <input
                  className={styles.input}
                  type="number"
                  id="members"
                  name="members"
                  required
                  autoComplete="off"
                  placeholder="Members"
                />
                )}
              </div>
            </li>
            <li>
              <div className={styles.content}>
                <div
                  onClick={()=>setShow2(!show2)}
                  className={`${show2 ? styles.h4 : styles.h3}`}
                >
                  House-Size <BsExclamationCircle className={styles.exclaim} />
                </div>
                {show2 && (
                <select
                  className={styles.input}
                  id="meat"
                  name="meat"
                  required
                  autoComplete="off"
                >
                  <option value="" disabled></option>
                  <option>large</option>
                  <option>medium</option>
                  <option>small</option>
                  <option>apartment</option>
                </select>
                 )}
              </div>
            </li>
            <li>
              <div className={styles.content}>
                <div
                  onClick={()=>setShow3(!show3)}
                  className={`${show3 ? styles.h4 : styles.h3}`}
                >
                  Preferred diet{' '}
                  <BsExclamationCircle className={styles.exclaim} />
                </div>
                {show3 && (
                  <select
                    className={styles.input}
                    id="meat"
                    name="meat"
                    required
                    autoComplete="off"
                  >
                    <option value="" disabled></option>
                    <option>Meat daily</option>
                    <option>Meat Weekly</option>
                    <option>Vegetarian</option>
                    <option>Vegan</option>
                  </select>
                )}
              </div>
            </li>
            <li>
              <div className={styles.content}>
                <div
                  onClick={()=>setShow4(!show4)}
                  className={`${show4 ? styles.h4 : styles.h3}`}
                >
                  Packaged Food{' '}
                  <BsExclamationCircle className={styles.exclaim} />
                </div>
                {show4 && (
                  <select
                    className={styles.input}
                    id="packagedFood"
                    name="packagedFood"
                    required
                    autoComplete="off"
                  >
                    <option value="" disabled></option>
                    <option>Frequently</option>
                    <option>Balanced</option>
                    <option>No</option>
                  </select>
                )}
              </div>
            </li>
            <li>
              <div className={styles.content}>
                <div
                  onClick={()=>setShow5(!show5)}
                  className={`${show5 ? styles.h4 : styles.h3}`}
                >
                  Dish Washer {' '}
                  <BsExclamationCircle className={styles.exclaim} />
                </div>
                {show5 && (
                  <select
                    className={styles.input}
                    id="dishWasher"
                    name="dishWasher"
                    required
                    autoComplete="off"
                  >
                    <option value="" disabled></option>
                    <option>1 to 3 times</option>
                    <option>4 to 9 times</option>
                    <option>more than 9 times</option>
                  </select>
                )}
              </div>
            </li>
            <li>
              <div className={styles.content}>
                <div
                  onClick={()=>setShow6(!show6)}
                  className={`${show6 ? styles.h4 : styles.h3}`}
                >
                  Washing Machine{' '}
                  <BsExclamationCircle className={styles.exclaim} />
                </div>
                {show6 && (
                  <select
                    className={styles.input}
                    id="WashingMachine"
                    name="WashingMachiner"
                    autoComplete="off"
                  >
                    <option value="" disabled></option>
                    <option>1 to 3 times</option>
                    <option>4 to 9 times</option>
                    <option>more than 9 times</option>
                  </select>
                )}
              </div>
            </li>

            <li>
              <div className={styles.content}>
                <div
                  onClick={()=>setShow7(!show7)}
                  className={`${show7 ? styles.h4 : styles.h3}`}
                >
                  Household Purchases{' '}
                  <BsExclamationCircle className={styles.exclaim} />
                </div>
                {show7 && (
                  <input
                    className={styles.input}
                    type="number"
                    id="householdPurchases"
                    name="householdPurchases"
                    required
                    autoComplete="off"
                    placeholder="Household Purchases"
                  />
                )}
              </div>
            </li>
            <li>
              <div className={styles.content}>
                <div
                  onClick={()=>setShow8(!show8)}
                  className={`${show8 ? styles.h4 : styles.h3}`}
                >
                  Garbage Cans{' '}
                  <BsExclamationCircle className={styles.exclaim} />
                </div>
                {show8 && (
                  <input
                    className={styles.input}
                    type="number"
                    id="garbageCans"
                    name="garbageCans"
                    required
                    autoComplete="off"
                    placeholder="Garbage Cans"
                  />
                )}
              </div>
            </li>
            <li>
              <div className={styles.content}>
                <div
                  onClick={()=>setShow9(!show9)}
                  className={`${show9 ? styles.h4 : styles.h3}`}
                >
                  Personal Transport{' '}
                  <BsExclamationCircle className={styles.exclaim} />
                </div>
                {show9 && (
                  <input
                    className={styles.input}
                    type="number"
                    id="personalTransport"
                    name="personalTransport"
                    required
                    autoComplete="off"
                    placeholder="Personal Transport"
                  />
                )}
              </div>
            </li>

            <li>
              <div className={styles.content}>
                <div
                  onClick={()=>setShow10(!show10)}
                  className={`${show10 ? styles.h4 : styles.h3}`}
                >
                  Public Transport{' '}
                  <BsExclamationCircle className={styles.exclaim} />
                </div>
                {show10 && (
                  <input
                    className={styles.input}
                    type="number"
                    id="publicTransport"
                    name="publicTransport"
                    required
                    autoComplete="off"
                    placeholder="Public Transport"
                  />
                )}
              </div>
            </li>
            <li>
              <div className={styles.content}>
                <div
                  onClick={()=>setShow11(!show11)}
                  className={`${show11 ? styles.h4 : styles.h3}`}
                >
                  Flight <BsExclamationCircle className={styles.exclaim} />
                </div>
                {show11 && (
                  <input
                    className={styles.input}
                    type="number"
                    id="flight"
                    name="flight"
                    required
                    autoComplete="off"
                    placeholder="Flight"
                  />
                )}
              </div>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
