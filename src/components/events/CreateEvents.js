import React, { useState } from "react";
import Image from "next/image";
import styles from "./CreateEvents.module.css";
import { useRouter } from "next/dist/client/router";

export default function CreateEvents(props) {
  const router = useRouter();

//  const [posterFile, handleUpload]= useForm()
  const [values, setValues] = useState({
    eventName: "",
    eventType: "",
    eventDate: "",
    eventTime: "",
    eventDuration: "",
    eventPoster: "",
    targetAudience: "",
    eventLocation: "",
    participantsLimit: "",
    eventLocation: "",
    enquiryDetails: "",
    onOrgModel: "",
    eventDescription: "",
    isOffline: false,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setValues({
      ...values,
      [name]: value,
    });
  };

  console.log(values.isOffline , "isOffline change")

  const handleBool = (e) => {
    setValues({
      ...values,
      isOffline: !(values.isOffline),
    });
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(values.isOffline , "isOffline")
    console.log(values)
    props.onAddEvent(values);
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

        <div className={styles.formRight}>
          <form>
            <div className={styles.row}>
              <input
                className={`${styles.eventName}`}
                type="text"
                id="eventName"
                name="eventName"
                value={values.eventName}
                onChange={handleChange}
                required
                autoComplete="off"
                placeholder=" Your Event Name * "
              />
              <br />

              <select
                className={`${styles.select} ${styles.eventType}`}
                id="eventType"
                name="eventType"
                value={values.eventType}
                onChange={handleChange}
                required
                autoComplete="off"
              >
                <option value="" disabled>
                  Choose Event Type
                </option>
                <option value="Offline">Offline</option>
                <option value="Online">Online</option>
                <option value="Environmental Tasks">Environmental talks</option>
                <option value="Carbon Score">Carbon Score</option>
              </select>
              <br />
            </div>

            <div className={styles.row}>
              <input
                type="date"
                id="eventDate"
                name="eventDate"
                className={styles.eventDate}
                value={values.eventDate}
                onChange={handleChange}
                required
                autoComplete="off"
                placeholder="Choose a date for your event*"
              />

              <input
                type="time"
                id="eventTime"
                name="eventTime"
                className={styles.eventTime}
                value={values.eventTime}
                onChange={handleChange}
                required
                autoComplete="off"
                placeholder="Choose a time for your event*"
              />
            </div>

            <div className={styles.row}>
              <input
                type="number"
                id="eventDuration"
                name="eventDuration"
                className={styles.eventDuration}
                value={values.eventDuration}
                onChange={handleChange}
                required
                autoComplete="off"
                placeholder="Event Duration *"
              />

              <input
                type="url"
                id="eventPoster"
                name="eventPoster"
                className={styles.eventPoster}
                value={values.eventPoster}
                onChange={handleChange}
                placeholder="Upload your event poster *"
              />
            </div>
            <div className={styles.row}>
              <input
                type="text"
                id="targetAudience"
                name="targetAudience"
                className={styles.targetAudience}
                value={values.targetAudience}
                onChange={handleChange}
                required
                autoComplete="off"
                placeholder=" Specify target audience *"
              />

              <textarea
                id="eventDescription"
                name="eventDescription"
                className={styles.eventDescription}
                value={values.eventDescription}
                onChange={handleChange}
                required
                autoComplete="off"
                placeholder="Enter event description* "
                // cols="40"
                rows="8"
              ></textarea>
            </div>
            <div className={styles.row}>
              <input
                type="number"
                id="participantsLimit"
                name="participantsLimit"
                className={styles.participantsLimit}
                value={values.participantsLimit}
                onChange={handleChange}
                required
                autoComplete="off"
                placeholder=" Participants limit*"
              />


              <input
                type="number"
                id="enquiryDetails"
                name="enquiryDetails"
                className={styles.enquiryDetails}
                value={values.enquiryDetails}
                onChange={handleChange}
                required
                autoComplete="off"
                placeholder="Enter enquiry number*"
              />


            </div>

            <div className={styles.row}>


              <select
                className={styles.onOrgModel}
                id="onOrgModel"
                name="onOrgModel"
                value={values.onOrgModel}
                onChange={handleChange}
                required
                autoComplete="off"
              >
                <option value="" disabled>
                  Select Category
                </option>
                <option value="individual">Individual</option>
                <option value="organisation">Organisation</option>
              </select>
              <br />
            </div>


            <div className={styles.row}>

            <label htmlFor="isOfflineBool" className={styles.label}>
                Is event offline ?
                <input
                  type="checkbox"
                  id="isOffline"
                  name="isOffline"
                  value={values.isOffline}
                  onChange={handleBool}
                />
              </label>

              {values.isOffline ? (
                <textarea
                  rows="2"
                  type="text"
                  id="eventLocation"
                  name="eventLocation"
                  className={styles.eventLocation}
                  value={values.eventLocation}
                  onChange={handleChange}
                  required
                  autoComplete="off"
                  placeholder="Enter event location *"
                />
              ) : (
                ""
              )}
            </div>
            
            
            <div className={styles.row}>
              <div className={styles.buttons}>
                <a onClick={() => router.push("/events")}>Cancel</a>

                <a onClick={handleSubmit}>Add Event</a>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

