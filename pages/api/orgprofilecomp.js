import initDB from '../../helpers/db'
import { sendError,sendSuccess } from '../../utilities/response-helpers';
var Org =require("../../models/Organisation")

export default async function OrgProfileCompletion(req, res){
    if (req.method === "POST"){

        initDB()
        const {dealsBool,orgProfValues} = req.body
        const {organisationName,
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
            
            
            try {
                if (!organisationName || !typeOfOrganisation || !areaName || !cityName || !stateName || !pincode || !countryName  || !websiteLink || !linkedin) {
                    return sendError(res,"Please fill all fields",11,422)
                }


                const newOrganisation = await  new Org({
                    organisationId:"HSFH784HD", organisationName,mailId:"ittu.shovit@gmail.com",password:"testdscTenv*$app123",contact:"6203732732",                        
                    location:{area:areaName,city:cityName,state:stateName,pincode,nation:countryName},wasteRequirements,dealsProducts:dealsBool,linkedin,
                    website:websiteLink,type:typeOfOrganisation
                      }).save()
                if (newOrganisation) return sendSuccess(res, newOrganisation)
                else return sendError(res, err.message,err.message,422);
            } catch (err) {
                console.log(err.message)
                return sendError(res, err.message,err.message,422); 
            }
    }
}
