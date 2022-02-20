import React, { useState } from "react";
import styles from "./OrgForm.module.css";
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

export default function VerifyOrg(props) {
  console.log(props.id);
  var id = props.id;
  console.log("====================");
  const [dealsBool, setDealsBool] = useState(false);

  const [orgProfValues, setOrgProfValues] = useState({
    id,
    organisationName: "",
    typeOfOrganisation: "",
    areaName: "",
    cityName: "",
    stateName: "",
    countryName: "",
    pincode: "",
    wasteRequirements: "",
    websiteLink: "",
    linkedin: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setOrgProfValues({
      ...orgProfValues,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(orgProfValues);
    const res = await fetch("http://localhost:3000/api/orgprofilecomp/", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        dealsBool,
        orgProfValues
      })
    })
    const resp = await res.json()
    notify(resp.message, 'error');
    if (resp.error || resp.success==false){
      console.log(resp);
      notify(resp, 'error');
    }else{
      console.log(resp);
      notify(resp, 'success');
      notify("Saved organisation successfully", 'success');
      console.log("Saved organisation successfully")
      Router.push(`/login`);
  }
  };

  return (
    <div>
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
        <div className={styles.formOrg}>
          <form>
            <input
              className={`${styles.input} `}
              type="text"
              placeholder="Your Organisation Name *"
              id="organisationName"
              name="organisationName"
              value={orgProfValues.organisationName}
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
              value={orgProfValues.areaName}
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
              value={orgProfValues.cityName}
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
              value={orgProfValues.stateName}
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
              value={orgProfValues.pincode}
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
              value={orgProfValues.countryName}
              onChange={handleChange}
              required
              autoComplete="off"
            />
            <br />

            <div className={styles.dealsCheckbox}>
              <label htmlFor="deals">
                Deals in waste products?
                <input
                  id="deals"
                  type="checkbox"
                  value={dealsBool}
                  onClick={() => {
                    setDealsBool(!dealsBool);
                  }}
                />
              </label>
              <br />
            </div>

            {dealsBool ? (
              <>
                <input
                  className={`${styles.input} `}
                  type="text"
                  placeholder="Waste Requirements *"
                  id="wasteRequirements"
                  name="wasteRequirements"
                  value={orgProfValues.wasteRequirements}
                  onChange={handleChange}
                  required
                  autoComplete="off"
                />
                <br />
              </>
            ) : (
              ""
            )}

            <input
              className={`${styles.input} `}
              type="url"
              placeholder="Your Website Link *"
              id="websiteLink"
              name="websiteLink"
              value={orgProfValues.websiteLink}
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
              value={orgProfValues.linkedin}
              onChange={handleChange}
              required
              autoComplete="off"
            />
            <br />

            <select
              className={styles.select}
              id="typeOfOrganisation"
              name="typeOfOrganisation"
              value={orgProfValues.typeOfOrganisation}
              onChange={handleChange}
              required
              autoComplete="off"
            >
              <option value="" disabled>
                Select your Organisation type
              </option>
              <option  className={styles.option} value="Cooperatives">Cooperatives</option>
              <option className={styles.option} value="Self help groups">Self help groups</option>
              <option className={styles.option} value="Private">Private </option>
            </select>
            <br />

            <br />

            <div className={styles.button}>
              <a onClick={handleSubmit}> Save Details</a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
