import styles from "./Signup.module.css";
import React, { useRef } from "react";
import Link from 'next/link';
import Router from "next/router";

async function createUser(email,password,contact,dob)
{
  const response =await  fetch('/api/auth/signupin', {
    method: 'POST',
    body: JSON.stringify({ email:email, password:password,contact:contact,dob:dob }),
    headers: {
      'Content-Type': 'application/json',
    }})
    //console.log(response)
    const data = response.json();
    //console.log(data)
  if (!response.ok) {
    console.log("Error occured")
    //throw new Error(data.message || 'Something went wrong!');
  }

  // return data;
  return data;
}
export default function Sign(props) {
  
  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  const dobInputRef=useRef();
  const contactInputRef=useRef();

  async function SubmitHandler(event)
  {
    event.preventDefault();
    const email=emailInputRef.current.value;
    const password=passwordInputRef.current.value;
    const dob=dobInputRef.current.value;
    const contact=contactInputRef.current.value;

      
  
    const result=await createUser(email,password,contact,dob)
    if(result)
    {
      console.log("successful signup");
      Router.push("/activate/user/checkMail");
    }
    else
    {
      console.log("Could not signup as individual")
    }
  }
  return (
    <div className={styles.container}>
      <signup className={styles.signu}>
        <section className={styles.section}>
          <div className={styles.left}>
            <div className={styles.imgBx}>
              <div className={styles.img}>
                <pic className={styles.pics}></pic>
              </div>
              <div className={styles.inputBx}>
                <p>
                  Already an User?<Link href="./login">Login Now!</Link>
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
                    <input type="date" name="" placeholder="Date of Birth" required ref={dobInputRef}/>
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
                    <input type="submit" value="SignUp" name="" />

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
