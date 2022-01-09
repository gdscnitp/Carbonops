import mongoose from 'mongoose'
import initDB from "../../helpers/db"
import { sendSuccess,sendError } from "../../utilities/response-helpers"

initDB() 

export default async (req, res) => {
    const {email,password,contact,dob,organisationId} = req.body

    try {
        if ((!email || !password || !contact) && (!dob && !organisationId)) {
            sendError(res,"Please fill all fields",_,422)
        }

        const regUser = (dob) ? await Individual.find({email}) : await Org.find({email})
        const pUserAcc = await PendAcc.find({email})

        if (regUser || pUserAcc) {
            sendError(res,"User already exists",_,422)
        }

        const newAccount = await PendAcc({email,password,contact,dob,organisationId})
    } catch (err) {
        
    }

}