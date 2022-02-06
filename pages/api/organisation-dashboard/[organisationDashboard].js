import initDB from '../../../helpers/db';
import { sendSuccess, sendError } from '../../../utilities/response-helpers';
import { emailCheck } from '../../../utilities/validation';
import organisationSchema from '../../../models/Organisation';

initDB();

export default async function handler(req, res) {
  console.log(req.query);
  if (req.method === 'GET') {
    const mailId = req.query.organisationDashboard;
    // const mailId = req.body.mailId;
    const mail = {
      email: {$eq: mailId}
    };
    console.log(mailId);
    // checking if mail is valid or not
    console.log(mail.email)
    const checkMail = emailCheck(mailId);
    if (checkMail) {
      // console.log(mail.email);
      const Org = await organisationSchema.find({ mailId: mailId });
      if (Org.length <= 0) return sendError(res, 'Not Found', 11, 404);
      else {
        // console.log(Org);
        if (Org) {
          return sendSuccess(res, Org);
        } else {
          return sendError(res, 'User Not Found', 11, 404);
        }
      }
    } else {
      return sendError(res, 'Email Invalid', 11, 400);
    }
  } else {
    return sendError(res, 'Bad rquest(NOT GET)', 8, 400);
  }
}

