import initDB from "../../../helpers/db"
import { sendSuccess,sendError } from "../../../utilities/response-helpers"
import ProSc from "../../../models/Product";


export default async function Handler(req,res){
    if(req.method==="GET"){
       const getproduct=req.query.getproduct
     
        initDB();
       
        // check whether the given org id is existing in the database
        const products= await ProSc.find({"organisationId":{$eq:getproduct}});
        if(products.length===0)
        {
            return sendError(res,"No product found",3,404)
        }
        return sendSuccess(res, products);
    }
    else {

        return sendError(res,"Bad request(NOT POST)",2,400);
    }
}                                             
