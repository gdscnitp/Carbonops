const nodemailer = require('nodemailer')
import { sendSuccess,sendError } from "../utilities/response-helpers"


export default function sendConfirmationMail(toUser,hash) {
    console.log(toUser)
    console.log(hash)
    console.log("Sending mail start")
    const transporter =  nodemailer.createTransport({
        service : 'gmail',
        auth:  {
            user: process.env.GOOGLE_USER,
            pass: process.env.GOOGLE_PASSWORD,
        }
    })

    const message = {
        from: process.env.GOOGLE_USER,
        to:toUser,
        subject: 'Activate account',
        html: `
        <h3>hi ${toUser}</h3>
        <p><a target="_" href="${process.env.DOMAIN}/activate/user/${hash}">Activate</a></p>
        `
    }

     transporter.sendMail(message) 
        // if (err) {
        //     console.log(err);
        //     return sendError(res, err.message,err.message,422);  
        // }
        // else {
        //     return sendSuccess(res,info)
        // }
    
}

