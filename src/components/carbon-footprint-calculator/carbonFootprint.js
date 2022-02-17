import React, { useState } from 'react';
import Tippy from '@tippy.js/react';
// import 'tippy.js/dist/tippy.css';
import styles from './carbonFootprint.module.css';
import { BsExclamationCircle } from 'react-icons/bs';
import {content} from './content';

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
     <div className={styles.heading}>
            <h1>Carbon Footprint Calculator </h1>
          </div>
      <div className={styles.carbonFootprintBody}>
        <div className={styles.BodyLeft}>
         
          <ul>
            <li>
              <div className={styles.content}>
                <div
                  onClick={() => setShow1(!show1)}
                  className={`${show1 ? styles.h4 : styles.h3}`}
                >
                  Members{' '}
                  <Tippy className={styles.tippy} placement="right" content={content.members} arrow={false}>
                    <span>
                      <BsExclamationCircle className={styles.exclaim} />
                    </span>
                  </Tippy>
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
                  onClick={() => setShow2(!show2)}
                  className={`${show2 ? styles.h4 : styles.h3}`}
                >
                  House-Size {' '}
                  <Tippy placement="right" className={styles.tippy} content={content.houseSize} >
                    <span>
                      <BsExclamationCircle className={styles.exclaim} />
                    </span>
                  </Tippy>
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
                  onClick={() => setShow3(!show3)}
                  className={`${show3 ? styles.h4 : styles.h3}`}
                >
                  Preferred diet{' '}
                  <Tippy placement="right" className={styles.tippy} content={content.houseSize} >
                    <span>
                      <BsExclamationCircle className={styles.exclaim} />
                    </span>
                  </Tippy>
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
                  onClick={() => setShow4(!show4)}
                  className={`${show4 ? styles.h4 : styles.h3}`}
                >
                  Packaged Food{' '}
                  <Tippy className={styles.tippy} placement="right" content={content.members} arrow={false}>
                    <span>
                      <BsExclamationCircle className={styles.exclaim} />
                    </span>
                  </Tippy>
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
                  onClick={() => setShow5(!show5)}
                  className={`${show5 ? styles.h4 : styles.h3}`}
                >
                  Dish Washer {' '}
                  <Tippy className={styles.tippy} placement="right" content={content.members} arrow={false}>
                    <span>
                      <BsExclamationCircle className={styles.exclaim} />
                    </span>
                  </Tippy>
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
                  onClick={() => setShow6(!show6)}
                  className={`${show6 ? styles.h4 : styles.h3}`}
                >
                  Washing Machine{' '}
                  <Tippy className={styles.tippy} placement="right" content={content.members} arrow={false}>
                    <span>
                      <BsExclamationCircle className={styles.exclaim} />
                    </span>
                  </Tippy>
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
                  onClick={() => setShow7(!show7)}
                  className={`${show7 ? styles.h4 : styles.h3}`}
                >
                  Household Purchases
                  <Tippy className={styles.tippy} 
                  placement="right" content={content.members} 
                  arrow={false}>
                    <span>
                      <BsExclamationCircle className={styles.exclaim} />
                    </span>
                  </Tippy>
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
                  onClick={() => setShow8(!show8)}
                  className={`${show8 ? styles.h4 : styles.h3}`}
                >
                  Garbage Cans{' '}
                  <Tippy className={styles.tippy} placement="right" content={content.members} arrow={false}>
                    <span>
                      <BsExclamationCircle className={styles.exclaim} />
                    </span>
                  </Tippy>
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
                  onClick={() => setShow9(!show9)}
                  className={`${show9 ? styles.h4 : styles.h3}`}
                >
                  Personal Transport{' '}
                  <Tippy className={styles.tippy} placement="right" content={content.members} arrow={false}>
                    <span>
                      <BsExclamationCircle className={styles.exclaim} />
                    </span>
                  </Tippy>
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
                  onClick={() => setShow10(!show10)}
                  className={`${show10 ? styles.h4 : styles.h3}`}
                >
                  Public Transport{' '}
                  <Tippy className={styles.tippy} placement="right" content={content.members} arrow={false}>
                    <span>
                      <BsExclamationCircle className={styles.exclaim} />
                    </span>
                  </Tippy>
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
                  onClick={() => setShow11(!show11)}
                  className={`${show11 ? styles.h4 : styles.h3}`}
                >
                  Flight {' '}
                  <Tippy className={styles.tippy} placement="right" content={content.members} arrow={false}>
                    <span>
                      <BsExclamationCircle className={styles.exclaim} />
                    </span>
                  </Tippy>
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
        <div className={styles.BodyRight}>
          <div className={styles.score}><strong> Your Score</strong></div>
          <div className={styles.ellipse}>

          </div>
          <div>
          <button className={styles.button}
          >Calculate &rarr;</button>
          </div>
        </div>
      </div>
    </>
  );
}
