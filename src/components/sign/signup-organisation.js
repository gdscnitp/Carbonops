import styles from "./Signup.module.css";
import React, { useRef } from "react";
import Link from 'next/link';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

async function createUser(email,password,contact,organisationId)
{
  const response = await fetch('/api/auth/signuporg', {
    method: 'POST',
    body: JSON.stringify({email: email, password:password,contact:contact,organisationId:organisationId }),
    headers: {
      'Content-Type': 'application/json',
    }})
    const data = await response.json();
  console.log(response)
  console.log(data)
  if (!response.ok) {
    // throw new Error(data.message || 'Something went wrong!');
    console.log("something went wrong");
    toast.error(data.message);
    return false;
  }

  return data;
}
export default function Sign(props) {
  
  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  const organisationIdInputRef=useRef();
  const contactInputRef=useRef();

  async function SubmitHandler(event)
  {
    event.preventDefault();
    const email=emailInputRef.current.value;
    const password=passwordInputRef.current.value;
    const organisationId=organisationIdInputRef.current.value;
    const contact=contactInputRef.current.value;

    const result=await createUser(email,password,contact,organisationId)
    if(result)
    {
      console.log("successfully signed up");
      toast.success("Successfully Signed Up");
    }
    else
    {
      toast.error("Could not sign you as an organisation");
      console.log("Could not sign you as an organisation");
    }
  }
  return (
    <div className={styles.container}>
      <ToastContainer/>
      <signup className={styles.signu}>
        <section className={styles.section}>
          <div className={styles.left}>
            <div className={styles.imgBx}>
              <div className={styles.img}>
                <pic className={styles.pics}></pic>
              </div>
              <div className={styles.inputBx}>
                <p>
                  Already Registered?<Link href="./login">Login Now!</Link>
                </p>
              </div>
            </div>
          </div>
          <forms className={styles.formss} >
            <div className={styles.contentBx}>
              <div className={styles.formBx}>
                <h2>SIGNUP</h2>
                <div className={styles.bx}>
                  <p>
                    Join us in our<a href="#">Green Journey!</a>
                  </p>
                </div>
                <form onSubmit={SubmitHandler}>
                  <div className={styles.inputBx}>
                    <input
                      className={styles.email}
                      type="email"
                      name=""
                      placeholder="Email"
                      required
                      ref={emailInputRef}//email id
                    />
                  </div>
                  <div className={styles.inputBxx}>
                    <input type="number" name="" placeholder="Contact" required ref={contactInputRef}/>  
                  </div>
                  <div className={styles.inputBx}>
                    <input type="number" name="" placeholder="Organisation ID" required ref={organisationIdInputRef}/>
                  </div>
                  <div className={styles.inputBx}>
                    <input type="password" name="" placeholder="Password" required ref={passwordInputRef}/>
                  </div>
                  <div className={styles.inputBx}>
                    <input
                      type="password"
                      name=""
                      placeholder="Confirm Password"
                    />
                  </div>
                  <div className={styles.remember}>
                    <label>
                      <input type="checkbox" name="" /> Remember me
                    </label>
                  </div>
                  <div className={styles.inputBx}>
                    <button type="submit"  name="">SignUp</button>
                  </div>
                </form>
              </div>
            </div>
          </forms>
        </section>
      </signup>
    </div>
  );
}

