import initDB from '../../helpers/db'
import { sendError,sendSuccess } from '../../utilities/response-helpers';
var Org =require("../../models/Organisation")
var VerAcc = require("../../models/VerifiedAcc")

export default async function OrgProfileCompletion(req, res){
    if (req.method === "POST"){

        initDB()
        const {dealsBool,orgProfValues} = req.body
        const {_id,organisationName,
        typeOfOrganisation,
        areaName,
        cityName,
        stateName,
        countryName,
        pincode,
        wasteRequirements,
        websiteLink,
        linkedin,} = orgProfValues
            console.log(orgProfValues)
            
            //checking if id exists in verified account or not
            var idExists = await VerAcc.find({_id:{$exists:true}})
            console.log(idExists);
            if (idExists !== null) {
             const {email,password,contact,organisationId} = idExists   
             
             try {
                 if (!organisationName || !typeOfOrganisation || !areaName || !cityName || !stateName || !pincode || !countryName  || !websiteLink || !linkedin) {
                     return sendError(res,"Please fill all fields",11,422)
                    }
                    
                    
                    const newOrganisation = await  new Org({
                        organisationId, organisationName,mailId:email,password,contact:contact,                        
                        location:{area:areaName,city:cityName,state:stateName,pincode,nation:countryName},wasteRequirements,dealsProducts:dealsBool,linkedin,
                        website:websiteLink,type:typeOfOrganisation
                    }).save()
                    if (newOrganisation) return sendSuccess(res, newOrganisation)
                    else return sendError(res, err.message,err.message,422);
                } catch (err) {
                    console.log(err.message)
                    return sendError(res, err.message,err.message,422); 
                }
            }else{
                return sendError(res,"Such id not exists in verified accounts",18,700)
            }
    }
}
