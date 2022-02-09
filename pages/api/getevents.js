import initDB from "../../helpers/db"
import { sendSuccess,sendError } from "../../utilities/response-helpers"
import EventSc from "../../models/Event";



export default async function handler(req,res){
    if(req.method==="GET"){
        initDB();
        const events= await EventSc.find({});
        
        return sendSuccess(res, events);
    }
    else {
        return sendError(res,"Bad request(NOT POST)",1,400);
    }
}                                             