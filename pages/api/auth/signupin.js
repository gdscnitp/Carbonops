import initDB from "../../../helpers/db";
import { sendSuccess, sendError } from "../../../utilities/response-helpers";
import sendConfirmationMail from "../../../lib/mailer";
const Individual = require("../../../models/Individual");
const PendAcc = require("../../../models/PendingAccount");
const VerAcc = require("../../../models/VerifiedAcc");
const Org = require("../../../models/Organisation");
export var potentialIndividual;
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default async function SignupIn(req, res) {
  //const {email,password,contact,dob} = req.body
  //potentialIndividual = req.body

  console.log(req.body);
  try {
    if (
      !req.body.email ||
      !req.body.password ||
      !req.body.contact ||
      !req.body.dob
    ) {
      return sendError(res, "Please fill all fields", 11, 422);
    }

    let re1 = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if ( re1.test(req.body.email) ) {
     
        console.log("valid email id");
        toast.error("valid email id");
    }
    else {
      console.log("invalid email id");
      return sendError(res,"Invalid Email ID",19,400);
        
    }
    let re2 = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
    if(re2.test(req.body.password)){
      console.log("strong password");
      toast.success("strong password");
    }
    else{
      console.log("weak password");
      toast.error("weak password");
      return sendError(res,"Weak Password",19,400);
      
    }
    if(req.body.contact.length!=10){
      console.log("contact no. must have 10 digits");
      toast.error("contact no. must have 10 digits");
      return sendError(res,"contact no. must have 10 digits",19,400);
    }
    else{
      toast.error("valid contact no.");
      console.log("valid contact no.");
    }
     


    //add server side input validation

    initDB();

    const regUser = await Individual.findOne({
      email: { $eq: req.body.email },
    });
    const pUserAcc = await PendAcc.findOne({ email: { $eq: req.body.email } });
    const orgAcc = await Org.findOne({ mailId: { $eq: req.body.email } });
    const verifAcc = await VerAcc.findOne({ email: { $eq: req.body.email }});

    if (regUser || pUserAcc || orgAcc || verifAcc) {
      /*checking if the user is existing also in the organisation collection and verified accounts collection*/
      //console.log(orgAcc)//here organisation is returned that is why it is giving error that account already exists
      return sendError(res, "Account already exists", 11, 422);
    } else {
      const newAccount = await PendAcc({
        email: req.body.email,
        password: req.body.password,
        contact: req.body.contact,
        dob: req.body.dob,
      });
      await newAccount.save();
      console.log("Saved to database.");
      var result = await sendConfirmationMail(newAccount.email, newAccount._id);

      return sendSuccess(res, newAccount);
    }
  } catch (err) {
    console.log(err.message);
    return sendError(res, err.message, err.message, 422);
  }
}
