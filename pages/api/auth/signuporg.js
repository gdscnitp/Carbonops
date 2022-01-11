
import initDB from "../../../helpers/db"
import { sendSuccess,sendError } from "../../../utilities/response-helpers"
//const {sendConfirmationMail} = require("./mailer")
var Org= require('../../../models/Organisation');
var PendAcc=require('../../../models/PendingAccount');



export default async function SignupOrg(req, res){
    const {email,password,contact,organisationId} = req.body

    try {
        if ((!email || !password || !contact) ||  !organisationId){
            return sendError(res,"Please fill all fields",11,422)
        }else
        {
            //add server side input validation
            initDB() 
            const regUser =  await Org.findOne({email})
            const pUserAcc = await PendAcc.findOne({email})//check if the user is existing also in the individual
            //collection and verified accounts collection
    
            if (regUser || pUserAcc) {
                return sendError(res,"User already exists",11,422)
            }
    
            const newAccount = await PendAcc({email,password,contact,organisationId})
            await newAccount.save()
            console.log("Saved to database.")
            //await sendConfirmationMail({toUser : newAccount.data, hash: newAccount.data._id})
            return sendSuccess(res,"Please check email for confirmation")
        }
       
    } catch (err) {
        console.log(err.message)
           return sendError(res, err.message,err.message,422);
    }

}