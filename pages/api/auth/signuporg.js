import initDB from "../../../helpers/db"
import { sendSuccess,sendError } from "../../../utilities/response-helpers"
import sendConfirmationMail from "../../../lib/mailer"
var Org= require('../../../models/Organisation');
var PendAcc=require('../../../models/PendingAccount');
var VerAcc = require('../../../models/VerifiedAcc')
var Individual=require('../../../models/Individual')
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default async function SignupOrg(req, res){
    if(req.method==='POST')
    {    
        let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if ( re.test(req.body.email) ) {
            console.log("valid email id");
            toast.success("valid email id");
        }
        else {
            console.log("invalid email id");
            toast.error("invalid email id");
            return sendError(res,"Invalid Email ID",19,400);
        }
        let re2 = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
        if(re2.test(req.body.password)){
          console.log("strong password");
          toast.success("strong password");
        }
        else{
          console.log("weak password");
          toast.error("weak password");
          return sendError(res,"Weak Password",19,400);
        }
        if(req.body.contact.length!=10){
          console.log("contact no. must have 10 digits");
          toast.error("contact no. must have 10 digits");
          return sendError(res,"contact no. must have 10 digits",19,400);
        }
        else{
          console.log("valid contact no.");
          toast.success("valid contact no.");
        }
         
    
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