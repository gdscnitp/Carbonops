import initDB from "../../../helpers/db";
import { sendSuccess, sendError } from "../../../utilities/response-helpers";
//const {sendConfirmationMail} = require("../../../lib/mailer")
const Individual = require("../../../models/Individual");
const PendAcc = require("../../../models/PendingAccount");
//import { Mongoose } from "mongoose"

export default async function SignupIn(req, res) {
  const { email, password, contact, dob } = req.body;
  //console.log("fetched api")
  console.log(req.body);
  try {
    if (!email || !password || !contact || !dob) {
      return sendError(res, "Please fill all fields", 11, 422);
    }

    //add server side input validation
    initDB();

    const regUser = await Individual.findOne({ email });
    const pUserAcc = await PendAcc.findOne({ email });
    console.log(regUser);
    console.log(pUserAcc);
    if (regUser || pUserAcc) {
      //check if the user is existing also in the organisation collection and verified
      //accounts collection.
      return sendError(res, "User already exists", 11, 422);
    } else {
      const newAccount = await PendAcc({ email, password, contact, dob });
      await newAccount.save();
      console.log("Saved to database.");
      // await sendConfirmationMail({toUser : newAccount.data, hash: newAccount.data._id})
      return sendSuccess(res, newAccount);
    }
  } catch (err) {
    console.log(err.message);
    return sendError(res, err.message, err.message, 422);
  }
}
