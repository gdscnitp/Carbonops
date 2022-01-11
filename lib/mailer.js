const nodemailer = require('nodemailer')
//import { sendSuccess,sendError } from "../utilities/response-helpers"


export default async function sendConfirmationMail(toUser,hash) { 
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
        <p><a target="_" href="http://localhost:3000/activate/user/${hash}">Activate</a></p>
        `
    }

     let info= await transporter.sendMail(message)
     console.log(info);
    //(err)=>{
    //      if(err)
    //      {
    //          console.log(err)
    //         //return sendError(res,"could not send confirmation email",11,422)
    //      }else
    //      {
    //          console.log("sent successfully")
    //      }
    //  });
    //  (message,(err,info) => {
    //     if (err) {
    //         return sendError(res,"Confirmation mail could not be send",11,422)
    //     }
    //     else {
    //         return sendSuccess(res,info)
    //     }
    // })
};