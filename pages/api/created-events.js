import initDB from "../../helpers/db"
import mongoose from 'mongoose'
import { sendSuccess,sendError } from "../../utilities/response-helpers"
import EventSc from "../../models/Event";

initDB();
  
export default async function handler(req, res) {
  if (req.method === 'POST') {
    console.log(req.body)
    
    const {eventDate,eventTime,eventDuration,eventPoster,eventName,eventType,targetAudience,eventDescription,participantsLimit,isOffline,eventLocation,enquiryDetails,onOrgModel}=req.body;

      if (!eventName || !eventType || !eventDate || !eventTime || !eventDuration || !eventPoster || !targetAudience || !eventDescription || !participantsLimit  || !enquiryDetails || !onOrgModel) {
        return sendError(res,"Please provide all values",11,404)
    }

    if (isOffline===true &&  eventLocation.length<=0){
      return sendError(res, "Please provide event's location",11,404);
    }

        var eveName={
          name: {$eq:req.body.eventName}
      }
   //checking if event already exists in database
   const nameExists = await EventSc.findOne({eventName:eveName.name})
      console.log(nameExists); 

       if (!nameExists) {
          const item=new EventSc({
            eventName:eventName,eventType:eventType,eventDetails:{date:eventDate,time:eventTime ,duration:eventDuration , poster:eventPoster},targetAudience:targetAudience,eventDescription:eventDescription,participantsLimit:participantsLimit,isOffline:isOffline,enquiryDetails:enquiryDetails,onOrgModel,location:eventLocation,
          })

          eventLocation ? item['eventLocation'] = eventLocation : "";
                console.log(item)
                await item.save();
                //  console.log(item);
              // mongoose.connection.close();
                return sendSuccess(res,item);
      }
      else{
      return sendError(res, "Event with this name is already registered",10,403);
        
      }
  }

  else {
    return sendError(res,"Bad rquest(NOT POST)",8,400);
}

}

