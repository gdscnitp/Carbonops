import initDB from "../../helpers/db";
const PendAcc=require('../../models/PendingAccount')
const VerifiedAcc = require('../../models/VerifiedAcc')
import { sendError,sendSuccess } from '../../utilities/response-helpers';

export default async function updateRecords(req,res) {
    if (req.method === 'PUT') {

        const {id}=req.body;
        initDB()
        var account = await  PendAcc.findById({id:{$eq:id}});
        {
            if(!account)
            return sendError(res,"User already verified or does not exists",11,422)
        }
        
        let accType = (account.dob === undefined) ? "Organisation" : "Individual"
        console.log(accType)
        
        let isOrganisation = (accType === "Individual") ? false : true
        
        //adding to verified
        var {email,password,contact,dob,organisationId}=account;
        
        const verifiedAccount = await VerifiedAcc({email:{$eq:email},password:{$eq:password},contact:{$eq:contact},dob:{$eq:dob},organisationId:{$eq:organisationId},isOrganisation:{$eq:isOrganisation}});
        await verifiedAccount.save();
        
        // //Remove from pending accounts
        let info=await PendAcc.deleteOne({_id : id});
        //info is delete info in form of delete count
        console.log(info);
        return  sendSuccess(res,isOrganisation) 
        
    }
}