import initDB from "../../helpers/db"
import mongoose from 'mongoose'
import { sendSuccess,sendError } from "../../utilities/response-helpers"
import organisationSchema from "../../models/Organisation";

initDB();

export default async function handler(req, res) {
    if (req.method === 'GET') {
        console.log(req.body)

        //data to be displayed on organisation dashboard
        const {organisationName , mailId , contact ,area ,city ,state , pincode , nation ,dealsProducts, wasteRequirements , linkedin , website , type }=req.body;

          if(!organisationName || !mailId || !contact || !area || !city || !state || !pincode || !nation || !linkedin || !website || !type) {
            return sendError(res,"Please provide all values properly",11,404)
          }

              const item=new organisationSchema({ 
                organisationName:organisationName ,
                mailId:mailId ,
                contact:contact ,  
                location:{
                  area:area,
                  city:city,
                  state:state,
                  pincode:pincode,
                  nation:nation,
               },
                dealsProducts,
                wasteRequirements:wasteRequirements , 
                linkedin:linkedin , 
                website:website ,
                type:type
               })

                    console.log(item)
                    await item.save();
                    //  console.log(item);
                  mongoose.connection.close();
                    return sendSuccess(res,item);
      }

      else {
        return sendError(res,"Bad rquest(NOT GET)",8,400);
    }

}

