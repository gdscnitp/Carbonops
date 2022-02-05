import initDB from "../../helpers/db"
import { sendSuccess,sendError } from "../../utilities/response-helpers"
import ProSc from "../../models/Product";



export default async function handler(req,res){
    if(req.method==="GET"){
        initDB();
        const products= await ProSc.find({"organisationId":req.body.OrgId});
        
        return sendSuccess(res, products);
    }
    else {
        return sendError(res,"Bad rquest(NOT POST)",8,400);
    }
}           