import styles from "./Signup.module.css";
import React, { useRef } from "react";

async function createUser(email,password,contact,inputCustomSignup)
{
  const response = await fetch('/api/auth/signup', {
    method: 'POST',
    body: JSON.stringify({ email, password,contact,inputCustomSignup }),
    headers: {
      'Content-Type': 'application/json',
    }})
    const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || 'Something went wrong!');
  }

  return data;
}
export default function Sign(props) {
  
  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  const dependentInputRef=useRef();
  const contactInputRef=useRef();

  async function SubmitHandler(event)
  {
    event.preventDefault();
    const email=emailInputRef.current.value;
    const password=passwordInputRef.current.value;
    const inputCustomSignup=dependentInputRef.current.value;
    const contact=contactInputRef.current.value;

    const result=await createUser(email,password,contact,inputCustomSignup)
    console.log(result);
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
                  Already {props.text1}?<a href="#">Login Now!</a>
                </p>
              </div>
            </div>
          </div>
          <forms className={styles.formss} onSubmit={SubmitHandler}>
            <div className={styles.contentBx}>
              <div className={styles.formBx}>
                <h2>SIGNUP</h2>
                <div className={styles.bx}>
                  <p>
                    Join us in our<a href="#">Green Journey!</a>
                  </p>
                </div>
                <form>
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
                    <input type={props.text3} name="" placeholder={props.text2} required ref={dependentInputRef}/>
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
