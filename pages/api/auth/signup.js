
import initDB from "../../../helpers/db"
import { sendSuccess,sendError } from "../../../utilities/response-helpers"
const {sendConfirmationMail} = require("../../../lib/mailer")

initDB() 

export default async (req, res) => {
    const {email,password,contact,dob} = req.body

    try {
        if ((!email || !password || !contact) || !dob ) {
            sendError(res,"Please fill all fields",_,422)
        }

        const regUser =  await Individual.find({email})
        const pUserAcc = await PendAcc.find({email})

        if (regUser || pUserAcc) {
            sendError(res,"User already exists",_,422)
        }

        const newAccount = await PendAcc({email,password,contact,dob})
        await newAccount.save()
        await sendConfirmationMail({toUser : newAccount.data, hash: newAccount.data._id})
        sendSuccess(res,"Please check email for confirmation")
    } catch (err) {
        sendError(res,"Sorry",_,422)
    }

}