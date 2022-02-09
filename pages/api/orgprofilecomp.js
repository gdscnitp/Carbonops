import initDB from '../../helpers/db'
import { sendError,sendSuccess } from '../../utilities/response-helpers';
var Org =require("../../models/Organisation")
var VerAcc = require("../../models/VerifiedAcc")

export default async function OrgProfileCompletion(req, res){
    if (req.method === "POST"){

        initDB()
        const {dealsBool,orgProfValues} = req.body
        const {id,organisationName,
        typeOfOrganisation,
        areaName,
        cityName,
        stateName,
        countryName,
        pincode,
        wasteRequirements,
        websiteLink,
        linkedin} = orgProfValues
            console.log(orgProfValues)
            const userId={
                id: {$eq:id}
            }
            
            //checking if id exists in verified account or not
            var idExists = await VerAcc.findById(userId.id)
            console.log(idExists);
            if (idExists !== null) {
             const {email,password,contact,organisationId,isOrganisation} = idExists  
             
             try {
                 if (!organisationName || !typeOfOrganisation || !areaName || !cityName || !stateName || !pincode || !countryName  || !websiteLink || !linkedin) {
                     return sendError(res,"Please fill all fields",2,404)
                    }
                    
                    
                    const newOrganisation = await  new Org({
                        organisationId, organisationName,mailId:email,password,contact,                        
                        location:{area:areaName,city:cityName,state:stateName,pincode,nation:countryName},wasteRequirements,dealsProducts:dealsBool,linkedin,
                        website:websiteLink,type:typeOfOrganisation
                    }).save()
                    if (newOrganisation) return sendSuccess(res, newOrganisation)
                    else return sendError(res, "could not create new Organisation",1,422);
                } catch (err) {
                    console.log(err.message)
                    return sendError(res, err.message,1,422); 
                }
            }else{
                return sendError(res,"Such id not exists in verified accounts",1,700)
            }
    }
}
