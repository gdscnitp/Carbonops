import initDB from "../../helpers/db"
import { sendSuccess,sendError } from "../../utilities/response-helpers"
import EventSc from "../../models/Event";

initDB();

export default async function handler(req,res){
    if(req.method==="GET"){
        const events= await EventSc.find({});
        res.send(events);
    }
    else {
        return sendError(res,"Bad rquest(NOT POST)",8,400);
    }

}

