
import initDB from "../../../helpers/db"

import { sendSuccess,sendError } from "../../../utilities/response-helpers"
var Individual= require("../../../models/Individual");

export default async function handler(req,res){
if (req.method === 'GET') {
    try {
        
        var userMail = req.query.usermail
        initDB()
        const currentUser =  await Individual.findOne({ email: { $eq: userMail} })
        console.log(currentUser);
        return sendSuccess(res,currentUser);
    } catch (error) {
        return sendError(res,error,9,400)
    }
  }
    
}