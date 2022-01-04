import initDB from "../../helpers/db"
import { sendSuccess,sendError } from "../../utilities/response-helpers"

//var Individual= require("../../models/Individual");
var Test=require("../../models/test")
//console.log(Individual)
initDB();
export default async function handler(req, res) {
    if (req.method === 'POST') {
        var {name,email,contact}=req.body;
        //var password="7766940"
        
         var item=new Test({
             name,email,contact
         })
         
          await item.save();
         console.log(item);
         return sendSuccess(res,item);
    } 
    else {
        sendSuccess(res,{"message": "This works"});
    }
  }