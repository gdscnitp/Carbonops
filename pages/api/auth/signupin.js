import initDB from "../../../helpers/db";
import { sendSuccess, sendError } from "../../../utilities/response-helpers";
import sendConfirmationMail from "../../../lib/mailer";

import { contactCheck, emailCheck, passwordCheck } from "../../../utilities/validation";


const Individual = require("../../../models/Individual");
const PendAcc = require("../../../models/PendingAccount");
const VerAcc = require("../../../models/VerifiedAcc");
const Org = require("../../../models/Organisation");
export var potentialIndividual;

export default async function SignupIn(req, res) {
  //const {email,password,contact,dob} = req.body
  //potentialIndividual = req.body

 // console.log(req.body);
  try {
    if (
      !req.body.email ||
      !req.body.password ||
      !req.body.contact ||
      !req.body.dob
    ) {
      return sendError(res, "Please fill all fields",2, 404);
    }
          // server side input validation
           var emailChecked=emailCheck(req.body.email);
            var passwordChecked=passwordCheck(req.body.password);
            var contactChecked=contactCheck(req.body.contact)
            if(emailChecked===false)
            {
                return sendError(res,"Invalid Email ID",1,400)
            }
            if(passwordChecked===false)
            {
                 return sendError(res,"Weak Password",1,400);
            }
            if(contactChecked===false)
            {
                return sendError(res,"Contact no. must have 10 digits",1,400);
            }


   
    initDB();

    const regUser = await Individual.findOne({
      email: { $eq: req.body.email },
    });
    const pUserAcc = await PendAcc.findOne({ email: { $eq: req.body.email } });
    const orgAcc = await Org.findOne({ mailId: { $eq: req.body.email } });
    const verifAcc = await VerAcc.findOne({ email: { $eq: req.body.email }});

    if (regUser || pUserAcc || orgAcc || verifAcc) {
      //console.log(regUser,pUserAcc,orgAcc,verifAcc)
      return sendError(res, "Account already exists", 1, 403);
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
    return sendError(res, err.message, 1, 422);
  }
}
