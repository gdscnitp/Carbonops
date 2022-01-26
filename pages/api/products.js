//A file to check all APIS
import mongoose from 'mongoose'
import initDB from "../../helpers/db"
import { sendSuccess,sendError } from "../../utilities/response-helpers"
var proSc =require("../../models/Product")
// console.log(proSc)

export default async function handler(req, res) {
    if (req.method === 'POST') {
        console.log(req.body)

        // for products
        var {organisationId,productName,price,description,productImage,rating,stockUnits,isRecyclable,productUrl} = req.body;

        initDB();
      var prod=new proSc({organisationId,productName,price,description,productImage,rating,stockUnits,isRecyclable,productUrl})

         console.log(prod)
          await prod.save();
        mongoose.connection.close();
        
         return sendSuccess(res,prod);
    } 
    else {
        return sendSuccess(res,{"message": "This works"});
    }
  }