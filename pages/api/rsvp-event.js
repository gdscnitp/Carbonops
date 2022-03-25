import initDB from "../../helpers/db";
import mongoose from "mongoose";
import { sendSuccess, sendError } from "../../utilities/response-helpers";
import regEventSchema from "../../models/EventRegistered";
import Indiv from "../../models/Individual"
import EventSc from "../../models/Event";


initDB();

export default async function handler(req, res) {
  if (req.method === "POST") {
   // console.log(req.body);

    const {
      eventId,
      mailId,
    } = req.body;
   //console.log(eventId,mailId)
    if (
      !eventId ||
      !mailId 
    ) {
      return sendError(res, "All values not found", 2, 404);
    }
   //console.log("req.body",req.body.mailId,req.body.eventId)
    var indivMail = {
      mail: { $eq: req.body.mailId },
      eve: { $eq: req.body.eventId }
    };
    // console.log(indivMail)
    // // console.log( mailId , eventId )
    //console.log("indiv mail",indivMail.eve,indivMail.mail)
    const alreadyRegistered = await regEventSchema.find({
     mailId:  {$eq: req.body.mailId},
     eventId: {$eq: req.body.eventId }
    });

    
    //checking if individual already exists in database
    const mailExists = await Indiv.findOne({ email: {$eq: req.body.mailId} });
    const eveExists = await EventSc.findById({_id:req.body.eventId });
    //console.log(mailExists,eveExists)
    if(!mailExists)
    {
      return sendError(res,"Individual does not exists",3,403);
    }
    if(!eveExists)
    {
      return sendError(res,"no such event exists",2,403);
    }

    if(alreadyRegistered.length  <=0){
      const item = new regEventSchema({
      individualId:mailExists._id,
      eventId:eventId,
      name:mailExists.name,
      mailId:mailId,
      phoneNumber:mailExists.contact,
      eventName:eveExists.eventName,
      eventDate:eveExists.eventDetails[0].date,
      eventTime:eveExists.eventDetails[0].time,
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
