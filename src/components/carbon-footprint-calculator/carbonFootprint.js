import React, { useState, useEffect } from 'react';
import Multiselect from 'multiselect-react-dropdown';
import 'react-multiple-select-dropdown-lite/dist/index.css';
import Tippy from '@tippy.js/react';
// import 'tippy.js/dist/tippy.css';
import styles from './carbonFootprint.module.css';
import { BsExclamationCircle } from 'react-icons/bs';
import { content } from './content';
import { set } from 'mongoose';

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
  const [show12, setShow12] = useState(false);

  const [submit, setSubmit] = useState(false);
  const data = [
    { id: 'glass', values: 'Glass' },
    { id: 'plastic', values: 'Plastic' },
    { id: 'paper', values: 'Paper' },
    { id: 'aluminium ', values: 'Aluminium ' },
    { id: 'steel', values: 'Steel' },
    { id: 'food waste', values: 'Food waste' },
  ];

  const [values, setValues] = useState({
    members: '',
    houseSize: '',
    meat: '',
    packagedFood: '',
    dishWasher: '',
    washingMachine: '',
    householdPurchases: '',
    garbageCans: '',
    recycles: false,
    itemsRecycled: '',
    personalTransport: '',
    publicTransport: '',
    flight: '',
  });

  const [options] = useState(data);

  const [errors, setErrors] = useState({});
  const handleChange = (e) => {
    // console.log(e.target);
    const { name, value } = e.target;

    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleBool = (e) => {
    setValues({
      ...values,
      recycles: !values.recycles,
    });
  };
  // const handleOnchange = (val) => {
  //   const { id, value } = e.target;
  //   console.log(e.target);
  //   setValues({
  //     ...options,
  //     [id]: value,
  //   });
  //   console.log(values.itemsRecycled);
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(values);
    setErrors(validate(values));
    setSubmit(true);
  };

  useEffect(() => {
    if (Object.keys(errors).length === 0 && submit) {
      // console.log(values);
    }
  }, [errors]);

  const validate = (value) => {
    const error = {};
    if (!value.members) {
      error.members = 'This is required';
    } else if (value.members < 0) {
      error.members = 'Members cannot be negative';
    }
    if (!value.houseSize) {
      error.houseSize = 'This is required';
    }
    if (!value.householdPurchases) {
      error.householdPurchases = 'This is required';
    } else if (value.householdPurchases < 0) {
      error.householdPurchases = 'Number of Purchased House cannot be negative';
    }
    if (!value.meat) {
      error.meat = 'This is required';
    }
    if (!value.packagedFood) {
      error.packagedFood = 'This is required';
    }
    if (!value.garbageCans) {
      error.garbageCans = 'This is required';
    } else if (value.garbageCans < 0) {
      error.garbageCans = 'Garbage Cans count cannot be negative';
    }
    if (!value.personalTransport && !value.publicTransport && !value.flight) {
      error.personalTransport =
        'Atleast fill one from Personal Transport , Public Transport or Flight';
      error.publicTransport =
        'Atleast fill one from Personal Transport , Public Transport or Flight';
      error.flight =
        'Atleast fill one from Personal Transport , Public Transport or Flight';
    } else {
      if (value.personalTransport < 0) {
        error.personalTransport = 'Amount cannot be negative';
      }
      if (value.publicTransport < 0) {
        error.publicTransport = 'Amount cannot be negative';
      }
      if (value.flight < 0) {
        error.flight = 'Amount cannot be negative';
      }
    }
    if (!value.itemsRecycled && value.recycles) {
      error.itemsRecycled = 'This is required';
    }
    return error;
  };

  return (
    <>
      <div className={styles.FootprintBody}>
        <div className={styles.heading}>
          <h1>Carbon Footprint Calculator </h1>
        </div>
        <div className={styles.carbonFootprintBody}>
          {/* <pre>{JSON.stringify(values, undefined, 4)}</pre> */}
          <form onSubmit={handleSubmit} className={styles.BodyLeft}>
            <ul>
              <li>
                <div className={styles.content}>
                  <div
                    onClick={() => setShow1(!show1)}
                    className={`${show1 ? styles.h4 : styles.h3}`}
                  >
                    Members{' '}
                    <Tippy
                      className={styles.tippy}
                      placement="bottom"
                      content={content.members}
                      arrow={false}
                    >
                      <span>
                        <BsExclamationCircle className={styles.exclaim} />
                      </span>
                    </Tippy>
                  </div>

                  {show1 && (
                    <input
                      className={styles.input}
                      type="text"
                      id="members"
                      name="members"
                      required
                      autoComplete="off"
                      placeholder="Members"
                      value={values.members}
                      onChange={handleChange}
                    />
                  )}
                  <p style={{ color: 'red', fontSize: '15px' }}>
                    {errors.members}
                  </p>
                </div>
              </li>
              <li>
                <div className={styles.content}>
                  <div
                    onClick={() => setShow2(!show2)}
                    className={`${show2 ? styles.h4 : styles.h3}`}
                  >
                    House Size{' '}
                    <Tippy
                      placement="bottom"
                      className={styles.tippy}
                      content={content.houseSize}
                      arrow={false}
                    >
                      <span>
                        <BsExclamationCircle className={styles.exclaim} />
                      </span>
                    </Tippy>
                  </div>

                  {show2 && (
                    <select
                      className={styles.input}
                      id="houseSize"
                      name="houseSize"
                      required
                      autoComplete="off"
                      value={values.houseSize}
                      onChange={handleChange}
                    >
                      <option value="" disabled selected>
                        Choose your house size
                      </option>
                      <option value="large">large</option>
                      <option value="medium">medium</option>
                      <option value="mall">small</option>
                      <option value="apartment">apartment</option>
                    </select>
                  )}
                  <p style={{ color: 'red', fontSize: '15px' }}>
                    {errors.houseSize}
                  </p>
                </div>
              </li>
              <li>
                <div className={styles.content}>
                  <div
                    onClick={() => setShow3(!show3)}
                    className={`${show3 ? styles.h4 : styles.h3}`}
                  >
                    Preferred diet{' '}
                    <Tippy
                      placement="bottom"
                      className={styles.tippy}
                      content={content.meat}
                      arrow={false}
                    >
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
                      value={values.meat}
                      onChange={handleChange}
                    >
                      <option value="" disabled selected>
                        Choose your preferred diet
                      </option>
                      <option value="Meat daily">Meat daily</option>
                      <option value="Meat Weekly">Meat Weekly</option>
                      <option value="Vegetarian">Vegetarian</option>
                      <option value="Vegan">Vegan</option>
                    </select>
                  )}
                  <p style={{ color: 'red', fontSize: '15px' }}>
                    {errors.meat}
                  </p>
                </div>
              </li>
              <li>
                <div className={styles.content}>
                  <div
                    onClick={() => setShow4(!show4)}
                    className={`${show4 ? styles.h4 : styles.h3}`}
                  >
                    Packaged Food{' '}
                    <Tippy
                      className={styles.tippy}
                      placement="bottom"
                      content={content.packagedFood}
                      arrow={false}
                    >
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
                      value={values.packagedFood}
                      onChange={handleChange}
                    >
                      <option value="" disabled selected>
                        Choose how often you take packaged food
                      </option>
                      <option value="Frequently">Frequently</option>
                      <option value="Balanced">Balanced</option>
                      <option value="No">No</option>
                    </select>
                  )}
                  <p style={{ color: 'red', fontSize: '15px' }}>
                    {errors.packagedFood}
                  </p>
                </div>
              </li>
              <li>
                <div className={styles.content}>
                  <div
                    onClick={() => setShow5(!show5)}
                    className={`${show5 ? styles.h4 : styles.h3}`}
                  >
                    Dish Washer{' '}
                    <Tippy
                      className={styles.tippy}
                      placement="bottom"
                      content={content.dishWasher}
                      arrow={false}
                    >
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
                      // required
                      autoComplete="off"
                      value={values.dishWasher}
                      onChange={handleChange}
                    >
                      <option value="" disabled selected>
                        Choose how many times you run your dishwasher weekly
                      </option>
                      <option value="1 to 3 times">1 to 3 times</option>
                      <option value="4 to 9 times">4 to 9 times</option>
                      <option value="more than 9 times">
                        more than 9 times
                      </option>
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
                    <Tippy
                      className={styles.tippy}
                      placement="bottom"
                      content={content.washingMachine}
                      arrow={false}
                    >
                      <span>
                        <BsExclamationCircle className={styles.exclaim} />
                      </span>
                    </Tippy>
                  </div>
                  {show6 && (
                    <select
                      className={styles.input}
                      id="washingMachine"
                      name="washingMachine"
                      autoComplete="off"
                      value={values.washingMachine}
                      onChange={handleChange}
                    >
                      <option value="" disabled selected>
                        Choose how many times you run your Washing Machine
                        weekly
                      </option>
                      <option value="1 to 3 times">1 to 3 times</option>
                      <option value="4 to 9 times">4 to 9 times</option>
                      <option value="more than 9 times">
                        more than 9 times
                      </option>
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
                    <Tippy
                      className={styles.tippy}
                      placement="bottom"
                      content={content.householdPurchases}
                      arrow={false}
                    >
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
                      value={values.householdPurchases}
                      onChange={handleChange}
                    />
                  )}
                  <p style={{ color: 'red', fontSize: '15px' }}>
                    {errors.householdPurchases}
                  </p>
                </div>
              </li>
              <li>
                <div className={styles.content}>
                  <div
                    onClick={() => setShow8(!show8)}
                    className={`${show8 ? styles.h4 : styles.h3}`}
                  >
                    Garbage Cans{' '}
                    <Tippy
                      className={styles.tippy}
                      placement="bottom"
                      content={content.garbageCans}
                      arrow={false}
                    >
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
                      value={values.garbageCans}
                      onChange={handleChange}
                    />
                  )}
                  <p style={{ color: 'red', fontSize: '15px' }}>
                    {errors.garbageCans}
                  </p>
                </div>
              </li>
              <li>
                <div className={styles.content}>
                  <div
                    onClick={() => setShow9(!show9)}
                    className={`${show9 ? styles.h4 : styles.h3}`}
                  >
                    Personal Transport{' '}
                    <Tippy
                      className={styles.tippy}
                      placement="bottom"
                      content={content.personalTransport}
                      arrow={false}
                    >
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
                      // required
                      autoComplete="off"
                      placeholder="Personal Transport"
                      value={values.personalTransport}
                      onChange={handleChange}
                    />
                  )}
                  <p style={{ color: 'red', fontSize: '15px' }}>
                    {errors.personalTransport}
                  </p>
                </div>
              </li>

              <li>
                <div className={styles.content}>
                  <div
                    onClick={() => setShow10(!show10)}
                    className={`${show10 ? styles.h4 : styles.h3}`}
                  >
                    Public Transport{' '}
                    <Tippy
                      className={styles.tippy}
                      placement="bottom"
                      content={content.publicTransport}
                      arrow={false}
                    >
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
                      // required
                      autoComplete="off"
                      placeholder="Public Transport"
                      value={values.publicTransport}
                      onChange={handleChange}
                    />
                  )}
                  <p style={{ color: 'red', fontSize: '15px' }}>
                    {errors.publicTransport}
                  </p>
                </div>
              </li>
              <li>
                <div className={styles.content}>
                  <div
                    onClick={() => setShow11(!show11)}
                    className={`${show11 ? styles.h4 : styles.h3}`}
                  >
                    Flight{' '}
                    <Tippy
                      className={styles.tippy}
                      placement="bottom"
                      content={content.flight}
                      arrow={false}
                    >
                      <span>
                        <BsExclamationCircle className={styles.exclaim} />
                      </span>
                    </Tippy>
                  </div>
                  {show11 && (
                    <select
                      className={styles.input}
                      id="flight"
                      name="flight"
                      autoComplete="off"
                      value={values.flight}
                      onChange={handleChange}
                    >
                      <option value="" disabled selected>
                        Traveled from flights
                      </option>
                      <option value="within state">Within State</option>
                      <option value="another country">Another Country</option>
                      <option value="another continent">
                        Another Continent
                      </option>
                    </select>
                  )}
                  <p style={{ color: 'red', fontSize: '15px' }}>
                    {errors.flight}
                  </p>
                </div>
              </li>
              <li>
                <div className={styles.content}>
                  <div
                    onClick={() => setShow12(!show12)}
                    className={`${show12 ? styles.h4 : styles.h3}`}
                  >
                    Do you recycle?{' '}
                    <input
                      type="checkbox"
                      id="recycles"
                      name="recycles"
                      value={values.recycles}
                      onChange={handleBool}
                    />{' '}
                    <Tippy
                      className={styles.tippy}
                      placement="bottom"
                      content={content.recycles}
                      arrow={false}
                    >
                      <span>
                        <BsExclamationCircle className={styles.exclaim} />
                      </span>
                    </Tippy>
                  </div>
                  {values.recycles ? (
                    <Multiselect
                      className={styles.Multiselect}
                      id="itemsRecycled"
                      name="itemsRecycled"
                      options={options}
                      displayValue="values"
                      value={values.itemsRecycled}
                      // onChange={handleOnchange}

                      placeholder="Enter Recyclable item "
                      style={{
                        chips: {
                          background: '#00bd57',
                        },
                        multiselectContainer: {
                          color: 'white',
                          margin: '-20px',
                          width: '100%'
                        },
                        highlightOption :{
                          background: '#142424',
                        },
                        optionContainer: {
                          background: '#142424',
                        },
                        searchBox: {
                          border: 'none',
                          'border-bottom': '2px solid #6d8299',
                          'border-radius': '0px',
                          'margin-top': '30px',
                          'margin-left': '20px',
                        },
                      }}
                    />
                  ) : (
                    ''
                  )}
                  <p style={{ color: 'red', fontSize: '15px' }}>
                    {errors.itemsRecycled}
                  </p>
                </div>
              </li>
            </ul>
            <div></div>

            <div className={styles.boxbutn}>
              <button className={styles.button}>Calculate &rarr;</button>
            </div>
          </form>
          <div className={styles.BodyRight}>
            <div className={styles.score}>
              <strong> Your Score</strong>
            </div>
            <div className={styles.ellipse}></div>
          </div>
        </div>
      </div>
    </>
  );
}
