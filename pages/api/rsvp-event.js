import initDB from "../../helpers/db";
import mongoose from "mongoose";
import { sendSuccess, sendError } from "../../utilities/response-helpers";
import regEventSchema from "../../models/EventRegistered";
import Indiv from "../../models/Individual"

initDB();

export default async function handler(req, res) {
  if (req.method === "POST") {
    // console.log(req.body);

    const {
      eventId,
      mailId,
    } = req.body;

    if (
      !eventId ||
      !mailId 
    ) {
      return sendError(res, "All values not found", 2, 404);
    }

    var indivMail = {
      mail: { $eq: req.body.mailId },
    };
    // console.log( mailId , eventId )
    const alreadyRegistered = await regEventSchema.find({
     mailId:mailId,
     eventId :eventId
    });
    // console.log(alreadyRegistered,"alreadyRegistered");

    //checking if individual already exists in database
    const mailExists = await Indiv.findOne({ email: indivMail.mail });
    // console.log(mailExists,"mailExists");

    if(alreadyRegistered.length  <=0){
      const item = new regEventSchema({
      individualId:mailExists._id,
      eventId:eventId,
      name:mailExists.name,
      mailId:mailId,
      phoneNumber:mailExists.contact,
      });

      console.log(item);
      await item.save();
      //  console.log(item);
      // mongoose.connection.close();
      return sendSuccess(res, item);

  } 
  else{
    // return sendError(res, "Mail ID not found", 2, 404);
    return sendError(res, "already Registered for the event.", 0, 350);
  }
}
  else {
    return sendError(res, "Bad request(NOT POST)", 2, 400);
  }
}
