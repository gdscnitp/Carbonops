import initDB from "../../helpers/db"
import mongoose from 'mongoose'
import { sendSuccess,sendError } from "../../utilities/response-helpers"
import EventSc from "../../models/Event";

  initDB();

export default async function handler(req, res) {
  if (req.method === 'POST') {
    console.log(req.body)

    const {eventDate,eventTime,eventDuration,eventPoster,eventName,eventType,targetAudience,eventDescription,participantsLimit,isOffline,location,enquiryDetails,organiserId,onOrgModel}=req.body;

      if (!eventName || !eventType || !eventDate || !eventTime || !eventDuration || !eventPoster || !targetAudience || !eventDescription || !participantsLimit || !isOffline || !enquiryDetails || !onOrgModel) {
        return sendError(res,"Please provide all values",11,404)
    }
     const eventDetails = {eventDate,eventTime,eventDuration,eventPoster}

    if (isOffline===true &&  location){
    // if (isOffline===true &&  location ? item['location'] = location : ""){
      return sendError(res, "Please provide event's location",11,404);
    }

    const item=new EventSc({
      eventName,eventType,eventDetails,targetAudience,eventDescription,participantsLimit,isOffline,enquiryDetails,organiserId,onOrgModel
    })

          location ? item['location'] = location : "";
          console.log(item)
          await item.save();
          //  console.log(item);
          mongoose.connection.close();
          return sendSuccess(res,item);

  }

  else {
    return sendError(res,"Bad rquest(NOT POST)",8,400);
}


}

