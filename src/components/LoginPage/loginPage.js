import Image from "next/image";
import EnvImg from "/public/environment.png";
import React, { useState,useEffect } from "react";
import styles from "./login.module.css";
import Link from "next/link";
import { signIn } from "next-auth/react";
import { useRef } from "react";
import { useRouter } from "next/router";
import Signpop from "./signpo";

function Login() {
  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  const router = useRouter();
  const [selects, setSelects] = useState();
  const initialValues = { email: ""};
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const handleChange = (e) => {
    
    const { name, value } = e.target;
    
    setFormValues({ ...formValues, [name]: value });
   
  };
  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
    }
  }, [formErrors]);
  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.email) {
      errors.email = "Email is required!";
    } else if (!regex.test(values.email)) {
      errors.email = "Invalid email format!";
    }
    return errors;
  }
  async function submitHandler(e) {
    
    
    const email = emailInputRef.current.value;
    console.log(email);
    e.preventDefault();
    setFormErrors(validate(formValues));
    
    const password = passwordInputRef.current.value;
    
    setIsSubmit(true);
    const result = await signIn("credentials", {
      redirect: false,
      email: email,
      password: password,
    });
   
    console.log(result);
    if (!result.error) {
      // set some auth state
      selects == "individual"
        ? router.replace("/individual-dashboard")
        : router.replace("/organisation-dashboard");
    } else {
      console.log(result);
    }
  }
 
  const [detailPopup, setDetailPopup] = useState(false);

  return (
    <>
      <div className={styles.page}>
        {/* <nav className={styles.nav}>
          <div className={styles.navbar}>
           <Link href="/" passHref>
              <span className={styles.navbar}>Logo</span>
            </Link>
            <Link href="/" passHref>
              <span className={styles.home}>HOME</span>
            </Link>
            
          </div>
          <div className={styles.signup}>
            <button className={styles.btn} type="submit">SignUp</button>
          </div>
        </nav> */}
        <div className={styles.section}>
          <div className={styles.imgBx}>
            <div className={styles.img}>
              <Image className={styles.image} alt="" src={EnvImg} />
            </div>
            <div className={styles.inputBx}>
              <p>
                New User?{" "}
                <Link href="" passHref>
                <a
                onClick={(e) => setDetailPopup(true)}
                className={styles.button}
              >
                  <span className={styles.register}>Register Here!</span>
                  </a>
                </Link>
              </p>
            </div>
          </div>
          <div className={styles.contentBx}>
            <div className={styles.formBx}>
              <h2>Login</h2>
              <form onSubmit={submitHandler}>
                <div className={styles.inputBx}>
                  <span>Email</span>
                  <input
                    className={styles.input}
                    type="email"
                    name="email"
                    required
                    value={formValues.email}
              onChange={handleChange}
                    ref={emailInputRef}
                  />
                </div>
                <p style={{color: "red"}}>{formErrors.email}</p>
                <div className={styles.inputBx}>
                  <span>Password</span>
                  <input
                    className={styles.input}
                    type="password"
                    name=""
                    required
                    ref={passwordInputRef}
                  />
                </div>
                <select
                  className={styles.select}
                  onChange={(e) => setSelects(e.target.value)}
                >
                  <option disabled selected>
                    Choose Category
                  </option>
                  <option value="individual">Individual</option>
                  <option value="organisation">Organisation</option>
                </select>

                <p>
                  <Link href="/" passHref>
                    <span className={styles.forgot}>Forgot Password?</span>
                  </Link>
                </p>
                <div className={styles.remember}>
                  <label>
                    <input className={styles.input} type="checkbox" name="" />{" "}
                    Remember me
                  </label>
                </div>
                <div className={styles.inputBx}>
                  <botton
                    className={styles.input}
                    type="submit"
                    value="Log in"
                    name=""
                    onClick={submitHandler}
                  >
                    Login
                  </botton>
                </div>

                <h3>Or Login With</h3>
              </form>
              <ul className={styles.sci}>
                <li>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-google"
                    viewBox="0 0 16 16"
                  >
                    <path d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z" />
                  </svg>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <Signpop trigger={detailPopup} setTrigger={setDetailPopup} />
    </>
  );
}
export default Login;