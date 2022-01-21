import styles from "./Signup.module.css";
import React, { useRef,useState,useEffect } from "react";
import Notification from '../Notifications/notification'

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
export default function Sign() {
  
  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  const dobInputRef=useRef();
  const contactInputRef=useRef();
  const [enteredEmail, setEnteredEmail] = useState('');
  const [enteredContact, setEnteredContact] = useState('');
  const [enteredDOB, setEnteredDOB] = useState('');
  const [enteredPasswordone,setEnteredPasswordone] = useState('');
  const [enteredPasswordtwo,setEnteredPasswordtwo] = useState('');
  const [requestStatus, setRequestStatus] = useState(); // 'pending', 'success', 'error'
  const [requestError, setRequestError] = useState();

  useEffect(() => {
    if (requestStatus === 'success' || requestStatus === 'error') {
      const timer = setTimeout(() => {
        setRequestStatus(null);
        setRequestError(null);
      }, 3000);
      return() => clearTimeout(timer);
    }
  },[requestStatus]);

  async function SubmitHandler(event)
  {
    event.preventDefault();
    
    setRequestStatus('pending');

    const email=emailInputRef.current.value;
    const password=passwordInputRef.current.value;
    const dob=dobInputRef.current.value;
    const contact=contactInputRef.current.value;
    
    try{
      await createUser({
        email: enteredEmail,
        password: enteredPassword,
        contact: enteredContact,
        dob: enteredDOB,
      });
      setRequestStatus('success');
      setEnteredEmail('');
      setEnteredPasswordone('');
      setEnteredPasswordtwo('');
      setEnteredDOB('');
      setEnteredContact('');
    } catch(error){
      setRequestError(error.message);
      setRequestStatus('error');
    }

    const result=await createUser(email,password,contact,dob)
    if(result)
    {
      console.log("successful signup");
    }
    else
    {
      console.log("Could not signup as individual")
    }
  }

  let notification;

  if (requestStatus === 'pending') {
    notification = {
      status: 'pending',
      title: 'Sending message...',
      message: 'Your message is on its way!',
    };
  }

  if (requestStatus === 'success') {
    notification = {
      status: 'success',
      title: 'Success!',
      message: 'Message sent successfully!',
    };
  }

  if (requestStatus === 'error') {
    notification = {
      status: 'error',
      title: 'Error!',
      message: requestError,
    };
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
                  Already an User?<a href="#">Login Now!</a>
                </p>
              </div>
            </div>
          </div>
          <forms className={styles.formss}  >
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
                      value={enteredEmail}
                      onChange={(event)=> setEnteredEmail(event.target.value)}
                    />
                  </div>
                  <div className={styles.inputBxx}>
                    <input 
                    type="number" 
                    name="" 
                    placeholder="Contact" 
                    required 
                    ref={contactInputRef}
                    value={enteredContact}
                    onChange={(event)=> setEnteredContact(event.target.value)}
                    />  
                  </div>
                  <div className={styles.inputBx}>
                    <input 
                    type="date" 
                    name="" 
                    placeholder="Date of Birth" 
                    required 
                    ref={dobInputRef}
                    value={enteredDOB}
                    onChange={(event)=> setEnteredDOB(event.target.value)}
                    />
                  </div>
                  <div className={styles.inputBx}>
                    <input 
                    type="password" 
                    name="" 
                    placeholder="Password" 
                    required 
                    ref={passwordInputRef}
                    value={enteredPasswordone}
                    onChange={(event)=> setEnteredPasswordone(event.target.value)}
                    />
                  </div>
                  <div className={styles.inputBx}>
                    <input
                      type="password"
                      name=""
                      placeholder="Confirm Password"
                      value={enteredPasswordtwo}
                      onChange={(event)=> setEnteredPasswordtwo(event.target.value)}
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
          {notification && (
            <Notification
                status= {notification.status}
                title= {notification.title}
                message={notification.message}
              />
          )}
        </section>
      </signup>
    </div>
  );
}
