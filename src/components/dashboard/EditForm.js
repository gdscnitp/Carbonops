import styles from './EditForm.module.css';

import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { FaCamera } from 'react-icons/fa';
import { FaAngleLeft } from 'react-icons/fa';

export default function EditForm(props) {
  const router = useRouter();

  const [values, setValues] = useState({
    Name: '',
    Email: '',
    Location: '',
    Phone: '',
    DateofLastReport: '',
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
            <FaCamera style={{color: 'rgba(0, 0, 0,0.5)', fontSize: '35px'}}/>
            </span>
            <label className={styles.imagefile} htmlFor="poster">
             <p className={styles.text}>Profile Image </p> 
              <input
                type="file"
                id="imageInput"
                name="imageInput"
                accept="image/png,image/jpg"
                className="btn btn-primary"
              />{' '}
              <br />
            </label>
          </div>

          <div className={styles.Form}>
            <form>
              <label className={styles.label} htmlFor="Name">
              <p className={styles.text}> Name</p>
                <input
                  type="text"
                  id="Name"
                  name="Name"
                  value={values.Name}
                  onChange={handleChange}
                  required
                  autoComplete="off"
                />{' '}
                <br />
              </label>

              <label className={styles.label} htmlFor="Email">
              <p className={styles.text}>Email</p>
                <input
                  type="email"
                  id="email"
                  name="Email"
                  value={values.Email}
                  onChange={handleChange}
                  required
                  autoComplete="off"
                />{' '}
                <br />
              </label>

              <label className={styles.label} htmlFor="Location">
              <p className={styles.text}>Location</p>
                <textarea
                  rows="2"
                  type="text"
                  id="Location"
                  name="Location"
                  value={values.Location}
                  onChange={handleChange}
                  required
                  autoComplete="off"
                />{' '}
                <br />
              </label>

              <label className={styles.label} htmlFor="Phone">
              <p className={styles.text}>Phone</p>
                <input
                  type="number"
                  id="phone"
                  name="phone"
                  value={values.Phone}
                  onChange={handleChange}
                  required
                  autoComplete="off"
                />{' '}
                <br />
              </label>

              <label className={styles.label} htmlFor="DateofLastReport">
              <p className={styles.text}>Date of Last Report</p>
                <input
                  type="date"
                  id="DateLastReport"
                  name="DateLastReport"
                  value={values.DateLastReport}
                  onChange={handleChange}
                  required
                  autoComplete="off"
                />{' '}
                <br />
              </label>
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
