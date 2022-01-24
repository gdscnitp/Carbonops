import initDB from "../../../helpers/db"
import { sendSuccess,sendError } from "../../../utilities/response-helpers"
import sendConfirmationMail from "../../../lib/mailer"
var Org= require('../../../models/Organisation');
var PendAcc=require('../../../models/PendingAccount');
var VerAcc = require('../../../models/VerifiedAcc')
var Individual=require('../../../models/Individual')



export default async function SignupOrg(req, res){
    if(req.method==='POST')
    {    

    try {
        if (!req.body.email || !req.body.password || !req.body.contact ||  !req.body.organisationId){
            return sendError(res,"Please fill all fields",11,422)
        }else
        {
            //add server side input validation
            initDB() 
            const regUser =  await Org.findOne({mailId:{$eq:req.body.email}})
            const pUserAcc = await PendAcc.findOne({email:{$eq:req.body.email}})
            const IndiAcc = await Individual.findOne({email:{$eq:req.body.email}})
            const verifAcc = await VerAcc.findOne({email:{$eq:req.body.email}})
            
            //check if the user is existing also in the individual
            //collection and verified accounts collection
    
            if (regUser || pUserAcc || IndiAcc || verifAcc) {
                /*checking if the user is existing also in the organisation collection and verified accounts collection*/
                return sendError(res,"Account already exists",11,422)
            }else
            {
                const newAccount = await PendAcc({email:req.body.email,password:req.body.password,contact:req.body.contact,organisationId:req.body.organisationId})
                await newAccount.save()
                console.log("Saved a pending acc to database")
                await sendConfirmationMail(newAccount.email,  newAccount._id)
                 return sendSuccess(res,newAccount)
            }
        }
       
        } catch (err) {
            console.log(err.message)
            return sendError(res, err.message,err.message,422);
        }
    }
    else
    {
        return;
    }
    

}