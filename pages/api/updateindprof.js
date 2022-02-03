import initDB from "../../helpers/db"
import { sendSuccess, sendError } from "../../utilities/response-helpers"
var Individual = require("../../models/Individual");
var updatedUser = {}

export default async function handler(req, res) {

    if (req.method === 'PATCH') {
        try {
            const { toUpdate } = req.body
            console.log(toUpdate);
            const { email, userName, occupation,address,contact } = toUpdate
            const {area,city,state,pincode,nation} = address[0]
            if (!area || !state || !pincode || !nation || !city){
                return sendError(res,9, "Fill all address fields", 400)
            }
            if (!userName && !occupation && !contact && !address) {
                return sendError(res,9, "Fill at least one field", 400)
            }      
            initDB()

            for (const userdata in toUpdate){
                if (userdata === "userName" && userName !== ''){
                   
                    updatedUser = await Individual.findOneAndUpdate( { email: {$eq:email} }, 
                        {"$set":{"name":userName}},
                        { new: true })
                    console.log(updatedUser);

                }
                else if (userdata === "occupation" && occupation !== ''){
                    updatedUser = await Individual.findOneAndUpdate( { email: {$eq:email} }, 
                        {"$set":{"occupation":occupation}},
                        { new: true })
                    console.log(updatedUser);
                }
                else if (userdata === "address" && address !== ''){
                    updatedUser = await Individual.findOneAndUpdate( { email: {$eq:email} }, 
                        {"$set":{"address":address}},
                        { new: true })
                    console.log(updatedUser);
                }
                else if (userdata === "contact" && contact !== ''){
                    updatedUser = await Individual.findOneAndUpdate( { email: {$eq:email} }, 
                        {"$set":{"contact":contact}},
                        { new: true })
                    console.log(updatedUser);
                }
            }         
            return sendSuccess(res, updatedUser);

        } catch (error) {
            return sendError(res, 9,error, 400)
        }
    }

}