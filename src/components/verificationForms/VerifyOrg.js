import React, { useState } from "react";
import styles from "./OrgForm.module.css";

export default function VerifyOrg() {
  const [dealsBool, setDealsBool] = useState(false);

  const [orgProfValues, setOrgProfValues] = useState({
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
    if (resp.error){
     console.log(resp.error);
    }else{
      console.log(resp);
      console.log("Saved organisation successfully")
  }
  };

  return (
    <div>
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
