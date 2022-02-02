import initDB from "../../helpers/db"
import { sendSuccess, sendError } from "../../utilities/response-helpers"
var Individual = require("../../models/Individual");
var updatedUser = {}

export default async function handler(req, res) {

    if (req.method === 'PATCH') {
        try {
            const { values } = req.body
            console.log(values);
            const { email, name, occupation, contact } = values
            if (!name && !occupation && !contact) {
                return sendError(res, "Fill at least one field", 9, 400)
            }
            // const {email, name,occupation,contact, areaName,cityName,stateName,pincode,
            // countryName } = values
            // if (!name && !occupation && !contact && !areaName && !cityName && !stateName
            //      && !pincode && !countryName) {
            //     return sendError(res,"Fill at least one field", 9, 400)
            // }          
            initDB()

            // if (userdata === areaName) {
            //     await Individual.updateOne({email:email},{$set:{area:values[areaName]}})
            // }
            // else if (userdata === cityName) {
            //     await Individual.updateOne({email:email},{$set:{city:values[cityName]}})
            // }
            // else if (userdata === stateName) {
            //     await Individual.updateOne({email:email},{$set:{city:values[stateName]}})
            // }
            // else if (userdata === pincode) {
            //     await Individual.updateOne({email:email},{$set:{city:values[pincode]}})
            // }
            // else if (userdata === countryName) {
            //     await Individual.updateOne({email:email},{$set:{city:values[countryName]}})
            // }
            // else {
            //     await Individual.updateOne({email:email},{$set:{userdata:values[userdata]}})
            // }


            const filter = { email: email }
            const update = { occupation: occupation, contact: contact, name: name }
            updatedUser = await Individual.findOneAndUpdate(filter, update,
                { new: true })
            console.log(updatedUser);

            return sendSuccess(res, updatedUser);

        } catch (error) {
            return sendError(res, error, 9, 400)
        }
    }

}