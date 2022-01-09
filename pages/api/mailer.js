const nodemailer = require('nodemailer')

//a bit of confusion where to use await
export default sendConfirmationMail = async (toUser,hash) => {
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
        <h3>hi ${toUser.username}</h3>
        <p><a target="_" href="${process.env.DOMAIN}/api/activate/user/${hash}">Activate</a></p>
        `
    }

     transporter.sendMail(message,(err,info) => {
        if (err) {
            sendError(res,"Confirmation mail could not be send",_,422)
        }
        else {
            sendSuccess(res,info)
        }
    })
}