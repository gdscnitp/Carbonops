import initDB from "../../helpers/db"
import mongoose from 'mongoose'
import { sendSuccess,sendError } from "../../utilities/response-helpers"
import EventSc from "../../models/Event";

  initDB();

export default async function handler(req, res) {
  if (req.method === 'POST') {
    console.log(req.body)

    const {eventName,eventType,eventDetails,targetAudience,eventDescription,participantsLimit,isOffline,location,enquiryDetails,organiserId,onOrgModel}=req.body;


    const item=new EventSc({
      eventName,eventType,eventDetails,targetAudience,eventDescription,participantsLimit,isOffline,location,enquiryDetails,organiserId,onOrgModel
    })
        console.log(item)
        await item.save();
      //  console.log(item);
      mongoose.connection.close();
      return sendSuccess(res,item);
  }

  else {
    return sendSuccess(res,{"message": "This works"});
}


}

