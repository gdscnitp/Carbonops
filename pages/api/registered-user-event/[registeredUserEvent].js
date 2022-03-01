import initDB from "../../../helpers/db"
import { sendSuccess,sendError } from "../../../utilities/response-helpers"
import regEventSchema from "../../../models/EventRegistered";
import EventSc from "../../../models/Event";

export default async function handler(req,res){
//   console.log(req.query);

    if(req.method==="GET"){
        initDB();
        const mailId = req.query.registeredUserEvent;

        const registeredUser= await regEventSchema.find({mailId :mailId});
        // console.log(registeredUser,"registeredUser");
   
        for (const eveId in registeredUser){
            // console.log(registeredUser[eveId].eventId ,"[eveId].eventId ");
            const eventSearch = registeredUser[eveId].eventId;
            const eventSearchReturn = await EventSc.findById(eventSearch)
            // console.log(eventSearchReturn,"eventSearchReturn")
            if(eventSearchReturn){
                return sendSuccess(res, eventSearchReturn);
            }
                else{
                    return sendError(res,"Could not fetch Registration Details",3,403);
           }
        }          

    }
    else {
        return sendError(res,"Bad request(NOT GET)",2,400);
    }
}

