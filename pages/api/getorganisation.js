import initDB from "../../helpers/db"
import { sendSuccess,sendError } from "../../utilities/response-helpers"
import Org from "../../models/Organisation";

export default async function handler(req,res){
    if(req.method==="GET"){
        initDB();
        // const organisations= await Org.find({}).limit(3);
        const organisations= await Org.find({})
       return sendSuccess(res,organisations);
    }
    else {
        return sendError(res,"Bad request(NOT POST)",2,400);
    }

}


