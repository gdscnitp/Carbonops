
import initDB from "../../helpers/db"
import { sendSuccess,sendError } from "../../utilities/response-helpers"
const {sendConfirmationMail} = require("./mailer")

initDB() 

export default async (req, res) => {
    const {email,password,contact,organisationId} = req.body

    try {
        if ((!email || !password || !contact) ||  !organisationId){
            sendError(res,"Please fill all fields",_,422)
        }

        const regUser =  await Org.find({email})
        const pUserAcc = await PendAcc.find({email})

        if (regUser || pUserAcc) {
            sendError(res,"User already exists",_,422)
        }

        const newAccount = await PendAcc({email,password,contact,organisationId})
        await newAccount.save()
        await sendConfirmationMail({toUser : newAccount.data, hash: newAccount.data._id})
        sendSuccess(res,"Please check email for confirmation")
    } catch (err) {
        sendError(res,"Sorry",_,422)
    }

}