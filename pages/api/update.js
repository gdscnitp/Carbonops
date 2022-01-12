import mongoose from 'mongoose';
import initDB from "../../helpers/db";
const PendAcc=require('../../models/PendingAccount')
const VerifiedAcc = require('../../models/VerifiedAcc')
import { sendError,sendSuccess } from '../../utilities/response-helpers';

export default async function updateRecords(req,res) {
    const {id}=req.body;
    console.log(id)
    initDB()
    var account = await  PendAcc.findById(id);
    console.log(account)

    let accType = (account.dob === undefined) ? "Organisation" : "Individual"
    console.log(accType)

    let isOrganisation = (accType === "Individual") ? false : true
    //adding to verified
    //var k = isOrganisation? account.organisationId: account.dob;
    var {email,password,contact,dob,organisationId}=account;
    // console.log(email)
    // console.log(password)
    // console.log(contact)
    // console.log(dob)
    const verifiedAccount = await VerifiedAcc({email,password,contact,dob,organisationId,isOrganisation});
     await verifiedAccount.save();
    return sendSuccess(res,"Successfully saved in verified acoounts")
    // //Remove from pending accounts
    // let info=await PendAcc.deleteOne({_id : id});
    // console.log(info);
}