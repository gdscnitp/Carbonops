import React, { useState } from "react";
import Image from "next/image";
import styles from "./CreateEvents.module.css";
import { useRouter } from "next/dist/client/router";

export default function CreateEvents() {
  const router = useRouter();

  const [values, setValues] = useState({
    eventName: "",
    eventDate: "",
    eventTime: "",
    eventLocation: "",
    enqNumber: "",
    eventType: "",
    audience: "",
    eventDescription: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (
      values.eventName.length > 0 &&
      values.eventLocation.length > 0 &&
      values.enqNumber.length > 0 &&
      values.audience.length > 0 &&
      values.eventDescription.length > 0
    ) {
      if (values.enqNumber.length === 10) console.log(values);
      else console.log("Phone no. must be 10 digit long");
    } else console.log("Please fill all values correctly");
  };

  return (
    <>
      <div className={styles.formBody}>
        <div className={styles.formLeft}>
          <div className={styles.heading}>
            <h1>Create your events in no time </h1>
          </div>
          <Image
            src={`/images/events/createEvent.png`}
            alt="Form Image"
            height={400}
            width={400}
          />
        </div>

        {/* ______________________________________  */}
        <div className={styles.formMid}>
          <form>
            <label
              className={`${styles.label} ${styles.eventName}`}
              htmlFor="eventName"
            >
              Your Event Title* <br />
              <input
                type="text"
                id="eventName"
                name="eventName"
                value={values.eventName}
                onChange={handleChange}
                required
                autoComplete="off"
              />{" "}
              <br />
            </label>

            <label className={styles.label} htmlFor="eventDate">
              Choose a date for your event* <br />
              <input
                type="date"
                id="eventDate"
                name="eventDate"
                value={values.eventDate}
                onChange={handleChange}
                required
                autoComplete="off"
              />{" "}
              <br />
            </label>

            <label className={styles.label} htmlFor="eventTime">
              Choose a time for your event* <br />
              <input
                type="time"
                id="eventTime"
                name="eventTime"
                value={values.eventTime}
                onChange={handleChange}
                required
                autoComplete="off"
              />{" "}
              <br />
            </label>

            <label
              className={`${styles.label} ${styles.eventLocation}`}
              htmlFor="eventLocation"
            >
              Enter event location (if offline)* <br />
              <textarea
                rows="2"
                type="text"
                id="eventLocation"
                name="eventLocation"
                value={values.eventLocation}
                onChange={handleChange}
                required
                autoComplete="off"
              />{" "}
              <br />
            </label>

            <label className={styles.label} htmlFor="enqNumber">
              Enter enquiry number* <br />
              <input
                type="number"
                id="enqNumber"
                name="enqNumber"
                value={values.enqNumber}
                onChange={handleChange}
                required
                autoComplete="off"
              />{" "}
              <br />
            </label>
          </form>
        </div>

        {/* __________________________________________ */}
        <div className={styles.formRight}>
          <form>
            <label className={styles.eventType} htmlFor="eventType">
              Type of event <br />
              <select
                className={styles.select}
                id="eventType"
                name="eventType"
                value={values.eventType}
                onChange={handleChange}
                required
                autoComplete="off"
              >
                <option value="Offline">Offline</option>
                <option value="Online">Online</option>
                <option value="Environmental">Environmental talks</option>
                <option value="carbon">Carbon Score</option>
              </select>
              <br />
            </label>

            <label className={styles.audience} htmlFor="audience">
              Specify audience limit* <br />
              <input
                type="number"
                id="audience"
                name="audience"
                value={values.audience}
                onChange={handleChange}
                required
                autoComplete="off"
              />{" "}
              <br />
            </label>

            <label
              className={styles.eventDescription}
              htmlFor="eventDescription"
            >
              Enter event description* <br />
              <textarea
                id="eventDescription"
                name="eventDescription"
                value={values.eventDescription}
                onChange={handleChange}
                required
                autoComplete="off"
                cols="40"
                rows="8"
              ></textarea>
              <br />
            </label>

            <label className={styles.poster} htmlFor="poster">
              Upload your event poster*
              <br />
              <input
                type="file"
                id="poster"
                name="poster"
                className={styles.customFileInput}
              />{" "}
              <br />
            </label>

            <div className={styles.buttons}>
              <a onClick={() => router.push("/events")}>Cancel</a>

              <a onClick={handleSubmit}>Add Event</a>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
