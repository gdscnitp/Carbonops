import styles from "./Signup.module.css";
import React, { useRef } from "react";
import Notification from '../Notifications/notification'


async function createUser(email,password,contact,organisationId)
{
  const response = await fetch('/api/auth/signuporg', {
    method: 'POST',
    body: JSON.stringify({email: email, password:password,contact:contact,organisationId:organisationId }),
    headers: {
      'Content-Type': 'application/json',
    }})
    const data = await response.json();

  if (!response.ok) {
    // throw new Error(data.message || 'Something went wrong!');
    console.log("something went wrong")
  }

  return data;
}
export default function Sign(props) {
  
  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  const organisationIdInputRef=useRef();
  const contactInputRef=useRef();
  const [enteredEmail, setEnteredEmail] = useState('');
  const [enteredPassword,setEnteredPassword] = useState('');
  const [enteredId, setEnteredId] = useState('');
  const [enteredContact, setEnteredContact] = useState('');
  
  useEffect(() => {
    if (requestStatus === 'success' || requestStatus === 'error') {
      const timer = setTimeout(() => {
        setRequestStatus(null);
        setRequestError(null);
      }, 3000);

      return () => clearTimeout(timer);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [requestStatus]);

  async function SubmitHandler(event)
  {
    event.preventDefault();
    const email=emailInputRef.current.value;
    const password=passwordInputRef.current.value;
    const organisationId=organisationIdInputRef.current.value;
    const contact=contactInputRef.current.value;
    setRequestStatus('pending');

    try{
      await createUser({
        email: enteredEmail,
        password: enteredPassword,
        contact: enteredContact,
        organisationId: enteredId,
      });
      setRequestStatus('success');
      setEnteredEmail('');
      setEnteredId('');
      setEnteredContact('');
      setEnteredPassword('');
    } catch(error) {
      setRequestError(error.message);
      setRequestStatus('error');
    }

    const result=await createUser(email,password,contact,organisationId)
    if(result)
    {
      console.log("successfully signed up")
    }
    else
    {
      console.log("Could not sign you as an organisation")
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
                  Already Registered?<a href="#">Login Now!</a>
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
                      value={enteredEmail}
                      onChange={(event) => setEnteredEmail(event.target.value)}
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
                      onChange={(event) => setEnteredContact(event.target.value)}
                      />  
                  </div>
                  <div className={styles.inputBx}>
                    <input 
                    type="number" 
                    name="" 
                    placeholder="Organisation ID" 
                    required 
                    ref={organisationIdInputRef}
                    value={enteredId}
                    onChange={(event) => setEnteredId(event.target.value)}
                    />
                  </div>
                  <div className={styles.inputBx}>
                    <input 
                    type="password" 
                    name="" 
                    placeholder="Password"
                    required 
                    ref={passwordInputRef}
                    value={enteredPassword}
                    onChange={(event) => setEnteredPassword(event.target.value)}
                    />
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
          {notification && (
          <Notification
            status={notification.status}
            title={notification.title}
            message={notification.message}
          />
      )}
        </section>
      </signup>
    </div>
  );
}
