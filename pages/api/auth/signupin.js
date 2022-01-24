import initDB from "../../../helpers/db";
import { sendSuccess, sendError } from "../../../utilities/response-helpers";
import sendConfirmationMail from "../../../lib/mailer";
const Individual = require("../../../models/Individual");
const PendAcc = require("../../../models/PendingAccount");
const VerAcc = require("../../../models/VerifiedAcc");
const Org = require("../../../models/Organisation");
export var potentialIndividual;

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
    }
    else {
        console.log("invalid email id");
    }
    let re2 = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
    if(re2.test(req.body.password)){
      console.log("strong password");
    }
    else{
      console.log("weak password");
    }
    if(req.body.contact.length!=10){
      console.log("contact no. must have 10 digits");
    }
    else{
      console.log("valid contact no.");
    }
     


    //add server side input validation
    initDB();

    const regUser = await Individual.findOne({
      email: { $eq: req.body.email },
    });
    const pUserAcc = await PendAcc.findOne({ email: { $eq: req.body.email } });
    const orgAcc = await Org.findOne({ email: { $eq: req.body.email } });
    const verifAcc = await VerAcc.findOne({ email: { $eq: req.body.email } });

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
