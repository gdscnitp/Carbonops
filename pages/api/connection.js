import initDB from "../../helpers/db"
import { sendSuccess,sendError } from "../../utilities/response-helpers"
import Individual from "../../models/Individual";



export default function handler(req, res) {
    if (req.method === 'POST') {
        var {name,email,contact}=req.body;
        password="7766940"
        initDB();
         const item=new Individual({
             name,email,contact,password
         })
         
         item.save()
         console.log(item);
         sendSuccess(res,item);
    } 
    else {
        sendSuccess(res,{"message": "This works"});
    }
  }