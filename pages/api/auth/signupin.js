
import initDB from "../../../helpers/db"
import { sendSuccess,sendError } from "../../../utilities/response-helpers"
import sendConfirmationMail from "../../../lib/mailer"
const Individual=require('../../../models/Individual')
const PendAcc=require('../../../models/PendingAccount')
const VerAcc=require('../../../models/VerifiedAcc')
const Org=require('../../../models/Organisation')
export var potentialIndividual;



export default async function SignupIn (req, res) {
    const {email,password,contact,dob} = req.body
    potentialIndividual = req.body
   
    console.log(req.body)
   try{
    if ((!email || !password || !contact) || !dob ) {
        return sendError(res,"Please fill all fields",11,422)
    }

    //add server side input validation
    initDB() 
    
    const regUser =  await Individual.findOne({email:{$eq:email}})
    const pUserAcc = await PendAcc.findOne({email:{$eq:email}})
    const orgAcc = await Org.findOne({email:{$eq:email}})
    const verifAcc = await VerAcc.findOne({email:{$eq:email}})
    
    if (regUser || pUserAcc || orgAcc || verifAcc) {
        /*checking if the user is existing also in the organisation collection and verified accounts collection*/
        return sendError(res,"Account already exists",11,422)
    }else
    {
        const newAccount = await PendAcc({email:{$eq:email},password:{$eq:password},contact:{$eq:contact},dob:{$eq:dob}})
        await newAccount.save()
        console.log("Saved to database.")
      //  console.log(newAccount)
        var result = await sendConfirmationMail(email,  newAccount._id)
         return sendSuccess(res,newAccount)
    }
   }catch(err){
           console.log(err.message)
           return sendError(res, err.message,err.message,422);  
   }
}