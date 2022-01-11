
import initDB from "../../../helpers/db"
import { sendSuccess,sendError } from "../../../utilities/response-helpers"
import sendConfirmationMail from "../../../lib/mailer"
var Individual=require('../../../models/Individual')
var PendAcc=require('../../../models/PendingAccount')
var Org = require('../../../models/Organisation')
var VerAcc = require('../../../models/VerifiedAcc')
// import { Mongoose } from "mongoose"



export default async function SignupIn (req, res) {
    const {email,password,contact,dob} = req.body
   
    console.log(req.body)
   try{
    if ((!email || !password || !contact) || !dob ) {
        return sendError(res,"Please fill all fields",11,422)
    }

    //add server side input validation
    initDB() 
    
    const regUser =  await Individual.findOne({email})
    const pUserAcc = await PendAcc.findOne({email})
    const orgAcc = await Org.findOne({email})
    const verifAcc = await VerAcc.findOne({email})
    // console.log(regUser)
    // console.log(pUserAcc)
    // console.log(orgAcc)
    // console.log(verifAcc)
    if (regUser || pUserAcc || orgAcc || verifAcc) {
        /*checking if the user is existing also in the organisation collection and verified accounts collection*/
        return sendError(res,"Account already exists",11,422)
    }else
    {
        const newAccount = await PendAcc({email,password,contact,dob})
        await newAccount.save()
        console.log("Saved a pending acc to database")
        // console.log(newAccount);
        
        await sendConfirmationMail(newAccount.email,  newAccount._id)
         return sendSuccess(res,newAccount)
    }
 
   }catch(err){
       
           console.log(err.message)
           return sendError(res, err.message,err.message,422);  
   }
}