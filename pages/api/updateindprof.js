import initDB from "../../helpers/db"
import { sendSuccess, sendError } from "../../utilities/response-helpers"
var Individual = require("../../models/Individual");
var updatedUser = {}

export default async function handler(req, res) {

    if (req.method === 'PATCH') {
        //console.log(req.body)
        try {
            const  toUpdate = req.body
            //console.log(toUpdate);
            const { email, name, occupation,address,contact } = toUpdate
            //console.log(name,occupation)
            const {area,city,state,pincode,nation} = address;
            
            if (!name && !occupation && !contact && !area && !city && !state && !pincode && !nation) {
                return sendError(res, "Fill at least one field",9, 400)
            }   
            
           
            if ((area || state || pincode || nation || city)){
                if(!area || !state || !pincode || !nation || !city)
                {
                    return sendError(res, "Fill all address fields",9, 400)
                }  
            }
              
            initDB()

            for (const userdata in toUpdate){
                //console.log(userdata)
                if (userdata === "name" && name !== ''){
                   
                    updatedUser = await Individual.findOneAndUpdate( { email: {$eq:email} }, 
                        {"$set":{"name":name}},
                        { new: true })
                    //console.log(updatedUser);

                }
                else if (userdata === "occupation" && occupation !== ''){
                    updatedUser = await Individual.findOneAndUpdate( { email: {$eq:email} }, 
                        {"$set":{"occupation":occupation}},
                        { new: true })
                    //console.log(updatedUser);
                }
                else if (userdata === "address" && address !== ''){
                    updatedUser = await Individual.findOneAndUpdate( { email: {$eq:email} }, 
                        {"$set":{"address":address}},
                        { new: true })
                    //console.log(updatedUser);
                }
                else if (userdata === "contact" && contact !== ''){
                    updatedUser = await Individual.findOneAndUpdate( { email: {$eq:email} }, 
                        {"$set":{"contact":contact}},
                        { new: true })
                   // console.log(updatedUser);
                }
            }      
            console.log(updatedUser)   
            return sendSuccess(res, updatedUser);

        } catch (error) {
            return sendError(res,error,9, 400)
        }
    }

}