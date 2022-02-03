import styles from './EditForm.module.css';

import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { FaCamera } from 'react-icons/fa';
import { FaAngleLeft } from 'react-icons/fa';



export default function EditForm(props) {
  const router = useRouter();
  const currentUserMail= "palakkumari404@gmail.com"
  const [values, setValues] = useState({
    userName: '',
    occupation: '',
    location: '',
    contact: '',
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


  const handleSubmit = async (event) => {
    event.preventDefault()   
    console.log(values)
    const addressObj = {area:areaName.value,city:cityName.value,state:stateName.value,pincode:pincode.value,nation:countryName.value}
    const toUpdate = {name:userName.value,occupation:occupation.value,contact:contact.value,email:currentUserMail,
      address:addressObj
    }
    console.log(toUpdate);
    const res = await fetch("http://localhost:3000/api/updateindprof/", {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(toUpdate)
    })
    const resp = await res.json()
    if (resp.error || resp.success==false){
     console.log(resp);
    }else{
      console.log(resp);
      console.log("Updated individual profile successfully")
  }
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
              <label className={styles.label} htmlFor="userName">
                <p className={styles.text}> Name</p>
                <input
                  type="text"
                  id="userName"
                  name="userName"
                  value={values.userName}
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
              <label className={styles.label} htmlFor="contact">
                <p className={styles.text}>contact</p>
                <input
                  type="tel"
                  id="contact"
                  name="contact"
                  value={values.contact}
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
              <a onClick={handleSubmit}> Save</a>
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
