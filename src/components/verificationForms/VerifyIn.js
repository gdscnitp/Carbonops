import React, { useState } from "react";
import styles from "./InForm.module.css";
import Router from "next/router";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

  const customId = "custom-id-yes";


  const notify = (string, type) =>
      toast(string, {
        type,
      }, {
        toastId: customId
      },
    );

export default function VerifyIn(props) {
  console.log(props.id);
  var id = props.id;
  console.log("====================");
  const [inProfValues, setinProfValues] = useState({
    id,
    individualName: "",
    areaName: "",
    cityName: "",
    stateName: "",
    pincode: "",
    countryName: "",
    occupation: "",
    facebook: "",
    linkedin: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setinProfValues({
      ...inProfValues,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(inProfValues);
    const res = await fetch("http://localhost:3000/api/indprofilecomp/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        inProfValues,
      }),
    });
    const resp = await res.json();
    notify(resp.message, 'error');

    if (resp.error || resp.success == false) {
      console.log(resp);
      notify(resp, 'error');
    } else {
      console.log(resp);
      notify(resp, 'success');
      notify("Saved individual successfully", 'success');
      console.log("Saved individual successfully");
      //redirect to login page

      Router.push(`/login`);
    }
    // if (
    //    inProfValues.cityName.length > 0 &&
    //    inProfValues.pincode.length > 0 &&
    //    inProfValues.occupation.length > 0 &&
    //    inProfValues.linkedin.length > 0 &&
    //    inProfValues.eventDescription.length > 0
    // } else console.log("Please fill all values correctly");
  };

  return (
    <>
       <ToastContainer
        toastStyle={{ backgroundColor:"rgba(23, 48, 51, 1)",
        color:"#fff",
        border:"1px solid #0d551f",
        boxSizing:"border-box",
        boxShadow:"0.5px 0.5px 1px 1px #c9e1e1",
        borderRadius:"5px", }}
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover/>

      <div className={styles.formBody}>
        <h1
          style={{
            color: "#54CCFA",
            textAlign: "center",
            marginBottom: "1rem",
          }}
        >
          Please complete your profile before proceeding further!
        </h1>
        <div className={styles.formIn}>
          <form>
            <input
              className={`${styles.input} `}
              type="text"
              placeholder="Your Name *"
              id="individualName"
              name="individualName"
              value={inProfValues.individualName}
              onChange={handleChange}
              required
              autoComplete="off"
            />
            <br />
            <input
              className={`${styles.input} `}
              type="text"
              placeholder="Your Area *"
              id="areaName"
              name="areaName"
              value={inProfValues.areaName}
              onChange={handleChange}
              required
              autoComplete="off"
            />
            <br />
            <input
              className={`${styles.input} `}
              type="text"
              placeholder="Your City Name *"
              id="cityName"
              name="cityName"
              value={inProfValues.cityName}
              onChange={handleChange}
              required
              autoComplete="off"
            />
            <br />
            <input
              className={`${styles.input} `}
              type="text"
              placeholder="Your State Name *"
              id="stateName"
              name="stateName"
              value={inProfValues.stateName}
              onChange={handleChange}
              required
              autoComplete="off"
            />
            <br />
            <input
              className={`${styles.input} `}
              type="number"
              placeholder="Your Pincode *"
              id="pincode"
              name="pincode"
              value={inProfValues.pincode}
              onChange={handleChange}
              required
              autoComplete="off"
            />
            <br />
            <input
              className={`${styles.input} `}
              type="text"
              placeholder="Your Country Name *"
              id="countryName"
              name="countryName"
              value={inProfValues.countryName}
              onChange={handleChange}
              required
              autoComplete="off"
            />
            <br />
            <input
              className={`${styles.input} `}
              type="text"
              placeholder="Your Occupation *"
              id="occupation"
              name="occupation"
              value={inProfValues.occupation}
              onChange={handleChange}
              required
              autoComplete="off"
            />
            <br />
            <input
              className={`${styles.input} `}
              type="url"
              placeholder="Your Facebook Profile"
              id="facebook"
              name="facebook"
              value={inProfValues.facebook}
              onChange={handleChange}
              required
              autoComplete="off"
            />
            <br />
            <input
              className={`${styles.input} `}
              type="url"
              placeholder="Your Linkedin Profile"
              id="linkedin"
              name="linkedin"
              value={inProfValues.linkedin}
              onChange={handleChange}
              required
              autoComplete="off"
            />
            <br />
            <label htmlFor="poster" className={styles.posterLabel}>
              Upload your profile picture
              <input
                type="file"
                id="poster"
                name="poster"
                className={styles.customFileInput}
              />
            </label>
            <br />

            <div className={styles.button}>
              <a onClick={handleSubmit}> Save Details</a>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

// export function getServerSideProps(props) {
//   console.log(props)
//   return {
//     props:{
//        id
//     }
//   }
// }
