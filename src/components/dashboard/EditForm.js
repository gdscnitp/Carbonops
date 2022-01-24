import styles from './EditForm.module.css';

import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { FaCamera } from 'react-icons/fa';
import { FaAngleLeft } from 'react-icons/fa';

export default function EditForm(props) {
  const router = useRouter();

  const [values, setValues] = useState({
    name: '',
    occupation: '',
    location: '',
    phone: '',
    dateofLastReport: '',
    areaName: '',
    cityName: '',
    stateName: '',
    pincode: '',
    countryName: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  return props.trigger ? (
    <>
      <div className={styles.editformBody}>
        <div className={styles.container}>
          {/*_________________________________ */}
          <div className={styles.LeftArrow}>
            <a
              onClick={() => {
                props.setTrigger(false);
              }}
            >
              <FaAngleLeft style={{ color: '#00bd57', fontSize: '35px' }} />
            </a>
          </div>

          {/*_________________________________ */}

          <div className={styles.heading}>
            <h1>Edit</h1>
          </div>
          <div className={styles.profileImage}>
            <span className={styles.ellipse}>
              <FaCamera
                style={{ color: 'rgba(0, 0, 0,0.5)', fontSize: '35px' }}
              />
            </span>
            <label className={styles.imagefile} htmlFor="poster">
              <p className={styles.text}>Profile Image </p>
              <input
                type="file"
                id="imageInput"
                name="imageInput"
                accept="image/png,image/jpg"
              />
            </label>
          </div>

          <div className={styles.Form}>
            <form>
              <label className={styles.label} htmlFor="name">
                <p className={styles.text}> Name</p>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={values.Name}
                  onChange={handleChange}
                  required
                  autoComplete="off"
                />
              </label>
             {/* add occupation chnage field */}
              <label className={styles.label} htmlFor="occupation">
                <p className={styles.text}>Occupation</p>
                <input
                  type="text"
                  id="occupation"
                  name="occupation"
                  value={values.occupation}
                  onChange={handleChange}
                  required
                  autoComplete="off"
                />
              </label>

              <label className={styles.label} htmlFor="area">
                <p className={styles.text}>Area</p>
                <input
                  type="text"
                  id="areaName"
                  name="areaName"
                  value={values.areaName}
                  onChange={handleChange}
                  required
                  autoComplete="off"
                />
              </label>
              <label className={styles.label} htmlFor="city">
                <p className={styles.text}>City</p>
                <input
                  type="text"
                  id="cityName"
                  name="cityName"
                  value={values.cityName}
                  onChange={handleChange}
                  required
                  autoComplete="off"
                />
              </label>
              <label className={styles.label} htmlFor="state">
                <p className={styles.text}>State</p>
                <input
                  type="text"
                  id="stateName"
                  name="stateName"
                  value={values.stateName}
                  onChange={handleChange}
                  required
                  autoComplete="off"
                />
              </label>
              <label className={styles.label} htmlFor="pincode">
                <p className={styles.text}>Pincode</p>
                <input
                  type="number"
                  id="pincode"
                  name="pincode"
                  value={values.pincode}
                  onChange={handleChange}
                  required
                  autoComplete="off"
                />
              </label>
              <label className={styles.label} htmlFor="country">
                <p className={styles.text}>Country</p>
                <input
                  type="text"
                  id="countryName"
                  name="countryName"
                  value={values.countryName}
                  onChange={handleChange}
                  required
                  autoComplete="off"
                />
              </label>
              <label className={styles.label} htmlFor="phone">
                <p className={styles.text}>Phone</p>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={values.Phone}
                  onChange={handleChange}
                  required
                  autoComplete="off"
                />
              </label>

              {/* <label className={styles.label} htmlFor="dateofLastReport">
                <p className={styles.text}>Date of Last Report</p>
                <input
                  type="date"
                  id="dateLastReport"
                  name="dateLastReport"
                  value={values.DateLastReport}
                  onChange={handleChange}
                  required
                  autoComplete="off"
                />
              </label> */}
              <div className={styles.buttons}>
                <a>Save</a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  ) : (
    ''
  );
}
