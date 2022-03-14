import CreateEvents from '../src/components/events/CreateEvents';
import Navbar from '../src/components/navbar/Navbar';
import { navLinks } from '../src/components/utils/data';
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

export default function Events() {
  async function onAddEventHandler(values) {
    const response = await fetch('/api/created-events', {
      method: 'POST',
      body: JSON.stringify(values),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const data = await response.json();
    console.log(data);
    notify(data.message, 'error');
  }

  return (
    <>
      <Navbar
        action2={navLinks[0].name}
        href2={navLinks[0].link}
        action1={navLinks[1].name}
        href1={navLinks[1].link}
        buttonText1=""
        buttonText2=""
        buttonText3=""
        buttonText4=""
      />
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

      <CreateEvents onAddEvent={onAddEventHandler} />
    </>
  );
}
