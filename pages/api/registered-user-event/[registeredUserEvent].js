import initDB from "../../../helpers/db"
import { sendSuccess,sendError } from "../../../utilities/response-helpers"
import regEventSchema from "../../../models/EventRegistered";
import EventSc from "../../../models/Event";

export default async function handler(req,res){

    if(req.method==="GET"){
        initDB();
        var indivMail = {
            mail: { $eq: req.query.registeredUserEvent },
          };

        const registeredUser= await regEventSchema.find({mailId :indivMail.mail});
        // console.log(registeredUser,"registeredUser");
   

        if(registeredUser.length>0){
            return sendSuccess(res, registeredUser);
        }
            else{
                return sendError(res,"Could not fetch Registration Details",3,403);
       }
    }
    else {
        return sendError(res,"Bad request(NOT GET)",2,400);
    }
}

