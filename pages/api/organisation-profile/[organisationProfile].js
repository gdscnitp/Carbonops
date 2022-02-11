import initDB from '../../../helpers/db';
import { sendSuccess, sendError } from '../../../utilities/response-helpers';
import organisationSchema from '../../../models/Organisation';

export default async function handler(req, res) {
  if (req.method === 'GET') {
    const orgProfile = req.query.organisationProfile;

    initDB();
  
    const organProfile = await organisationSchema.find({
      "organisationId": { $eq: orgProfile },
    });

    if (organProfile.length <= 0){
      return sendError(res, 'Not Found', 11, 404);
    } 
    return sendSuccess(res, organProfile); 
  } 
  else {
    return sendError(res, 'Bad request', 1, 400);
  }
}
