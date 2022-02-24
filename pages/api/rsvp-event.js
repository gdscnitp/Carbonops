import initDB from "../../helpers/db";
import mongoose from "mongoose";
import { sendSuccess, sendError } from "../../utilities/response-helpers";
import regEventSchema from "../../models/EventRegistered";
import Indiv from "../../models/Individual"

initDB();

export default async function handler(req, res) {
  if (req.method === "POST") {
    console.log(req.body);

    const {
      individualId,
      eventId,
      name,
      mailId,
      phoneNumber,
    } = req.body;

    if (
      !individualId ||
      !eventId ||
      !name ||
      !mailId ||
      !phoneNumber
    ) {
      return sendError(res, "All values not found", 2, 404);
    }

    var indivMail = {
      mail: { $eq: req.body.mailId },
    };

    //checking if individual already exists in database
    const mailExists = await Indiv.findOne({ email: indivMail.mail });
    // console.log(mailExists,"mailExists");

    if(mailExists){
      const item = new regEventSchema({
      individualId:individualId,
      eventId:eventId,
      name:name,
      mailId:mailId,
      phoneNumber:phoneNumber,
      });

      console.log(item);
      await item.save();
      //  console.log(item);
      // mongoose.connection.close();
      return sendSuccess(res, item);

  } 
  else{
    return sendError(res, "Mail ID not found", 2, 404);
  }
}
  else {
    return sendError(res, "Bad request(NOT POST)", 2, 400);
  }
}
