//A file to check all APIS
import mongoose from 'mongoose'
import initDB from "../../helpers/db"
import { sendSuccess,sendError } from "../../utilities/response-helpers"
//var Individual= require("../../models/Individual");
//var Test=require("../../models/test")
// var Otpwd =require("../../models/Otp")
// var Indiv =require("../../models/Individual")
 var Org =require("../../models/Organisation")
//var EventSc =require("../../models/Event")
// var EventRegSc =require("../../models/EventRegistered")
//var proSc =require("../../models/Product")
// var scoresc =require("../../models/Score")
//console.log(proSc)

export default async function handler(req, res) {
    if (req.method === 'POST') {
        console.log(req.body)

        //for event
        // var {eventName,eventType,eventDetails,location,targetAudience,eventDescription,participantsLimit,isOffline,enquiryDetails,organiserId,onOrgModel}=req.body;
        //var {name,email,contact}=req.body;
        //for registered event
        //var {individualId,eventId,name,mailId,phoneNumber}=req.body;

        //for products
        //var {organisationId,productName,price,description,productImage,rating,stockUnits,isRecyclable,productUrl} = req.body;

        //for score
        // var {individualId} = req.body;

        //for organisation
        var {
           organisationId,organisationName,mailId,password,contact,description,location,wasteRequirements,dealsProducts,linkedin,website,type
        }=req.body;

        initDB();
        //var {name,email,password,contact,address,dob,occupation,linkedin,facebook,profileImage}=req.body;

         var item=new Org({
          //eventName,eventType,eventDetails,targetAudience,eventDescription,participantsLimit,isOffline,enquiryDetails,organiserId,onOrgModel
          //name,email,password,contact,address,dob,occupation,linkedin,facebook,profileImage
          //for org
          organisationId,organisationName,mailId,password,contact,description,location,wasteRequirements,dealsProducts,linkedin,website,type
        })

         //IMP For Event Schema 
        //location ? item['location'] = location : ""

         console.log(item)
          await item.save();
        //  console.log(item);
        //mongoose.connection.close();
         return sendSuccess(res,item);
    } 
    else {
        return sendSuccess(res,{"message": "This works"});
    }
  }