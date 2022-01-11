
import initDB from "../../../helpers/db"
import { sendSuccess,sendError } from "../../../utilities/response-helpers"
import sendConfirmationMail from "../../../lib/mailer"
var Org= require('../../../models/Organisation');
var PendAcc=require('../../../models/PendingAccount');
var VerAcc = require('../../../models/VerifiedAcc')
var Individual=require('../../../models/Individual')



export default async function SignupOrg(req, res){
    const {email,password,contact,organisationId} = req.body

    try {
        if (!email || !password || !contact ||  !organisationId){
            return sendError(res,"Please fill all fields",11,422)
        }else
        {
            //add server side input validation
            initDB() 
            const regUser =  await Org.findOne({email})
            const pUserAcc = await PendAcc.findOne({email})
            const IndiAcc = await Individual.findOne({email})
            const verifAcc = await VerAcc.findOne({email})
            console.log(regUser)
            console.log(pUserAcc)
            console.log(IndiAcc)
            console.log(verifAcc)
            //check if the user is existing also in the individual
            //collection and verified accounts collection
    
            if (regUser || pUserAcc || IndiAcc || verifAcc) {
                /*checking if the user is existing also in the organisation collection and verified accounts collection*/
                return sendError(res,"Account already exists",11,422)
            }else
            {
                const newAccount = await PendAcc({email,password,contact,organisationId})
                await newAccount.save()
                console.log("Saved a pending acc to database")
                await sendConfirmationMail(email,  newAccount._id)
                 return sendSuccess(res,newAccount)
            }
        }
       
    } catch (err) {
        console.log(err.message)
           return sendError(res, err.message,err.message,422);
    }

}