import initDB from '../../helpers/db'
import { sendError,sendSuccess } from '../../utilities/response-helpers';
var Indiv =require("../../models/Individual")
import potentialIndividual from "./auth/signupin"

export default async function indProfileCompletion (req, res){
    if (req.method === "POST"){

        initDB()
        const {inProfValues} = req.body
        const {individualName,
            areaName,
            cityName,
            stateName,
            pincode,
            countryName,
            occupation,
            facebook,
            linkedin} = inProfValues
            console.log(inProfValues)
           
            //checking if id exists in verified account or not
            var idExists = await VerAcc.find({_id:{$eq:id}})
            //console.log(idExists);
        if (idExists !== null) {
             const {email,password,contact,dob,isOrganisation} = idExists[0]  
            //console.log(email,contact,dob)
            
            try {
                if (!individualName || !areaName || !cityName || !stateName || !pincode || !countryName || !occupation || !facebook || !linkedin) {
                    return sendError(res,"Please fill all fields",11,422)//facebook profile link is not required.
                }


                const newIndividual = await  new Indiv({
                        name:individualName,
                        // email:"srijan@gmail.com",password:"testdscTenv*$app123",contact:"6203544363",dob:"2022-01-04",
                        email,password,contact,dob,
                        
                    address:{area:areaName,city:cityName,state:stateName,pincode,nation:countryName},occupation,facebook,linkedin
                      }).save()
                if (newIndividual) return sendSuccess(res, newIndividual)
                else return sendError(res, err.message,err.message,422);
            } catch (err) {
                console.log(err.message)
                return sendError(res, err.message,err.message,422); 
            }
    }
}
}
