import initDB from "../../helpers/db";
const PendAcc=require('../../models/PendingAccount')
const VerifiedAcc = require('../../models/VerifiedAcc')
import { sendError,sendSuccess } from '../../utilities/response-helpers';

export default async function updateRecords(req,res) {
    if (req.method === 'PUT') {

       var userId={
           id: {$eq:req.body.id}
       }
        initDB()
        //check if the user is already in verified accounts then send error.

        var account = await  PendAcc.findById(userId.id);
        
        if(!account)
        return sendError(res,"User already verified or does not exists",11,422)
        
        
        let accType = (account.dob === undefined) ? "Organisation" : "Individual"
        console.log(accType)
        
        let isOrganisation = (accType === "Individual") ? false : true
        
        //adding to verified
        var {email,password,contact,dob,organisationId}=account;
        //console.log(account);
        const verifiedAccount = await VerifiedAcc({email,password,contact,dob,organisationId,isOrganisation});
        await verifiedAccount.save();
        console.log("saved to verified accounts")
        // //Remove from pending accounts
        let info=await PendAcc.deleteOne({_id : {$eq:req.body.id}});
        //info is delete info in form of delete count
        console.log(info);
        return  sendSuccess(res,isOrganisation) 
        
    }
}